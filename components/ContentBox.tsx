import { Roboto } from 'next/font/google'
import Image, { StaticImageData } from 'next/image'

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
})

interface ContentBoxProps {
  alt: string
  description: string
  icon: StaticImageData
  value: string
}

export function ContentBox({ alt, description, icon, value }: ContentBoxProps) {
  return (
    <div className={`flex flex-col items-center gap-2 ${roboto.className}`}>
      <Image src={icon} alt={alt} height={64} width={64} />
      <span className="text-[3rem] leading-[110%] font-extrabold">{value}</span>
      <span className="leading-[140%]">{description}</span>
    </div>
  )
}
