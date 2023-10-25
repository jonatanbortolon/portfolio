import { openedFilesContext } from '@/contexts/openedFiles'
import { useContext } from 'react'

export function useOpenedFiles() {
  const context = useContext(openedFilesContext)

  return context
}
