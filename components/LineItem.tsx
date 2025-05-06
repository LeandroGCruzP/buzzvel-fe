import { Roboto } from 'next/font/google'
import { CheckIcon } from '~/components/icons/check-icon'

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
})

interface LineItemProps {
  text: string
}

export function LineItem({ text }: LineItemProps) {
  return (
    <div className="flex gap-2">
      <CheckIcon width={24} height={24} />
      <p className={`${roboto.className} mb-[5px] text-xl leading-[180%]`}>
        {text}
      </p>
    </div>
  )
}
