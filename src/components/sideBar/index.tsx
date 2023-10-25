import { useOpenedFiles } from '@/hooks/useOpenedFiles'
import { fetchPages } from '@/utils/fetchPages'
import { instanceOfFile } from '@/utils/instanceOfFile'
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd'
import { useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Dropdown } from '../dropdown'
import { ModifiedIndicator } from '../modifiedIndicator'

type Props = {
  files: Awaited<ReturnType<typeof fetchPages>>
}

export function SideBar({ files }: Props) {
  const navigate = useNavigate()
  const {
    files: openedFiles,
    names: openedNames,
    paths: openedPaths,
    selectedIndex,
    closeFile,
    reorderOpenedFiles,
  } = useOpenedFiles()

  function handleFileClick(fileName: string, path: string) {
    if (fileName === '_') {
      return navigate('/')
    }

    navigate(`${path}${path === '' ? '' : '/'}${fileName}`)
  }

  function renderFiles(files: Omit<Props['files'], '_'>, path = '') {
    return Object.keys(files).map((fileFolderPath) => {
      const fileFolder = files[fileFolderPath]

      if (!instanceOfFile(fileFolder)) {
        const folder = fileFolder

        return (
          <Dropdown
            key={'project-' + path + fileFolderPath + '/'}
            header={({ open }) => (
              <div className="w-full h-[25px] flex flex-row justify-start items-center cursor-pointer pl-[8px] pr-[33px] py-[3px]">
                {open ? (
                  <div
                    className={twMerge(
                      'codicon',
                      open ? 'codicon-chevron-down' : 'codicon-chevron-right',
                    )}
                  />
                ) : (
                  <div className="codicon codicon-chevron-right" />
                )}{' '}
                <span>{fileFolderPath}</span>
              </div>
            )}
          >
            {renderFiles(folder.childrens, path + fileFolderPath)}
          </Dropdown>
        )
      } else {
        const file = fileFolder

        return (
          <button
            className={twMerge(
              'relative w-full h-5 flex cursor-pointer',
              !!openedPaths[selectedIndex] &&
                path + fileFolderPath ===
                  openedPaths[selectedIndex] +
                    openedNames[selectedIndex] +
                    openedFiles[selectedIndex].extension &&
                'bg-[#37373d] hover:bg-[#2a2d2e]',
            )}
            key={fileFolderPath + '.' + file.extension}
            onClick={() => {
              handleFileClick(fileFolderPath, path)
            }}
          >
            <div className="absolute w-full h-full flex items-center px-[33px] py-[3px] pl-[23px]">
              <div className="codicon codicon-file w-auto text-[#3e94da]" />{' '}
              <span
                className={twMerge(
                  'w-full text-left text-ellipsis whitespace-nowrap overflow-hidden mx-[5px]',
                  file.modified && 'text-[#d7c074]',
                )}
              >
                {fileFolderPath + '.' + file.extension}
              </span>
              {file.modified ? <ModifiedIndicator className="ml-auto" /> : null}
            </div>
          </button>
        )
      }
    })
  }

  function reorderFiles(result: DropResult) {
    if (!result.destination) {
      return
    }

    reorderOpenedFiles(result.source.index, result.destination.index)
  }

  return (
    <div className="w-full h-full flex flex-col bg-[#252526]">
      <div className="w-full h-10 flex justify-between items-center px-5 py-0">
        <span>EXPLORER</span>
        <button className="w-5 h-5 flex justify-center items-center rounded cursor-pointer px-0.5 py-0 hover:bg-[#363737]">
          <div className="codicon codicon-ellipsis w-full h-auto" />
        </button>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-start">
        <Dropdown
          header={({ open }) => (
            <div
              className={twMerge(
                'w-full h-[25px] flex justify-start items-center uppercase text-white text-xs font-bold cursor-pointer',
              )}
            >
              <div
                className={twMerge(
                  'codicon',
                  open ? 'codicon-chevron-down' : 'codicon-chevron-right',
                  'w-auto h-[15px] mr-0.5',
                )}
              />
              <span>Open editors</span>
            </div>
          )}
          initialOpen
        >
          <DragDropContext onDragEnd={reorderFiles}>
            <Droppable droppableId="list-container-open-editors">
              {(provided) => (
                <div
                  className="w-full flex flex-col"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {openedFiles.map((file, index) => {
                    const fileName = openedNames[index]
                    const filePath = openedPaths[index]

                    return (
                      <Draggable
                        key={filePath + '/' + fileName}
                        draggableId={filePath + '/' + fileName}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className={twMerge(
                              'relative w-full h-5 flex cursor-pointer group',
                              index === selectedIndex &&
                                'bg-[#37373d] hover:bg-[#2a2d2e] [&>button]:opacity-100',
                            )}
                            key={
                              'open-editors-' +
                              filePath +
                              fileName +
                              '.' +
                              file.extension
                            }
                            onClick={() => {
                              handleFileClick(fileName, filePath)
                            }}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="absolute w-full h-full flex items-center px-[33px] py-[3px] pl-[23px]">
                              <button
                                className="w-4 h-4 flex justify-center items-center cursor-pointer rounded opacity-0 p-0.5 hover:bg-[#424347] group-hover:opacity-100"
                                onClick={(event) => {
                                  event.preventDefault()
                                  event.stopPropagation()

                                  closeFile(index)
                                }}
                              >
                                <div className="codicon codicon-close text-white" />
                              </button>
                              <div className="codicon codicon-file w-auto text-[#3e94da]" />{' '}
                              <span
                                className={twMerge(
                                  'text-ellipsis whitespace-nowrap overflow-hidden mx-[5px]',
                                  file.modified && 'text-[#d7c074]',
                                )}
                              >
                                {fileName + '.' + file.extension}{' '}
                                <span className="text-xs font-light text-[#665714]">
                                  {filePath === ''
                                    ? ''
                                    : filePath +
                                      '/' +
                                      fileName +
                                      '.' +
                                      file.extension}
                                </span>
                              </span>
                              {file.modified ? (
                                <ModifiedIndicator className="ml-auto" />
                              ) : null}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Dropdown>
        <Dropdown
          header={({ open }) => (
            <div
              className={twMerge(
                'w-full h-[25px] flex justify-start items-center uppercase text-white text-xs font-bold cursor-pointer border-t-2 border-t-[#333333]',
              )}
            >
              <div
                className={twMerge(
                  'codicon',
                  open ? 'codicon-chevron-down' : 'codicon-chevron-right',
                  'w-auto h-[15px] mr-0.5',
                )}
              />
              <span>Portfolio</span>
            </div>
          )}
          fullOpen
          initialOpen
        >
          {renderFiles(files)}
        </Dropdown>
        <Dropdown
          header={({ open }) => (
            <div
              className={twMerge(
                'w-full h-[25px] flex justify-start items-center uppercase text-white text-xs font-bold cursor-pointer border-t-2 border-t-[#333333]',
              )}
            >
              <div
                className={twMerge(
                  'codicon',
                  open ? 'codicon-chevron-down' : 'codicon-chevron-right',
                  'w-auto h-[15px] mr-0.5',
                )}
              />
              <span>Outline</span>
            </div>
          )}
        />
        <Dropdown
          header={({ open }) => (
            <div
              className={twMerge(
                'w-full h-[25px] flex justify-start items-center uppercase text-white text-xs font-bold cursor-pointer border-t-2 border-t-[#333333]',
              )}
            >
              <div
                className={twMerge(
                  'codicon',
                  open ? 'codicon-chevron-down' : 'codicon-chevron-right',
                  'w-auto h-[15px] mr-0.5',
                )}
              />
              <span>Timeline</span>
            </div>
          )}
        />
      </div>
    </div>
  )
}
