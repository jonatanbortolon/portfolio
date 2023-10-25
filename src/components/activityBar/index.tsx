export function ActivityBar() {
  return (
    <div className="w-full h-full flex flex-col bg-[#333333] [&>div>div]:!text-2xl">
      <div className="w-full h-[50px] flex justify-center items-center cursor-pointer px-0 py-[13px] text-white border-l-2 border-l-white hover:text-white">
        <div className="codicon codicon-files" />
      </div>
      <div className="w-full h-[50px] flex justify-center items-center cursor-pointer px-0 py-[13px] hover:text-white">
        <div className="codicon codicon-search" />
      </div>
      <div className="w-full h-[50px] flex justify-center items-center cursor-pointer px-0 py-[13px] hover:text-white">
        <div className="codicon codicon-source-control" />
      </div>
      <div className="w-full h-[50px] flex justify-center items-center cursor-pointer px-0 py-[13px] hover:text-white">
        <div className="codicon codicon-debug-alt" />
      </div>
      <div className="w-full h-[50px] flex justify-center items-center cursor-pointer px-0 py-[13px] hover:text-white">
        <div className="codicon codicon-extensions" />
      </div>
    </div>
  )
}
