import { Button } from './Button'
import { Badge, type BadgeProps } from './Footer/Badge'

interface ContentGroupProps {
  badge: BadgeProps
  description: string
  title: string
}

export function ContentGroup({ badge, description, title }: ContentGroupProps) {
  return (
    <div className="shadow-dark-xl relative max-w-[25.75rem] rounded-[10px] bg-white pt-6">
      <Badge {...badge} className="absolute top-4 left-4" />

      <div className="flex flex-col gap-2 px-4 pt-6">
        <span className="leading-[110%] font-medium">{title}</span>

        <p className="text-blue-gray-600 text-xs leading-[140%]">
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
