import { IFile } from '@/types/File'
import { createContext } from 'react'

type OpenedFilesContext = {
  files: Array<IFile>
  names: Array<string>
  paths: Array<string>
  selectedIndex: number
  selectFile: (index: number) => void
  openFile: (file: IFile, name: string, path: string) => void
  closeFile: (index: number) => void
  reorderOpenedFiles: (source: number, destination: number) => void
}

export const openedFilesContext = createContext<OpenedFilesContext>(
  {} as OpenedFilesContext,
)
