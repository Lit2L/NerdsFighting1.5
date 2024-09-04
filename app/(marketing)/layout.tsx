import { TopNavbar } from '@/components/TopNavbar'
import { SiteFooter } from '@/components/layout/site-footer'
import { Navigation } from '@/components/navigation'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='min-h-screen flex flex-col bg-[radial-gradient(circle_550px_at_50%_450px,#181818,transparent)] dark:bg-[radial-gradient(circle_350px_at_50%_450px,#a614204d,transparent)] relative w-full'>
      {/* <Navigation scroll={true} /> */}
      <TopNavbar />
      {/* <Navigation /> */}

      <main className=''>{children}</main>
      <SiteFooter />
    </div>
  )
}
