import { SVGProps } from 'react'

export function PlaneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <g
        stroke="#FACC15"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        clipPath="url(#a)"
      >
        <path d="m14.639 10.258 4.83-1.294a2 2 0 0 1 1.035 3.863L6.014 16.71l-4.45-5.02 2.898-.776 2.45 1.414 2.897-.776-3.743-6.244 2.897-.777 5.676 5.727ZM3 21h18" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
