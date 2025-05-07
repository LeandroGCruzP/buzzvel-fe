import Image from 'next/image'
import pictureImg from '~/assets/picture.png'
import rectangleImg from '~/assets/rectangle.svg'
import squareImg from '~/assets/squares.svg'
import { ChatIcon } from './icons/chat-icon'
import { ChevronForwardIcon } from './icons/chevron-forward-icon'
import { SliderCues } from './SliderCues'

export function Section3() {
  return (
    <section className="flex flex-col gap-12 border-b border-yellow-400 bg-yellow-400 px-4 py-12 lg:flex-row lg:gap-20 lg:p-20">
      <div className="flex items-center gap-6">
        <ChevronForwardIcon
          width={48}
          height={48}
          className="hidden rotate-180 cursor-pointer fill-white transition duration-200 hover:scale-110 lg:flex"
        />

        <div className="flex w-full flex-col gap-12">
          <div className="flex gap-12 border-r-[3px] border-yellow-400 text-lg">
            <div className="flex flex-col gap-4">
              <p className="leading-[160%] lg:mb-[5px] lg:text-2xl">
                Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu
                mattis est velit in. Nibh in purus sit convallis phasellus ut.
                At vel erat ultricies commodo. Neque suspendisse a habitasse
                commodo.
              </p>

              <div>
                <p className="leading-[160%] lg:mb-[5px] lg:text-2xl">
                  Marie Poirot,{' '}
                </p>
                <p className="mb-[5px] leading-[110%] font-medium lg:text-2xl lg:font-bold">
                  Bigapp
                </p>
              </div>
            </div>
          </div>

          <SliderCues />
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-6">
        <div className="relative z-10">
          <Image
            src={pictureImg}
            alt="Picture image"
            height={294}
            className="z-10 h-[294px] max-h-[415px] min-w-[360px]"
          />
          <Image
            src={rectangleImg}
            alt="Rectangle image background"
            height={375.63}
            width={325.74}
            className="absolute -top-1/4 -right-1/8 -z-10 w-[130vw] max-w-[450px]"
          />
          <ChatIcon
            width={48}
            height={48}
            className="absolute -top-13 right-8"
          />
          <Image
            src={squareImg}
            alt="Squares icons"
            height={155}
            className="absolute -bottom-20 left-10 max-h-[155px]"
          />
        </div>
        <ChevronForwardIcon
          width={48}
          height={48}
          className="fill-blue-gray-900 hidden cursor-pointer transition duration-200 hover:scale-110 lg:flex"
        />
      </div>
    </section>
  )
}
