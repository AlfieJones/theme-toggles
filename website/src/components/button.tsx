import Link, { LinkProps } from 'next/link'
import clsx from 'clsx'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { ComponentPropsWithoutRef, ElementType } from 'react'

const variantStyles = {
  primary:
    'rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-1 dark:ring-inset dark:ring-indigo-400/20 dark:hover:bg-indigo-400/10 dark:hover:text-indigo-300 dark:hover:ring-indigo-300',
  secondary:
    'rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300',
  filled:
    'rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-400',
  outline:
    'rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white',
  text: 'text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-500',
}

type Props<
  THref extends string | undefined,
  TExternal extends boolean | undefined
> = THref extends string
  ? ComponentPropsWithoutRef<'button'>
  : TExternal extends true
  ? ComponentPropsWithoutRef<'a'>
  : typeof Link

interface ButtonProps<
  THref extends string | undefined,
  TExternal extends boolean | undefined
> {
  variant?: keyof typeof variantStyles
  arrow?: 'left' | 'right'
  href?: THref
  external?: TExternal
}

export function Button<
  THref extends string | undefined,
  TExternal extends boolean | undefined
>({
  variant = 'primary',
  className,
  external,
  children,
  arrow,
  ...props
}: ButtonProps<THref, TExternal> & Props<THref, TExternal>) {
  let Component: ElementType

  if (props.href) {
    Component = external ? 'a' : Link
  } else {
    Component = 'button'
  }

  className = clsx(
    'inline-flex gap-0.5 justify-center text-sm font-medium transition group',
    variantStyles[variant],
    className
  )

  let arrowIcon = (
    <ArrowRightIcon
      className={clsx(
        'mt-0.5 h-5 w-5',
        variant === 'text' &&
          'relative top-px transition group-hover:translate-x-1',
        arrow === 'left' && '-mr-1.5 rotate-180',
        arrow === 'right' && '-ml-1.5'
      )}
    />
  )

  return (
    <Component className={className} {...props}>
      {arrow === 'left' && arrowIcon}
      {children}
      {arrow === 'right' && arrowIcon}
    </Component>
  )
}
