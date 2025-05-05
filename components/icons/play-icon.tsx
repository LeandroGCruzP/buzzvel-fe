import { SVGProps } from 'react'

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="#2563EB"
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 12 20Zm4.126-6.254-4.055 2.898c-.905.646-2.13.389-2.737-.576A2.201 2.201 0 0 1 9 14.898V9.102C9 7.942 9.883 7 10.972 7c.391 0 .774.124 1.099.356l4.055 2.898c.905.647 1.146 1.952.54 2.917-.14.225-.324.42-.54.575Zm-5.154-4.644v5.796L15.027 12l-4.055-2.898Z"
      />
    </svg>
  )
}
