import { IFile } from '@/types/File'

import { useOpenedFiles } from '@/hooks/useOpenedFiles'
import { useEffect } from 'react'

type Props = {
  file: IFile | null
  name?: string | null
  path?: string | null
}

export function Editor({ file, name, path }: Props) {
  const { openFile } = useOpenedFiles()

  useEffect(() => {
    if (file && name) openFile(file, name, path ?? '')
  }, [file, name, path])

  return (
    <div className="relative w-full h-full flex flex-col bg-[#1e1e1e] overflow-y-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-[#4f4f4f]">
      <div className="absolute w-full text-white font-jet-brains-mono [counter-reset:gutter] [&_a]:text-white [&_a]:underline inset-0">
        {[
          ...(file
            ? file.content
            : [
                '       444444444       000000000            444444444',
                '      4::::::::4     00:::::::::00         4::::::::4',
                '     4:::::::::4   00:::::::::::::00      4:::::::::4',
                '    4::::44::::4  0:::::::000:::::::0    4::::44::::4',
                '   4::::4 4::::4  0::::::0   0::::::0   4::::4 4::::4',
                '  4::::4  4::::4  0:::::0     0:::::0  4::::4  4::::4',
                ' 4::::4   4::::4  0:::::0     0:::::0 4::::4   4::::4',
                '4::::444444::::4440:::::0 000 0:::::04::::444444::::444',
                '4::::::::::::::::40:::::0 000 0:::::04::::::::::::::::4',
                '4444444444:::::4440:::::0     0:::::04444444444:::::444',
                '          4::::4  0:::::0     0:::::0          4::::4',
                '          4::::4  0::::::0   0::::::0          4::::4',
                '          4::::4  0:::::::000:::::::0          4::::4',
                '        44::::::44 00:::::::::::::00         44::::::44',
                '        4::::::::4   00:::::::::00           4::::::::4',
                '        4444444444     000000000             4444444444',
                '<br/>',
                'File not found!',
              ]),
          '<span class="motion-safe:animate-blink">|</span>',
        ].map((line, index) => (
          <span
            className="w-full relative block leading-[1.1rem] whitespace-pre-wrap break-all pl-[70px] [counter-increment:gutter] before:absolute before:-translate-x-2/4 before:text-[#939494] before:text-sm before:content-[counter(gutter)] before:left-[35px]"
            key={index}
            dangerouslySetInnerHTML={{ __html: line }}
          />
        ))}
      </div>
    </div>
  )
}
