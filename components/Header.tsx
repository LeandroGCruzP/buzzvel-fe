import Image from 'next/image'
import logoImg from '~/assets/logo-black.svg'
import { MenuIcon } from '~/components/icons/menu-icon'
import { Button } from './Button'
import { HeaderLink } from './HeaderLink'

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 lg:px-20 lg:py-6">
      <div className="flex items-center gap-12">
        <Image src={logoImg} alt="Logo" width={103} height={35} />

        <div className="hidden items-center gap-12 lg:flex">
          <HeaderLink text="Products" />
          <HeaderLink text="Solutions" />
          <HeaderLink text="Pricing" />
          <HeaderLink text="Resources" hasIcon />
        </div>
      </div>

      <div className="gap-4 lg:hidden">
        <div className="hover:hover:bg-blue-gray-100 relative -right-1 cursor-pointer rounded-full p-1 transition duration-200">
          <MenuIcon height={24} width={24} />
        </div>
      </div>

      <div className="hidden gap-4 lg:flex">
        <HeaderLink text="Log In" />

        <Button
          text="Sign Up Now"
          variant="outline"
          size="sm"
          className="border-blue-gray-900 text-blue-gray-900"
        />
      </div>
    </header>
  )
}
