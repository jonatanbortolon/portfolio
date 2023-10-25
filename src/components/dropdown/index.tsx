import { ReactNode, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type DropdownProps = {
  header: (param: { open: boolean }) => ReactNode
  fullOpen?: boolean
  children?: ReactNode
  initialOpen?: boolean
}

export function Dropdown({
  header,
  fullOpen = false,
  children,
  initialOpen = false,
}: DropdownProps) {
  const [open, setOpen] = useState(initialOpen)

  return (
    <div
      className={twMerge(
        'w-full transition-[max-height] ease-[ease-in-out] duration-200 delay-[0ms] overflow-hidden',
        fullOpen && 'flex-1',
        fullOpen ? 'h-0' : 'h-fit',
        open ? 'max-h-full' : 'max-h-[25px]',
      )}
    >
      <div
        className="w-full flex"
        onClick={() => {
          setOpen(!open)
        }}
      >
        {header({ open })}
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  )
}
