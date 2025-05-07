import profile1Img from '~/assets/profile-1.jpg'
import profile2Img from '~/assets/profile-2.jpg'
import { ContentBoxUser } from './ContentBoxUser'
import { SectionText } from './SectionText'

export function Section6() {
  return (
    <section className="px-4 py-12">
      <SectionText alignment="left" headline2="What everyone says" />

      <div className="relative flex gap-6 overflow-auto">
        <ContentBoxUser
          description="Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi."
          user={{
            img: profile1Img,
            name: 'John Doe',
            role: 'CEO at Company',
          }}
        />
        <ContentBoxUser
          description="Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi."
          user={{
            img: profile2Img,
            name: 'John Doe',
            role: 'CEO at Company',
          }}
        />
      </div>
    </section>
  )
}
