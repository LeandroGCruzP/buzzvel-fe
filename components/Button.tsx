import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariants = 'filled' | 'transparent'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  text: string
  variant?: ButtonVariants
}

export function Button({
  className,
  icon,
  text,
  variant = 'filled',
  ...props
}: ButtonProps) {
  const baseClasses =
    'flex cursor-pointer rounded-lg p-3 leading-6 font-medium tracking-[0.5px] capitalize transition duration-200'

  const variants: Record<ButtonVariants, string> = {
    filled:
      'bg-orange-600 border-2 border-orange-600 text-white hover:brightness-110',
    transparent: 'bg-transparent text-blue-600 hover:bg-blue-gray-100',
  }

  return (
    <button
      {...props}
      className={clsx(baseClasses, variants[variant], className)}
    >
      {icon}
      <span className="px-4">{text}</span>
    </button>
  )
}
