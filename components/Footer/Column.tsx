import { ArrowIcon } from '../icons/arrow-icon'
import { Badge } from './Badge'
import { FooterLink } from './BottomLink'

export interface ColumnProps {
  items: Array<{
    iconLeft?: boolean
    iconRight?: boolean
    isBeta?: boolean
    name: string
  }>
  text: string
}

export function Column({ items, text }: ColumnProps) {
  const hasItems = items && items.length > 0

  return (
    <div>
      <div className="gap-2 py-3">
        <span className="leading-[110.00000000000001%] font-medium tracking-[0%] text-white">
          {text}
        </span>
      </div>

      <ul>
        {hasItems &&
          items.map((item, index) => (
            <FooterLink key={`${index} - ${item.name}`}>
              <span className="leading-[140%] tracking-[0%]">{item.name}</span>

              <div>
                {item.iconLeft && <ArrowIcon width={24} height={24} />}
                {item.isBeta && <Badge />}
                {item.iconRight && <ArrowIcon width={24} height={24} />}
              </div>
            </FooterLink>
          ))}
      </ul>
    </div>
  )
}
