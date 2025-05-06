import { Section1 } from '~/components/Section1'
import { SectionText } from '~/components/SectionText'

export default function Home() {
  return (
    <main>
      <Section1 />

      <section className="flex flex-col gap-12 px-4 py-12">
        <SectionText
          alignment="left"
          headline2="An all-in-one app that makes it easier"
          highlightWord="all-in-one"
          text="Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse."
        />
      </section>
    </main>
  )
}
