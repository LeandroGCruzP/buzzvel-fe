import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariants = 'filled' | 'filled-dark' | 'transparent' | 'outline'
type ButtonSizes = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: ReactNode
  iconRight?: ReactNode
  size?: ButtonSizes
  text: string
  variant?: ButtonVariants
}

export function Button({
  className,
  iconLeft,
  iconRight,
  size = 'md',
  text,
  variant = 'filled',
  ...props
}: ButtonProps) {
  const baseClasses =
    'flex cursor-pointer rounded-lg capitalize transition duration-200 gap-4 justify-center font-medium leading-6 tracking-[0.5px]'

  const variants: Record<ButtonVariants, string> = {
    filled:
      'bg-orange-600 border-2 border-orange-600 text-white hover:brightness-110',
    'filled-dark':
      'bg-blue-gray-900 border-2 border-blue-gray-900 text-white hover:brightness-110',
    outline:
      'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-gray-100',
    transparent: 'bg-transparent text-blue-600 hover:bg-blue-gray-100',
  }

  const sizes: Record<ButtonSizes, string> = {
    lg: 'text-xl p-4',
    md: 'py-3 px-7',
    sm: 'text-sm py-2 px-5',
  }

  return (
    <button
      {...props}
      className={clsx(baseClasses, variants[variant], sizes[size], className)}
    >
      {iconLeft}
      <span className="text-nowrap">{text}</span>
      {iconRight}
    </button>
  )
}
