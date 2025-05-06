import Image from 'next/image'
import blobImg from '~/assets/blob.svg'
import desktopImg from '~/assets/desktop.png'
import starsImg from '~/assets/stars.svg'
import { Button } from '~/components/Button'
import { ContentGroup } from '~/components/ContentGroup'
import { ArrowIcon } from '~/components/icons/arrow-icon'
import { LineItem } from '~/components/LineItem'
import { SectionText } from '~/components/SectionText'

export function Section2() {
  return (
    <section className="flex flex-col gap-8 px-4 py-12">
      <SectionText
        alignment="left"
        headline2="An all-in-one app that makes it easier"
        highlightWord="all-in-one"
        text="Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse."
      />

      <div className="flex flex-col gap-4">
        <LineItem text="Est et in pharetra magna adipiscing ornare aliquam." />
        <LineItem text="Tellus arcu sed consequat ac velit ut eu blandit." />
        <LineItem text="Ullamcorper ornare in et egestas dolor orci." />
      </div>

      <Button
        variant="transparent"
        text="Find more about the app"
        iconRight={
          <ArrowIcon width={24} height={24} className="fill-blue-600" />
        }
        className="w-min pl-0 text-blue-600"
      />

      <div className="relative flex flex-col items-center">
        <Image
          src={blobImg}
          alt="blob image background"
          height={336.68}
          className="absolute top-3 -left-9 -z-10"
        />

        <Image
          src={starsImg}
          alt="stars image background"
          height={520.83}
          className="absolute -top-38 -z-10"
        />

        <Image
          src={desktopImg}
          alt="desktop image"
          height={199.8829345703125}
          className="min-h-[275px) h-auto max-h-[391px] w-full max-w-[600px] min-w-[347.89px]"
        />

        <div className="relative -top-20 left-[2.5625rem] flex gap-4">
          <ContentGroup
            title="The map of mathematics"
            description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          />

          <ContentGroup
            title="The map of mathematics"
            description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          />
        </div>
      </div>
    </section>
  )
}
