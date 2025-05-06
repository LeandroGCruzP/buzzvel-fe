import { Section1 } from '~/components/Section1'

export default function Home() {
  return (
    <main>
      <Section1 />

      <section className="flex flex-col gap-12 px-4 py-12">Section 2</section>
    </main>
  )
}
