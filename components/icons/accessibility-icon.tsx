import { SVGProps } from 'react'

export function AccessibilityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={25}
      fill="none"
      {...props}
    >
      <rect
        width={22}
        height={22}
        x={1}
        y={1.793}
        stroke="#E2E8F0"
        strokeWidth={2}
        rx={11}
      />
      <path
        fill="#fff"
        d="m11.91 15.81-.324 3.086a1 1 0 0 1-1.99-.21l.724-6.883H7.01a1.002 1.002 0 0 1 0-2.003h10a1.002 1.002 0 1 1 0 2.003H13.7l.723 6.886a1.001 1.001 0 1 1-1.99.209l-.323-3.088h-.2Zm.1-6.01c-1.105 0-2-.898-2-2.004 0-1.106.895-2.003 2-2.003a2.001 2.001 0 0 1 1.415 3.419 2.002 2.002 0 0 1-1.415.587Z"
      />
    </svg>
  )
}
