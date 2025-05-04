import Image from 'next/image'
import logoColored from '~/assets/logo-colored.svg'
import { MenuIcon } from '~/components/icons/menu-icon'

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="left">
        <Image src={logoColored} alt="Logo colored" width={103} height={35} />
      </div>

      <div className="buttons-group">
        <MenuIcon height={24} width={24} />
      </div>
    </header>
  )
}
