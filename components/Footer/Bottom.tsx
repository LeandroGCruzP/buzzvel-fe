import { AccessibilityIcon } from '../icons/accessibility-icon'
import { WorldIcon } from '../icons/world-icon'
import { FooterLink } from './BottomLink'

export function Bottom() {
  return (
    <div className="flex flex-col gap-6 py-6">
      <p>uteach @ 2023. All rights reserved.</p>

      <div className="flex items-center justify-between">
        <FooterLink>Terms</FooterLink>
        <FooterLink>Privacy</FooterLink>
        <FooterLink>
          <WorldIcon height={24} width={24} />
          <span>EN</span>
        </FooterLink>
        <FooterLink>EUR</FooterLink>
        <FooterLink>
          <AccessibilityIcon height={24} width={24} />
        </FooterLink>
      </div>
    </div>
  )
}
