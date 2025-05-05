import Image from 'next/image'
import logoImg from '~/assets/logo-colored-white.svg'
import { Bottom } from './Bottom'
import { Column, ColumnProps } from './Column'
import { Columns } from './Columns'

const footerLinks: Array<ColumnProps> = [
  {
    items: [
      { name: 'Pricing' },
      { name: 'Overview' },
      { name: 'Browse' },
      { isBeta: true, name: 'Accessibility' },
    ],
    text: 'Product',
  },
  {
    items: [
      { name: 'Brainstorming' },
      { name: 'Ideation' },
      { name: 'Wireframing' },
      { name: 'Research' },
    ],
    text: 'Solutions',
  },
  {
    items: [
      { name: 'Help Center' },
      { name: 'Blog' },
      { name: 'Tutorials' },
      { name: 'FAQs' },
    ],
    text: 'Resources',
  },
  {
    items: [
      { name: 'Contact Us' },
      { name: 'Developers' },
      { name: 'Documentation' },
      { name: 'Integrations' },
    ],
    text: 'Support',
  },
  {
    items: [
      { name: 'About' },
      { name: 'Press' },
      { name: 'Events' },
      { iconRight: true, name: 'Request Demo' },
    ],
    text: 'Company',
  },
]

export function Footer() {
  return (
    <footer className="bg-blue-gray-900 text-blue-gray-200 px-4">
      <Columns>
        <Image src={logoImg} alt="Logo" height={35} />

        {footerLinks.map((column, index) => (
          <Column
            key={`${index} - ${column.text}`}
            text={column.text}
            items={column.items}
          />
        ))}
      </Columns>

      <Bottom />
    </footer>
  )
}
