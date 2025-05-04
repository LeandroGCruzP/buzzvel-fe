import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'

export default function Home() {
  return (
    <div className="flex bg-red-50 text-white">
      <Header />

      <main>
        <section>Section 1</section>
        <section>Section 2</section>
        <section>Section 3</section>
      </main>

      <Footer />
    </div>
  )
}
