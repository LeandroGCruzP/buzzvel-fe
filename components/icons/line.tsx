import { SVGProps } from 'react'

export function Line(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 124 18"
      preserveAspectRatio="none"
      fill="none"
      {...props}
    >
      <path
        stroke="#FB923C"
        strokeLinejoin="round"
        strokeWidth={10}
        d="M1 7.517c14.173-1.613 65.764-4.75 108 0-21.924 0-50.49.48-68.882 5.483"
      />
    </svg>
  )
}
