import { CheckIcon } from '~/components/icons/check-icon'

interface LineItemProps {
  text: string
}

export function LineItem({ text }: LineItemProps) {
  return (
    <div className="flex gap-2">
      <CheckIcon width={24} height={24} />
      <p className="mb-[5px] text-xl leading-[180%]">{text}</p>
    </div>
  )
}
