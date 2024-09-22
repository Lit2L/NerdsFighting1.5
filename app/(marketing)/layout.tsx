import { SiteFooter } from '@/components/layout/site-footer'
import { Navigation } from '@/components/navigation'
import { MobileNav } from '@/components/navigation/mobile-navigation'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='relative flex min-h-screen flex-col justify-between overflow-x-hidden'>
      <Navigation />
      <MobileNav />
      <main className='font-sans'>{children}</main>
      <SiteFooter />
    </div>
  )
}
