import Image, { StaticImageData } from 'next/image'

interface ContentBoxUserProps {
  description: string
  user: {
    img: StaticImageData
    name: string
    role: string
  }
}

export function ContentBoxUser({ description, user }: ContentBoxUserProps) {
  return (
    <div className="shadow-dark-l w-[309px] max-w-[412px] min-w-[309px] rounded-[20px]">
      <div className="flex h-full flex-col justify-between gap-2 p-4">
        <p className="text-lg leading-[160%]">{description}</p>

        <div className="flex gap-4 pt-4">
          <Image
            src={user.img}
            alt={user.name}
            height={64}
            width={64}
            className="max-h-16 max-w-16 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <p className="text-lg leading-[160%]">{user.name}</p>
            <p className="text-sm leading-[140%] text-gray-500">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
