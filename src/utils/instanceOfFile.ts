import { IFile, IFileFolder } from '@/types/File'

export function instanceOfFile(object: IFileFolder): object is IFile {
  return 'extension' in object
}
