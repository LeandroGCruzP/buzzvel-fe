import Link from 'next/link'
import { ReactNode } from 'react'

interface BottomLinkProps {
  children: ReactNode
}

export function FooterLink({ children }: BottomLinkProps) {
  return (
    <Link
      href="#"
      className="flex cursor-pointer items-center gap-2 py-3 transition duration-200 hover:brightness-75"
    >
      {children}
    </Link>
  )
}
