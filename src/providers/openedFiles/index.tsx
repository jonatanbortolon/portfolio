import { openedFilesContext } from '@/contexts/openedFiles'
import { IFile } from '@/types/File'
import { reorder } from '@/utils/reorder'
import { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'usehooks-ts'

type Props = PropsWithChildren

export function OpenedFilesProvider({ children }: Props) {
  const navigate = useNavigate()
  const [selectedIndex, setSelectedIndex] = useLocalStorage('selectedIndex', 0)
  const [files, setFiles] = useLocalStorage<
    Array<{
      file: IFile
      name: string
      path: string
    }>
  >('files', [])

  function selectFile(index: number) {
    setSelectedIndex(index)
  }

  function openFile(file: IFile, name: string, path: string) {
    const fileOpenedIndex = isOpened(name, file.extension, path)

    if (fileOpenedIndex >= 0) return selectFile(fileOpenedIndex)

    setFiles((old) => {
      const oldHandler = structuredClone(old)

      return [
        ...oldHandler.slice(0, selectedIndex + 1),
        {
          file,
          name,
          path,
        },
        ...oldHandler.slice(selectedIndex + 1),
      ]
    })

    selectFile(selectedIndex + 1)
  }

  function closeFile(index: number) {
    const openedFiles = structuredClone(files)

    if (openedFiles.length <= 1) return

    openedFiles.splice(index, 1)

    setFiles(openedFiles)

    const newSelectedIndex =
      index === selectedIndex ? index - 1 : selectedIndex - 1

    const newSelected = openedFiles[newSelectedIndex]

    selectFile(newSelectedIndex)

    if (newSelected.name === '_') {
      return navigate('/')
    }

    navigate(
      `${newSelected.path}${newSelected.path === '' ? '' : '/'}${
        newSelected.name
      }`,
    )
  }

  function isOpened(name: string, extension: string, path: string) {
    return files.findIndex((file) => {
      return (
        file.path + file.name + '.' + file.file.extension ===
        path + name + '.' + extension
      )
    })
  }

  function reorderOpenedFiles(source: number, destination: number) {
    const oldHandler = structuredClone(files)

    const moveableFile = oldHandler[source]

    setFiles((old) => reorder(old, source, destination))

    if (source === selectedIndex) return selectFile(destination)

    if (moveableFile.name === '_') {
      return navigate('/')
    }

    navigate(
      `${moveableFile.path}${moveableFile.path === '' ? '' : '/'}${
        moveableFile.name
      }`,
    )
  }

  return (
    <openedFilesContext.Provider
      value={{
        files: files.map((file) => file.file),
        names: files.map((file) => file.name),
        paths: files.map((file) => file.path),
        selectFile,
        openFile,
        closeFile,
        selectedIndex,
        reorderOpenedFiles,
      }}
    >
      {children}
    </openedFilesContext.Provider>
  )
}
