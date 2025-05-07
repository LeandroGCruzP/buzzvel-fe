import profile1Img from '~/assets/profile-1.jpg'
import profile2Img from '~/assets/profile-2.jpg'
import manLightBlueImg from '~/assets/section8/man-light-blue.jpg'
import womanPinkImg from '~/assets/section8/woman-pink.jpg'
import { ContentBoxUser } from './ContentBoxUser'
import { SectionText } from './SectionText'
import { ArrowIcon } from './icons/arrow-icon'

export function Section6() {
  return (
    <section className="px-4 py-12 lg:gap-20 lg:p-20">
      <div className="flex justify-between">
        <SectionText alignment="left" headline2="What everyone says" />

        <div className="hidden gap-6 lg:flex">
          <div className="hover:bg-blue-gray-100 flex h-[48px] w-[48px] rotate-180 cursor-pointer items-center justify-center rounded-full border-2 border-orange-600 transition duration-200">
            <ArrowIcon height={24} width={24} className="fill-orange-600" />
          </div>
          <div className="hover:bg-blue-gray-100 flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border-2 border-orange-600 transition duration-200">
            <ArrowIcon height={24} width={24} className="fill-orange-600" />
          </div>
        </div>
      </div>

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
        <ContentBoxUser
          description="Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a."
          user={{
            img: womanPinkImg,
            name: 'Hellena John',
            role: 'Psychology Student',
          }}
        />
        <ContentBoxUser
          description="Sapien, sollicitudin et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim."
          user={{
            img: manLightBlueImg,
            name: 'David Oshodi',
            role: 'Manager',
          }}
        />
      </div>
    </section>
  )
}
