import { SVGProps } from 'react'

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="#0F172A"
        d="M10.486 16.73a.996.996 0 0 1-.707-.292l-4.242-4.243A1 1 0 1 1 6.95 10.78l3.535 3.535 6.365-6.363a1 1 0 0 1 1.415 1.414l-7.072 7.072a.997.997 0 0 1-.707.292Z"
      />
    </svg>
  )
}
