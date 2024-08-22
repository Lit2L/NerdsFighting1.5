import { SidebarNavItem, SiteConfig } from 'types'

export const siteConfig: SiteConfig = {
  name: 'Nerds Fighting',
  description: 'Kickboxing Gym, Training, Safety, Friendly, Deals.',
  url: 'https://nerdsfighting.com',
  ogImage: '/og-image.jpg',
  links: {
    yelp: 'https://yelp.com',
    github: 'https://github.com/Lit2l'
  },
  mailSupport: 'support@saas-starter.com'
}

export const footerLinks: SidebarNavItem[] = [
  {
    title: 'Company',
    items: [
      { title: 'About', href: '#' },
      { title: 'Enterprise', href: '#' },
      { title: 'Terms', href: '/terms' },
      { title: 'Privacy', href: '/privacy' }
    ]
  },
  {
    title: 'Product',
    items: [
      { title: 'Security', href: '#' },
      { title: 'Customization', href: '#' },
      { title: 'Customers', href: '#' },
      { title: 'Changelog', href: '#' }
    ]
  },
  {
    title: 'Docs',
    items: [
      { title: 'Introduction', href: '#' },
      { title: 'Installation', href: '#' },
      { title: 'Components', href: '#' },
      { title: 'Code Blocks', href: '#' }
    ]
  }
]
