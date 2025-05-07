import Image from 'next/image'
import planeIcon from '~/assets/plane.svg'
import gridPicturesImg from '../assets/grid-pictures.png'
import { Button } from './Button'
import { ArrowIcon } from './icons/arrow-icon'
import { SectionText } from './SectionText'

export function Section4() {
  return (
    <section className="flex flex-col items-center gap-8 px-4 py-12 lg:flex-row-reverse lg:p-20">
      <div className="relative flex w-full flex-col gap-8">
        <Image
          src={planeIcon}
          alt="Plane icon"
          height={64}
          width={64}
          className="absolute -top-14 right-[45%] hidden lg:block"
        />
        <Image
          src={planeIcon}
          alt="Plane icon"
          height={24}
          width={24}
          className="absolute -top-5 left-[18%] block lg:hidden"
        />

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
          className="w-min pl-0 text-blue-600 lg:pl-0"
        />
      </div>

      <Image
        src={gridPicturesImg}
        alt="Logo company 1"
        width={600}
        className="h-fit w-full max-w-[600px] min-w-[600px]"
      />
    </section>
  )
}
