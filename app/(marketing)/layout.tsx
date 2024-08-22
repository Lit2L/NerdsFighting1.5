import { SiteFooter } from '@/components/layout/site-footer'
import { NavMobile } from '@/components/mobile-nav'
import { NavBar } from '@/components/navbar'
import { Navigation } from '@/components/navigation'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='min-h-screen flex flex-col bg-[radial-gradient(circle_700px_at_50%_350px,#181818,transparent)] '>
      <NavMobile />
      <NavBar scroll={true} />

      {/* <Navigation /> */}

      <main className='flex-1'>{children}</main>
      <SiteFooter />
    </div>
  )
}
