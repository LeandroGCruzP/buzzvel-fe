import Image from 'next/image'
import logoColored from '~/assets/logo-colored.svg'
import { MenuIcon } from '~/components/icons/menu-icon'

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="Left gap-12">
        <Image src={logoColored} alt="Logo colored" width={103} height={35} />
      </div>

      <div className="Buttons-group gap-4">
        <div className="relative -right-1 rounded-full p-1 transition duration-200 hover:cursor-pointer hover:bg-gray-100">
          <MenuIcon height={24} width={24} />
        </div>
      </div>
    </header>
  )
}
