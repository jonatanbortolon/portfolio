import { IFile, IFileFolder } from '@/types/File'
import data from '../../pages.json'

export function fetchPages() {
  const pagesFile: {
    ['_']: IFile
    [name: string]: IFileFolder
  } = data

  return pagesFile
}
