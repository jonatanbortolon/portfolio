import { Breadcumbs } from '@/components/breadcumbs'
import { Editor } from '@/components/editor'
import { IFile } from '@/types/File'
import { useLoaderData, useParams } from 'react-router-dom'

export function IndexPage() {
  const params = useParams()
  const file = useLoaderData() as IFile | null

  const pagePathsArray = params['*']?.split('/').filter(Boolean)
  const pageName = pagePathsArray?.at(-1) ?? (file && '_')
  const pagePaths = pagePathsArray?.slice(0, -1).join('/') ?? null

  return (
    <div className="w-full h-full flex flex-col">
      <Breadcumbs
        hasFile={!!file}
        name={pageName}
        path={pagePathsArray?.slice(0, -1)}
        extension={file?.extension}
      />
      <Editor file={file} name={pageName} path={pagePaths} />
    </div>
  )
}
