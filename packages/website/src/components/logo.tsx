import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export function Logo({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <h1
      className={clsx(
        'bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text font-bold text-lg text-transparent',
        className
      )}
      {...props}
    >
      Theme toggles
    </h1>
  )
}
