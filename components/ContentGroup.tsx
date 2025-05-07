import clsx from 'clsx'
import { HTMLProps } from 'react'
import { Button } from './Button'
import { Badge, type BadgeProps } from './Footer/Badge'

interface ContentGroupProps extends HTMLProps<HTMLDivElement> {
  badge: BadgeProps
  description: string
  title: string
}

export function ContentGroup({
  badge,
  className,
  description,
  title,
  ...props
}: ContentGroupProps) {
  const baseClasses =
    'shadow-dark-xl relative max-w-[25.75rem] rounded-[10px] bg-white pt-6'

  return (
    <div className={clsx(baseClasses, className)} {...props}>
      <Badge {...badge} className="absolute top-4 left-4" />

      <div className="flex flex-col gap-2 px-4 pt-6">
        <span className="leading-[110%] font-medium lg:mb-[5px] lg:text-xl">
          {title}
        </span>

        <p className="text-blue-gray-600 text-xs leading-[140%] lg:text-[0.875rem]">
          {description}
        </p>
      </div>

      <div className="flex gap-4 p-4">
        <Button
          text="Take Lesson"
          variant="outline"
          size="sm"
          className="w-full"
        />
      </div>
    </div>
  )
}
