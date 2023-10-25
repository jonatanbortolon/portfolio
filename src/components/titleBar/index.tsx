import { useOpenedFiles } from '@/hooks/useOpenedFiles'

export function TitleBar() {
  const { selectedIndex, names } = useOpenedFiles()

  return (
    <div className="w-full h-full flex flex-row bg-[#323233]">
      <div className="w-full h-full flex items-center justify-start">
        <label
          className="w-fit h-full flex md:hidden items-center justify-center cursor-pointer px-2.5 py-0 hover:bg-[#474748]"
          htmlFor="menu"
        >
          <div className="codicon codicon-menu" />
        </label>
        <div className="w-fit h-full flex items-center justify-center cursor-pointer px-2.5 py-0 hover:bg-[#474748]">
          <span>File</span>
        </div>
        <div className="w-fit h-full flex items-center justify-center cursor-pointer px-2.5 py-0 hover:bg-[#474748]">
          <span>Edit</span>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-start">
        <span className="text-ellipsis whitespace-nowrap overflow-hidden mx-auto">
          {names[selectedIndex] ? `${names[selectedIndex]} - ` : null}portfolio
        </span>
      </div>
      <div className="w-full h-full flex items-center justify-end">
        <div
          className={
            'w-[50px] h-full flex items-center justify-center cursor-pointer hover:bg-[#474748]'
          }
        >
          <div className="codicon codicon-chrome-minimize" />
        </div>
        <div
          className={
            'w-[50px] h-full flex items-center justify-center cursor-pointer hover:bg-[#474748]'
          }
        >
          <div className="codicon codicon-chrome-restore" />
        </div>
        <div
          className={
            'w-[50px] h-full flex items-center justify-center cursor-pointer hover:bg-[#d61425]'
          }
        >
          <div className="codicon codicon-chrome-close" />
        </div>
      </div>
    </div>
  )
}
