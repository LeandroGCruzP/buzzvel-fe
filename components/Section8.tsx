import Image from 'next/image'
import bIcon from '~/assets/section8/b.svg'
import bellIcon from '~/assets/section8/bell-icon.svg'
import briefcaseIcon from '~/assets/section8/briefcase-icon.svg'
import cartIcon from '~/assets/section8/cart-icon.svg'
import chatIcon from '~/assets/section8/chat.svg'
import clickIcon from '~/assets/section8/click-icon.svg'
import cubeIcon from '~/assets/section8/cube.svg'
import doorIcon from '~/assets/section8/door.svg'
import manBlueWhiteImg from '~/assets/section8/man-blue-white.jpg'
import manBlueImg from '~/assets/section8/man-blue.jpg'
import manGreenImg from '~/assets/section8/man-green.jpg'
import manLightBlueImg from '~/assets/section8/man-light-blue.jpg'
import manPaintImg from '~/assets/section8/man-paint.jpg'
import manRedImg from '~/assets/section8/man-red.jpg'
import manShadowImg from '~/assets/section8/man-shadow.jpg'
import sunIcon from '~/assets/section8/sun.svg'
import weatherIcon from '~/assets/section8/weather-icon.svg'
import webIcon from '~/assets/section8/web.svg'
import womanBlackImg from '~/assets/section8/woman-black.jpg'
import womanFlowerImg from '~/assets/section8/woman-flower.jpg'
import womanHatImg from '~/assets/section8/woman-hat.jpg'
import womanPinkImg from '~/assets/section8/woman-pink.jpg'
import womanShortHairImg from '~/assets/section8/woman-short-hair.jpg'
import womanThinkingImg from '~/assets/section8/woman-thinking.jpg'
import womanYellowImg from '~/assets/section8/woman-yellow.jpg'
import { Button } from './Button'
import { SectionText } from './SectionText'

