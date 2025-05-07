import profile1Img from '~/assets/profile-1.jpg'
import profile2Img from '~/assets/profile-2.jpg'
import { ContentBoxUser } from './ContentBoxUser'
import { SectionText } from './SectionText'

export function Section6() {
  return (
    <section className="px-4 py-12">
      <SectionText alignment="left" headline2="What everyone says" />

      <div className="relative flex gap-6 overflow-auto py-1">
        <ContentBoxUser
          description="Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi."
          user={{
            img: profile1Img,
            name: 'Hellen Jummy',
            role: 'Financial Counselor',
          }}
        />
        <ContentBoxUser
          description="Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor."
          user={{
            img: profile2Img,
            name: 'Ralph Edwards',
            role: 'Math Teacher',
          }}
        />
      </div>
    </section>
  )
}
