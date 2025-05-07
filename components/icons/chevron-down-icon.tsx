import { SVGProps } from 'react'

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m12.071 13.314 4.95-4.95a1 1 0 1 1 1.414 1.414l-5.657 5.657a1 1 0 0 1-1.414 0L5.707 9.778a1 1 0 1 1 1.414-1.414l4.95 4.95Z"
      />
    </svg>
  )
}
