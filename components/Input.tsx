import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input({ className, name, ...props }: InputProps) {
  const baseClasses =
    'border-2 border-gray-300 rounded-[10px] p-2 bg-white outline-none text-blue-gray-900'

  return (
    <div className="grid w-full gap-4">
      <label htmlFor={name} className="text-lg capitalize">
        {name}
      </label>

      <input id={name} className={clsx(baseClasses, className)} {...props} />
    </div>
  )
}
