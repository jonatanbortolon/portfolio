export type IFile = {
  extension: string
  modified: boolean
  content: string[]
}

export type IFolder = {
  childrens: { [name: string]: IFile | IFolder }
}

export type IFileFolder = IFile | IFolder
