import { SiteFooter } from '@/components/layout/site-footer'
import { Navigation } from '@/components/navigation'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='min-h-screen flex flex-col bg-[radial-gradient(circle_700px_at_50%_350px,#181818,transparent)] '>
      <Navigation scroll={true} />

      {/* <Navigation /> */}

      <main className=''>{children}</main>
      <SiteFooter />
    </div>
  )
}
