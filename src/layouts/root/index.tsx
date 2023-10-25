import { ActivityBar } from '@/components/activityBar'
import { SideBar } from '@/components/sideBar'
import { TabsBar } from '@/components/tabsBar'
import { TitleBar } from '@/components/titleBar'
import { OpenedFilesProvider } from '@/providers/openedFiles'
import { IFile, IFileFolder } from '@/types/File'
import { Resizable } from 're-resizable'
import { Outlet, useLoaderData } from 'react-router-dom'

export function RootLayout() {
  const pagesFile = useLoaderData()

  return (
    <OpenedFilesProvider>
      <div className="w-full h-full grid grid-rows-[30px_1fr]">
        <TitleBar />
        <div className="relative w-full h-full flex overflow-hidden">
          <input className="hidden peer" type="checkbox" id="menu" />
          <label
            className="absolute inset-0 bg-black/50 hidden peer-checked:block md:!hidden z-40"
            htmlFor="menu"
          />
          <Resizable
            className="w-full bg-[#252526] hidden !absolute max-w-[60%] min-w-[200px] peer-checked:flex md:!relative md:flex top-0 bottom-0 left-0 z-50"
            defaultSize={{ height: '100%', width: '30%' }}
            enable={{
              right: true,
            }}
          >
            <div className="w-full h-full grid grid-cols-[48px_1fr]">
              <ActivityBar />
              <SideBar
                files={
                  pagesFile as {
                    [name: string]: IFileFolder
                    _: IFile
                  }
                }
              />
            </div>
          </Resizable>
          <div className="w-full h-full grid grid-rows-[40px_1fr]">
            <TabsBar />
            <Outlet />
          </div>
        </div>
      </div>
    </OpenedFilesProvider>
  )
}
