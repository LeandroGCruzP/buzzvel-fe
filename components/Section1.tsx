import Image from 'next/image'
import company1Img from '~/assets/company-1.svg'
import company2Img from '~/assets/company-2.svg'
import company3Img from '~/assets/company-3.svg'
import company4Img from '~/assets/company-4.svg'
import company5Img from '~/assets/company-5.svg'
import iconsImg from '~/assets/icons.svg'
import studentImg from '~/assets/student.png'
import teacherImg from '~/assets/teacher.png'
import { ChatBubble } from '~/components/ChatBubble'
import { PlayIcon } from '~/components/icons/play-icon'
import { SectionText } from '~/components/SectionText'

export function Section1() {
  return (
    <section className="flex flex-col gap-12 px-4 py-12 lg:flex-row lg:gap-20 lg:p-20">
      <div className="flex flex-col gap-8 lg:justify-between">
        <SectionText
          alignment="left"
          headline1="Teach students worldwide"
          highlightWord="Teach"
          text="Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies."
          buttons={{
            button2: { text: 'Sign Up Now' },
            button3: {
              iconLeft: <PlayIcon width={24} height={24} />,
              text: 'View Demo',
              variant: 'transparent',
            },
          }}
        />

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-12">
          <p className="leading-[140%]">Trusted by leading companies</p>

          <div className="flex gap-6">
            <Image src={company3Img} alt="Logo company 3" height={32} />
            <Image src={company2Img} alt="Logo company 2" height={32} />
            <Image src={company4Img} alt="Logo company 4" height={32} />
            <Image src={company5Img} alt="Logo company 5" height={32} />
            <Image src={company1Img} alt="Logo company 1" height={32} />
          </div>
        </div>
      </div>

      <div className="relative flex max-h-[544.52px] justify-between md:justify-around">
        <div className="relative left-0 z-10 mt-38 md:mt-40">
          <div className="absolute -top-14 left-[50%] flex flex-col gap-2">
            <ChatBubble text="Turpis platea nunc mattis" />
            <ChatBubble text="Vitae viverra ut non" />
          </div>

          <Image
            src={teacherImg}
            alt="Logo company 1"
            height={199.8829345703125}
            className="min-h-[199.88px) h-auto max-h-[345.53px] w-[30vw] max-w-[306.6px] min-w-[177.21px]"
          />
        </div>

        <div className="relative mt-5">
          <div className="absolute -top-5 -left-25 md:-left-33">
            <div className="flex flex-col items-end gap-2">
              <ChatBubble text="Nunc, at libero neque" side="right" />
              <ChatBubble text="Viverra sed" side="right" />
            </div>
          </div>

          <Image
            src={studentImg}
            alt="Logo company 1"
            height={201.12367248535156}
            className="min-h-[201.12px) h-auto max-h-[347.68px] w-[30vw] max-w-[270.34px] min-w-[156.25px]"
          />
        </div>

        <div className="absolute bottom-5 left-7/10 -z-10 -translate-x-1/2 md:left-3/5">
          <Image
            src={iconsImg}
            alt="Logo company 1"
            height={74.05}
            width={91.9}
            className="min-h-[74.05px) h-auto max-h-[128px] w-[15vw] max-w-[159px] min-w-[91.9px]"
          />
        </div>
      </div>
    </section>
  )
}
