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
    <section className="flex flex-col items-center gap-8 border-b border-yellow-400 bg-yellow-400 p-4">
      <div className="relative h-[167px] w-full">
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
          className="absolute bottom-0 left-0 max-h-[49px] min-h-[49px] max-w-[49px] min-w-[49px] rounded-full object-cover"
        />
        <Image
          src={manBlueWhiteImg}
          alt="Profile picture"
          height={25.05}
          width={25.05}
          className="absolute right-4 bottom-[0.25rem] max-h-[25.05px] min-h-[25.05px] max-w-[25.05px] min-w-[25.05px] rounded-full object-cover"
        />
        <Image
          src={womanBlackImg}
          alt="Profile picture"
          height={50.1}
          width={50.1}
          className="absolute top-1 right-0 max-h-[50.1px] min-h-[50.1px] max-w-[50.1px] min-w-[50.1px] rounded-full object-cover"
        />
        <Image
          src={manRedImg}
          alt="Profile picture"
          height={37.58}
          width={37.58}
          className="absolute top-7 left-[9vw] max-h-[37.58px] min-h-[37.58px] max-w-[37.58px] min-w-[37.58px] rounded-full object-cover"
        />
        <Image
          src={manGreenImg}
          alt="Profile picture"
          height={37.58}
          width={37.58}
          className="absolute top-20 left-[20vw] max-h-[37.58px] min-h-[37.58px] max-w-[37.58px] min-w-[37.58px] rounded-full object-cover"
        />
        <Image
          src={womanYellowImg}
          alt="Profile picture"
          height={50.1}
          width={50.1}
          className="absolute top-3 left-[51vw] max-h-[50.1px] min-h-[50.1px] max-w-[50.1px] min-w-[50.1px] rounded-full object-cover"
        />
        <Image
          src={manShadowImg}
          alt="Profile picture"
          height={73.93}
          width={73.93}
          className="absolute bottom-2 left-[40vw] max-h-[73.93px] min-h-[73.93px] max-w-[73.93px] min-w-[73.93px] rounded-full object-cover"
        />
        <Image
          src={manPaintImg}
          alt="Profile picture"
          height={37.58}
          width={37.58}
          className="absolute top-20 right-[18vw] max-h-[37.58px] min-h-[37.58px] max-w-[37.58px] min-w-[37.58px] rounded-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center">
        <SectionText
          alignment="center"
          headline2="Join a world of learning"
          text="Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus elit et fringilla habitant ut facilisi."
        />

        <Button text="Sign Up Now" size="lg" className="w-min" />
      </div>

      <div className="relative h-[195px] w-full">
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
          className="absolute top-0 left-0 max-h-[45.1px] min-h-[45.1px] max-w-[45.1px] min-w-[45.1px] rounded-full object-cover"
        />
        <Image
          src={womanYellowImg}
          alt="Profile picture"
          height={38.69}
          width={38.69}
          className="absolute bottom-3 left-[7vw] max-h-[38.69px] min-h-[38.69px] max-w-[38.69px] min-w-[38.69px] rounded-full object-cover"
        />
        <Image
          src={womanFlowerImg}
          alt="Profile picture"
          height={51.59}
          width={51.59}
          className="absolute top-20 left-[40vw] max-h-[51.59px] min-h-[51.59px] max-w-[51.59px] min-w-[51.59px] rounded-full object-cover"
        />
        <Image
          src={womanShortHairImg}
          alt="Profile picture"
          height={58.77}
          width={58.77}
          className="absolute top-0 right-[8vw] max-h-[58.77px] min-h-[58.77px] max-w-[58.77px] min-w-[58.77px] rounded-full object-cover"
        />
        <Image
          src={womanHatImg}
          alt="Profile picture"
          height={73.46}
          width={73.46}
          className="absolute top-20 right-0 max-h-[73.46px] min-h-[73.46px] max-w-[73.46px] min-w-[73.46px] rounded-full object-cover"
        />
        <Image
          src={womanThinkingImg}
          alt="Profile picture"
          height={25.79}
          width={25.79}
          className="absolute right-[18vw] bottom-2 max-h-[25.79px] min-h-[25.79px] max-w-[25.79px] min-w-[25.79px] rounded-full object-cover"
        />
      </div>
    </section>
  )
}
