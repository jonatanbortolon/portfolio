import { IFileFolder } from '@/types/File'
import { fetchPages } from './fetchPages'
import { instanceOfFile } from './instanceOfFile'

export function fetchPage(paths: Array<string>) {
  const pagesFile = fetchPages()

  if (paths.filter(Boolean).length === 0) {
    return pagesFile._
  }

  const fileFolder = paths.reduce(
    (accumulator, path, index) => {
      if (!accumulator) {
        return pagesFile[path]
      } else {
        if (!accumulator) return null

        if (!instanceOfFile(accumulator) && index === paths.length - 1) {
          return accumulator.childrens[path]
        }

        if (!instanceOfFile(accumulator)) {
          return null
        }

        if (index === paths.length - 1) {
          return null
        }

        return accumulator
      }
    },
    null as IFileFolder | null,
  )

  return fileFolder ? (instanceOfFile(fileFolder) ? fileFolder : null) : null
}
