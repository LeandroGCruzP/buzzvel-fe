import Image from 'next/image'
import pictureImg from '~/assets/picture.png'
import rectangleImg from '~/assets/rectangle.svg'
import squareImg from '~/assets/squares.svg'
import { ChatIcon } from './icons/chat-icon'
import { SliderCues } from './SliderCues'

export function Section3() {
  return (
    <section className="flex flex-col gap-12 overflow-hidden border-b border-yellow-400 bg-yellow-400 px-4 py-12">
      <div className="flex flex-col gap-12">
        <div className="flex gap-12 border-r-[3px] border-yellow-400 text-lg">
          <div className="flex flex-col gap-4">
            <p className="leading-[160%]">
              Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu
              mattis est velit in. Nibh in purus sit convallis phasellus ut. At
              vel erat ultricies commodo. Neque suspendisse a habitasse commodo.
            </p>

            <div>
              <p className="leading-[160%]">Marie Poirot, </p>
              <p className="mb-[5px] leading-[110%] font-medium">Bigapp</p>
            </div>
          </div>
        </div>

        <SliderCues />
      </div>

      <div className="relative z-0 max-w-[528px]">
        <Image
          src={rectangleImg}
          alt="Rectangle image background"
          height={375.63}
          width={325.74}
          className="absolute -top-22 -right-14 -z-10 w-[150vw] max-w-[573.11px]"
        />
        <ChatIcon width={48} height={48} className="absolute -top-17 right-8" />
        <Image
          src={pictureImg}
          alt="Picture image"
          height={294}
          className="max-h-[415px] w-full max-w-[528px]"
        />
        <Image
          src={squareImg}
          alt="Squares icons"
          height={199.88}
          className="absolute -bottom-32 left-10"
        />
      </div>

      {/* <PlaneIcon width={24} height={24} /> */}
    </section>
  )
}
