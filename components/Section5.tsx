'use client'

import { motion } from 'framer-motion'
import diamondImg from '~/assets/diamond.svg'
import heartImg from '~/assets/heart.svg'
import mortarboardImg from '~/assets/mortarboard.svg'
import { ContentBox } from './ContentBox'

export function Section5() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-blue-gray-900 flex flex-col gap-12 px-4 py-12 text-yellow-400 lg:flex-row lg:justify-around lg:p-20"
    >
      <ContentBox
        icon={heartImg}
        alt="Heart icon"
        value="195"
        description="user countries"
      />
      <ContentBox
        icon={diamondImg}
        alt="Diamond icon"
        value="1M"
        description="valued teachers"
      />
      <ContentBox
        icon={mortarboardImg}
        alt="Mortarboard icon"
        value="17M"
        description="happy students"
      />
    </motion.section>
  )
}
