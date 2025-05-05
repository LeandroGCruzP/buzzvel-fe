import Image from 'next/image'
import logoImg from '~/assets/logo-colored-black.svg'
import { MenuIcon } from '~/components/icons/menu-icon'

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="Left gap-12">
        <Image src={logoImg} alt="Logo" width={103} height={35} />
      </div>

      <div className="Buttons-group gap-4">
        <div className="hover:hover:bg-blue-gray-100 relative -right-1 cursor-pointer rounded-full p-1 transition duration-200">
          <MenuIcon height={24} width={24} />
        </div>
      </div>
    </header>
  )
}
