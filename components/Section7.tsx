import Image from 'next/image'
import blobImg from '~/assets/blob.svg'
import picture1Img from '~/assets/picture-1.jpg'
import picture2Img from '~/assets/picture-2.jpg'
import picture3Img from '~/assets/picture-3.jpg'
import starsImg from '~/assets/stars-2.svg'
import { Button } from './Button'
import { ContentGroup } from './ContentGroup'
import { ArrowIcon } from './icons/arrow-icon'
import { SectionText } from './SectionText'

export function Section7() {
  return (
    <section className="flex flex-col gap-16 px-4 py-12">
      <div className="flex flex-col">
        <SectionText
          alignment="left"
          headline2="All the cool features"
          highlightWord="features"
          text="Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci."
        />

        <Button
          variant="transparent"
          text="View all the features"
          iconRight={
            <ArrowIcon width={24} height={24} className="fill-blue-600" />
          }
          className="w-min pl-0 text-blue-600"
        />
      </div>

      <div className="relative flex flex-col items-start">
        <Image
          src={blobImg}
          alt="blob image background"
          height={469}
          className="absolute -top-10 -z-20 h-[465px] max-h-[522px] w-full -rotate-[15deg]"
        />

        <Image
          src={starsImg}
          alt="stars image background"
          height={554}
          className="absolute -top-20 -right-4 -z-10"
        />

        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-4">
            <ContentGroup
              badge={{
                color: 'blue',
                text: 'Popular',
              }}
              title="Design for how people think"
              description="Aliquam ut euismod condimentum elementum ultricies volutpat sit non. "
              className="max-w-[225px]"
            />

            <Image
              src={picture1Img}
              alt="stars image background"
              width={186}
              height={158}
              className="shadow-dark-xl max-h-[158px] min-h-[158px] max-w-[186px] min-w-[186px] rounded-[10px] border-[5px] border-white"
            />
          </div>

          <div className="flex gap-4">
            <Image
              src={picture2Img}
              alt="stars image background"
              width={273}
              height={179}
              className="shadow-dark-xl max-h-[179px] min-h-[179px] max-w-[273px] min-w-[273px] rounded-[10px] border-[5px] border-white"
            />
            <Image
              src={picture3Img}
              alt="stars image background"
              width={232}
              height={179}
              className="shadow-dark-xl max-h-[179px] min-h-[179px] max-w-[232px] min-w-[232px] rounded-[10px] border-[5px] border-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