export function Section8() {
  return (
    <section className="flex flex-col items-center justify-around gap-8 border-b border-yellow-400 bg-yellow-400 p-4 lg:flex-row lg:px-20 lg:py-64">
      <div className="relative h-[167px] w-full lg:h-[100px] lg:w-[1px]">
        <Image src={bIcon} alt="B icon" className="absolute left-0" />
        <Image
          src={chatIcon}
          alt="Chat icon"
          height={25.1}
          width={25.1}
          className="absolute top-2 right-[18vw]"
        />
        <Image
          src={cubeIcon}
          alt="Cube icon"
          className="absolute top-2 left-[25vw]"
        />
        <Image
          src={doorIcon}
          alt="Door icon"
          className="absolute bottom-0 left-[25vw]"
        />
        <Image
          src={sunIcon}
          alt="Sun icon"
          className="absolute top-18 left-[6vw]"
        />
        <Image
          src={webIcon}
          alt="Web icon"
          height={43.84}
          width={43.84}
          className="absolute top-17 right-2"
        />

        <Image
          src={womanPinkImg}
          alt="Profile picture"
          height={49}
          width={49}
          className="absolute bottom-0 left-0 h-[49px] max-h-[96px] min-h-[49px] w-[49px] max-w-[96px] min-w-[49px] rounded-full object-cover lg:-top-10 lg:-left-10 lg:h-[96px] lg:w-[96px]"
        />
        <Image
          src={manBlueWhiteImg}
          alt="Profile picture"
          height={25.05}
          width={25.05}
          className="absolute right-4 bottom-[0.25rem] h-[25.05px] max-h-[32px] min-h-[25.05px] w-[25.05px] max-w-[32px] min-w-[25.05px] rounded-full object-cover lg:right-30 lg:-bottom-70 lg:h-[32px] lg:w-[32px]"
        />
        <Image
          src={womanBlackImg}
          alt="Profile picture"
          height={50.1}
          width={50.1}
          className="absolute top-1 right-0 h-[50.1px] max-h-[64px] min-h-[50.1px] w-[50.1px] max-w-[64px] min-w-[50.1px] rounded-full object-cover lg:-top-70 lg:-right-10 lg:h-[64px] lg:w-[64px]"
        />
        <Image
          src={manRedImg}
          alt="Profile picture"
          height={37.58}
          width={37.58}
          className="absolute top-7 left-[9vw] h-[37.58px] max-h-[48px] min-h-[37.58px] w-[37.58px] max-w-[48px] min-w-[37.58px] rounded-full object-cover lg:-top-40 lg:left-10 lg:h-[48px] lg:w-[48px]"
        />
        <Image
          src={manGreenImg}
          alt="Profile picture"
          height={37.58}
          width={37.58}
          className="absolute top-20 left-[20vw] h-[37.58px] max-h-[48px] min-h-[37.58px] w-[37.58px] max-w-[48px] min-w-[37.58px] rounded-full object-cover lg:top-70 lg:left-0 lg:h-[48px] lg:w-[48px]"
        />
        <Image
          src={womanYellowImg}
          alt="Profile picture"
          height={50.1}
          width={50.1}
          className="absolute top-3 left-[51vw] h-[50.1px] max-h-[64px] min-h-[50.1px] w-[50.1px] max-w-[64px] min-w-[50.1px] rounded-full object-cover lg:-top-30 lg:left-[14vw] lg:h-[64px] lg:w-[64px]"
        />
        <Image
          src={manShadowImg}
          alt="Profile picture"
          height={73.93}
          width={73.93}
          className="absolute bottom-2 left-[40vw] h-[73.93px] max-h-[128px] min-h-[73.93] w-[73.93px] max-w-[128px] min-w-[73.93px] rounded-full object-cover lg:top-20 lg:left-[11vw] lg:h-[128px] lg:w-[128px]"
        />
        <Image
          src={manPaintImg}
          alt="Profile picture"
          height={37.58}
          width={37.58}
          className="absolute top-20 right-[18vw] h-[37.58px] max-h-[48px] min-h-[37.58px] w-[37.58px] max-w-[48px] min-w-[37.58px] rounded-full object-cover lg:top-0 lg:-right-[25vw] lg:h-[48px] lg:w-[48px]"
        />
      </div>

      <div className="z-30 flex flex-col items-center">
        <SectionText
          alignment="center"
          headline2="Join a world of learning"
          text="Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus elit et fringilla habitant ut facilisi."
        />

        <Button text="Sign Up Now" size="lg" className="w-min" />
      </div>

      <div className="relative h-[195px] w-full lg:h-[100px] lg:w-[1px]">
        <Image
          src={cartIcon}
          alt="Cart icon"
          height={25.8}
          width={25.8}
          className="absolute bottom-10 left-[30vw]"
        />
        <Image
          src={briefcaseIcon}
          alt="Briefcase icon"
          height={38.7}
          width={38.7}
          className="absolute right-[33vw] bottom-5"
        />
        <Image
          src={bellIcon}
          alt="Chat icon"
          height={38.7}
          width={38.7}
          className="absolute top-15 right-[25vw]"
        />
        <Image
          src={weatherIcon}
          alt="Chat icon"
          height={38.7}
          width={38.7}
          className="absolute top-2 right-[44vw]"
        />
        <Image
          src={clickIcon}
          alt="Chat icon"
          height={47.9}
          width={46.5}
          className="absolute top-10 left-[23vw]"
        />

        <Image
          src={manBlueImg}
          alt="Profile picture"
          height={45.1}
          width={45.1}
          className="absolute top-0 left-0 h-[45.1px] max-h-[56px] min-h-[45.1px] w-[45.1px] max-w-[56px] min-w-[45.1px] rounded-full object-cover lg:-top-60 lg:-left-[19vw] lg:h-[56px] lg:w-[56px]"
        />
        <Image
          src={manLightBlueImg}
          alt="Profile picture"
          height={38.69}
          width={38.69}
          className="absolute bottom-3 left-[7vw] h-[38.69px] max-h-[48px] min-h-[38.69px] w-[38.69px] max-w-[48px] min-w-[38.69px] rounded-full object-cover lg:top-60 lg:-left-[20vw] lg:h-[48px] lg:w-[48px]"
        />
        <Image
          src={womanFlowerImg}
          alt="Profile picture"
          height={51.59}
          width={51.59}
          className="absolute top-20 left-[40vw] h-[51.59px] max-h-[48px] min-h-[51.59px] w-[51.59px] max-w-[48px] min-w-[51.59px] rounded-full object-cover lg:-top-10 lg:-left-20 lg:h-[48px] lg:w-[48px]"
        />
        <Image
          src={womanShortHairImg}
          alt="Profile picture"
          height={58.77}
          width={58.77}
          className="absolute top-0 right-[8vw] h-[58.77px] max-h-[96px] min-h-[58.77px] w-[58.77px] max-w-[96px] min-w-[58.77px] rounded-full object-cover lg:-top-70 lg:-right-18 lg:h-[96px] lg:w-[96px]"
        />
        <Image
          src={womanHatImg}
          alt="Profile picture"
          height={73.46}
          width={73.46}
          className="absolute top-20 right-0 h-[73.46px] max-h-[128px] min-h-[73.46px] w-[73.46px] max-w-[128px] min-w-[73.46px] rounded-full object-cover lg:top-30 lg:-right-35 lg:h-[128px] lg:w-[128px]"
        />
        <Image
          src={womanThinkingImg}
          alt="Profile picture"
          height={25.79}
          width={25.79}
          className="absolute right-[18vw] bottom-2 h-[25.79px] max-h-[32px] min-h-[25.79px] w-[25.79px] max-w-[32px] min-w-[25.79px] rounded-full object-cover lg:right-8 lg:-bottom-70 lg:h-[32px] lg:w-[32px]"
        />
      </div>
    </section>
  )
}
