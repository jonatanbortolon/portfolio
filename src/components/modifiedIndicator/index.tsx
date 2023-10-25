import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>

export function ModifiedIndicator({ className, ...restProps }: Props) {
  return (
    <span
      className={twMerge('font-bold text-xs text-[#9a8667]', className)}
      {...restProps}
    >
      M
    </span>
  )
}
