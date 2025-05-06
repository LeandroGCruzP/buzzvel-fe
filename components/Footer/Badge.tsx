import clsx from 'clsx'
import { HTMLAttributes } from 'react'

type Sizes = 'sm' | 'md'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  size?: Sizes
  text: string
}

export function Badge({ className, size = 'md', text, ...props }: BadgeProps) {
  const baseClasses =
    'flex w-min items-center rounded-[0.25rem] bg-purple-100 text-purple-800'
  const sizes: Record<Sizes, string> = {
    md: 'h-6 text-[0.875rem] px-1 py-2 h-[30px]',
    sm: 'h-5 text-xs leading-[140%] tracking-normal p-1',
  }

  return (
    <div className={clsx(baseClasses, sizes[size], className)} {...props}>
      <div className="gap-[10px] px-1">
        <span>{text}</span>
      </div>
    </div>
  )
}
