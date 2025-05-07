import Image from 'next/image'
import gridPicturesImg from '../assets/grid-pictures.png'
import { Button } from './Button'
import { ArrowIcon } from './icons/arrow-icon'
import { SectionText } from './SectionText'

export function Section4() {
  return (
    <section className="flex flex-col gap-8 px-4 py-12">
      <SectionText
        alignment="left"
        headline2="Meet international students & teachers"
        text="Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer."
      />

      <Button
        variant="transparent"
        text="Explore teachers and students"
        iconRight={
          <ArrowIcon width={24} height={24} className="fill-blue-600" />
        }
        className="w-min pl-0 text-blue-600"
      />

      <Image
        src={gridPicturesImg}
        alt="Logo company 1"
        height={651}
        width={600}
        className="max-h-[651px] w-full max-w-[600px]"
      />
    </section>
  )
}
