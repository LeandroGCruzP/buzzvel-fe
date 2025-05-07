'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import blobImg from '~/assets/blob.svg'
import desktopImg from '~/assets/desktop.svg'
import starsImg from '~/assets/stars.svg'
import { Button } from '~/components/Button'
import { ContentGroup } from '~/components/ContentGroup'
import { ArrowIcon } from '~/components/icons/arrow-icon'
import { LineItem } from '~/components/LineItem'
import { SectionText } from '~/components/SectionText'

export function Section2() {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    checkScreenSize()

    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const text = isLargeScreen
    ? undefined
    : 'Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.'

  return (
    <section className="flex flex-col gap-8 px-4 py-12 lg:flex-row lg:gap-20 lg:p-20">
      <div className="flex flex-col gap-8">
        <SectionText
          alignment="left"
          headline2="An all-in-one app that makes it easier"
          highlightWord="all-in-one"
          text={text}
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
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="relative -mb-24 flex flex-col items-center"
      >
        <Image
          src={blobImg}
          alt="blob image background"
          height={336.68}
          className="absolute top-12 right-48 -z-10"
        />

        <Image
          src={starsImg}
          alt="stars image background"
          height={520.83}
          className="absolute -top-38 -z-10"
        />

        <div className="flex w-full justify-end">
          <Image
            src={desktopImg}
            alt="desktop image"
            height={350}
            className="min-h-[350px) right-0 max-h-[391px]"
          />
        </div>

        <div className="relative -top-24 flex gap-4">
          <ContentGroup
            badge={{
              color: 'purple',
              text: 'Featured',
            }}
            title="The map of mathematics"
            description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          />
          <ContentGroup
            badge={{
              color: 'blue',
              text: 'Popular',
            }}
            title="The map of mathematics"
            description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          />
          <div className="hidden lg:block">
            <ContentGroup
              badge={{
                color: 'green',
                text: 'New',
              }}
              title="The map of mathematics"
              description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
