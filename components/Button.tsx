import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type Variants = 'filled' | 'transparent'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  text: string
  variant?: Variants
}

export function Button({
  children,
  className,
  text,
  variant = 'filled',
  ...props
}: ButtonProps) {
  const baseClasses =
    'flex cursor-pointer rounded-lg p-3 leading-6 font-medium tracking-[0.5px] capitalize transition duration-200'

  const variants: Record<Variants, string> = {
    filled:
      'bg-orange-600 border-2 border-orange-600 text-white hover:brightness-110',
    transparent: 'bg-transparent text-blue-600 hover:bg-blue-gray-100',
  }

  return (
    <button
      {...props}
      className={clsx(baseClasses, variants[variant], className)}
    >
      {children}
      <span className="px-4">{text}</span>
    </button>
  )
}
