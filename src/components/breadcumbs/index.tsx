import { Fragment } from 'react'

type Props = {
  hasFile: boolean
  name?: string | null
  path?: Array<string> | null
  extension?: string | null
}

export function Breadcumbs({ hasFile, path, name, extension }: Props) {
  return (
    <div className="w-full flex items-center bg-[#1e1e1e] px-[15px] py-1 shadow-sm">
      {hasFile ? (
        <>
          {path
            ? path.map((path, index) => (
                <Fragment key={index}>
                  <span>{path}</span>
                  <div className="codicon codicon-chevron-right !text-base my-auto mx-[1px]" />
                </Fragment>
              ))
            : null}
          <div className="codicon codicon-file w-auto text-[#3e94da] mr-[5px]" />
          {(name ?? '_') + '.' + extension}
        </>
      ) : (
        <span>not-found.txt</span>
      )}
    </div>
  )
}
