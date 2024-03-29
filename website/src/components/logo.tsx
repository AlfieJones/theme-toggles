import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export function Logo({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <h1
      className={clsx(
        'bg-gradient-to-r from-purple-500 to-blue-400 dark:from-purple-600 dark:to-blue-500 bg-clip-text font-bold text-md sm:text-xl text-transparent',
        className
      )}
      {...props}
    >
      Theme toggles
    </h1>
  )
}
