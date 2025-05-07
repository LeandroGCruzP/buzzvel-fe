import { ChevronDownIcon } from './icons/chevron-down-icon'

interface HeaderLinkProps {
  hasIcon?: boolean
  text: string
}

export function HeaderLink({ hasIcon = false, text }: HeaderLinkProps) {
  return (
    <div className="group relative -bottom-0.5 flex cursor-pointer gap-2 px-2 py-3">
      <span className="relative">
        {text}
        <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 rounded-full bg-orange-600 transition-transform duration-200 group-hover:scale-x-100" />
      </span>
      {hasIcon && <ChevronDownIcon width={24} height={24} />}
    </div>
  )
}
