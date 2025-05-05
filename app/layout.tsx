import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import './globals.css'

export const metadata: Metadata = {
  description: 'Teach students worldwide',
  title: 'Teach App',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
