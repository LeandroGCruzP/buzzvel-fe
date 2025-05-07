import { ReactNode } from 'react'

interface ColumnsProps {
  children: ReactNode
}

export function Columns({ children }: ColumnsProps) {
  return (
    <div className="border-blue-gray-700 flex flex-col gap-8 border-b py-12 lg:flex-row lg:items-start lg:gap-12">
      {children}
    </div>
  )
}
