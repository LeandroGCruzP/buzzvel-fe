import clsx from 'clsx'
import { HTMLAttributes } from 'react'

type BadgeSizes = 'sm' | 'md'
type BadgeColors = 'blue' | 'green' | 'purple'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  color?: BadgeColors
  size?: BadgeSizes
  text: string
}

export function Badge({
  className,
  color = 'purple',
  size = 'md',
  text,
  ...props
}: BadgeProps) {
  const baseClasses = 'flex w-min items-center rounded-[0.25rem]'
  const sizes: Record<BadgeSizes, string> = {
    md: 'h-6 text-[0.875rem] px-1 py-2 h-[30px]',
    sm: 'h-5 text-xs leading-[140%] tracking-normal p-1',
  }
  const colors: Record<BadgeColors, string> = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
  }

  return (
    <div
      className={clsx(baseClasses, sizes[size], colors[color], className)}
      {...props}
    >
      <div className="gap-[10px] px-1">
        <span>{text}</span>
      </div>
    </div>
  )
}
