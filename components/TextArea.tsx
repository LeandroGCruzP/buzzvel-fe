import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string
}

export function TextArea({ className, name, ...props }: TextAreaProps) {
  const baseClasses =
    'border-2 border-gray-300 rounded-[10px] p-2 bg-white outline-none text-blue-gray-900'

  return (
    <div className="grid w-full gap-4">
      <label htmlFor={name} className="text-lg capitalize">
        {name}
      </label>

      <textarea
        id={name}
        rows={3}
        className={clsx(baseClasses, className)}
        {...props}
      />
    </div>
  )
}
