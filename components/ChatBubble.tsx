interface ChatBubbleProps {
  side?: 'left' | 'right'
  text: string
}

export function ChatBubble({ side = 'left', text }: ChatBubbleProps) {
  const rounded = side === 'left' ? 'rounded-bl-[3px]' : 'rounded-br-[3px]'
  const background = side === 'left' ? 'bg-blue-gray-700' : 'bg-white'
  const textColor = side === 'left' && 'text-white'

  return (
    <div
      className={`shadow-dark-m w-min rounded-[15px] ${rounded} ${background} px-4 py-2 ${textColor}`}
    >
      <span className="text-xs text-nowrap md:text-lg">{text}</span>
    </div>
  )
}
