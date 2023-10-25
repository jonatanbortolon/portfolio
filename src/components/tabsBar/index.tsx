import { useOpenedFiles } from '@/hooks/useOpenedFiles'
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd'
import { useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export function TabsBar() {
  const { files, names, paths, selectedIndex, closeFile, reorderOpenedFiles } =
    useOpenedFiles()
  const navigate = useNavigate()

  function handleFileClick(fileName: string, path: string) {
    if (fileName === '_') {
      return navigate('/')
    }

    navigate(`${path}${path === '' ? '' : '/'}${fileName}`)
  }

  function reorderFiles(result: DropResult) {
    if (!result.destination) {
      return
    }

    reorderOpenedFiles(result.source.index, result.destination.index)
  }

  return (
    <DragDropContext onDragEnd={reorderFiles}>
      <Droppable
        droppableId="list-container-editor-file-list"
        direction="horizontal"
      >
        {(provided) => (
          <div
            className="w-full h-full flex flex-row bg-[#2d2d2d] overflow-x-auto scrollbar-h-[3px] scrollbar scrollbar-track-transparent scrollbar-thumb-[#4f4f4f]"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {files.map((file, index) => {
              const fileName = names[index]
              const filePath = paths[index]

              return (
                <Draggable
                  key={filePath + '/' + fileName}
                  draggableId={filePath + '/' + fileName}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className={twMerge(
                        'w-fit h-full flex flex-row items-center justify-center cursor-pointer whitespace-nowrap px-[15px] py-0 group',
                        index === selectedIndex
                          ? 'text-white bg-[#1e1e1e] [&>button]:opacity-100'
                          : 'bg-[#2d2d2d]',
                      )}
                      onClick={() => handleFileClick(fileName, filePath)}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="codicon codicon-file w-auto text-[#3e94da] mr-[5px]" />
                      <span>{fileName + '.' + file.extension}</span>
                      <button
                        className="w-5 h-5 flex justify-center items-center cursor-pointer rounded opacity-0 ml-2.5 p-0.5 hover:bg-[#424347] group-hover:opacity-100"
                        onClick={(event) => {
                          event.preventDefault()
                          event.stopPropagation()

                          closeFile(index)
                        }}
                      >
                        <div className="codicon codicon-close w-full h-auto text-white" />
                      </button>
                    </div>
                  )}
                </Draggable>
              )
            })}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
