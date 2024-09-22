import { SiteFooter } from '@/components/layout/site-footer'
import { Navigation } from '@/components/navigation'
import { MobileNav } from '@/components/navigation/mobile-navigation'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='min-h-screen flex flex-col bg-[radial-gradient(circle_550px_at_50%_450px,#18181891,transparent)] dark:bg-[radial-gradient(circle_350px_at_50%_450px,#a614204d,transparent)] relative w-full'>
      {/* <Navigation scroll={true} /> */}

      {/* <Navigation /> */}

      <Navigation />
      <MobileNav />
      <main className='mt-24'>{children}</main>
      <SiteFooter />
    </div>
  )
}
