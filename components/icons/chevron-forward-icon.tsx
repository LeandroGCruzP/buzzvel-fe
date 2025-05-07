import { SVGProps } from 'react'

export function ChevronForwardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M15.659 8.909a2.25 2.25 0 0 1 3.182 0l13.5 13.5a2.25 2.25 0 0 1 0 3.182l-13.5 13.5a2.25 2.25 0 1 1-3.182-3.182L27.568 24 15.659 12.091a2.25 2.25 0 0 1 0-3.182Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
