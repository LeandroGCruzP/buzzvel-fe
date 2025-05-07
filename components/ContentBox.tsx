import Image, { StaticImageData } from 'next/image'

interface ContentBoxProps {
  alt: string
  description: string
  icon: StaticImageData
  value: string
}

export function ContentBox({ alt, description, icon, value }: ContentBoxProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image src={icon} alt={alt} height={64} width={64} />
      <span className="text-5xl leading-[110%] font-extrabold lg:mb-[5px] lg:text-7xl">
        {value}
      </span>
      <p className="leading-[140%] lg:mb-[5px] lg:text-2xl lg:leading-[160%]">
        {description}
      </p>
    </div>
  )
}
