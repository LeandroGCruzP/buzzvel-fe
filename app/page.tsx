import Image from 'next/image'
import company1Img from '~/assets/company-1.svg'
import company2Img from '~/assets/company-2.svg'
import company3Img from '~/assets/company-3.svg'
import company4Img from '~/assets/company-4.svg'
import company5Img from '~/assets/company-5.svg'
import { PlayIcon } from '~/components/icons/play-icon'
import { SectionText } from '~/components/SectionText'

export default function Home() {
  return (
    <main>
      <section className="flex flex-col gap-12 px-4 py-12">
        <div className="flex flex-col gap-8">
          <SectionText
            alignment="left"
            headline1="Teach students worldwide"
            highlightWord="Teach"
            text="Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies."
            buttons={{
              button2: { text: 'Sign Up Now' },
              button3: {
                icon: <PlayIcon width={24} height={24} />,
                text: 'View Demo',
                variant: 'transparent',
              },
            }}
          />

          <div className="font-body-m flex flex-col gap-4">
            <p>Trusted by leading companies</p>

            <div className="flex gap-6">
              <Image src={company1Img} alt="Logo company 1" height={32} />
              <Image src={company2Img} alt="Logo company 2" height={32} />
              <Image src={company3Img} alt="Logo company 3" height={32} />
              <Image src={company4Img} alt="Logo company 4" height={32} />
              <Image src={company5Img} alt="Logo company 5" height={32} />
            </div>
          </div>
        </div>

        <div>Second</div>
      </section>
    </main>
  )
}
