import diamondImg from '~/assets/diamond.svg'
import heartImg from '~/assets/heart.svg'
import mortarboardImg from '~/assets/mortarboard.svg'
import { ContentBox } from './ContentBox'

export function Section5() {
  return (
    <section className="bg-blue-gray-900 flex flex-col gap-12 px-4 py-12 text-yellow-400">
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
    </section>
  )
}
