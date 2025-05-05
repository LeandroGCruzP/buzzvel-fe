import { SVGProps } from 'react'

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={25}
      fill="none"
      {...props}
    >
      <path
        fill="#E2E8F0"
        d="m15.586 11.45-3.95-3.95a1 1 0 0 1 1.414-1.414l5.657 5.657a.997.997 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l3.95-3.95H6a1 1 0 0 1 0-2h9.586Z"
      />
    </svg>
  )
}
