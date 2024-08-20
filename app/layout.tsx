import '@/styles/globals.css'
import { Metadata } from 'next'
import localFont from 'next/font/local'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { TooltipProvider } from '@/components/ui/tooltip'
import Navbar from '@/components/navbar'
import { Navigation } from '@/components/navigation'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { fontGeist, fontSans, fontUrban } from '@/app/assets/fonts'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}
export const fontHeading = localFont({
  src: '/assets/BlackOpsOne-Regular.ttf',
  variable: '--font-heading'
})

export const logoFont = localFont({
  src: '/assets/Northstar3D-4D3x.otf',
  variable: '--font-logo'
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background max-w-full mx-auto font-sans antialiased relative',
            fontSans.variable,
            fontUrban.variable,
            logoFont.variable,
            fontHeading.variable,
            fontGeist.variable
          )}
        >
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            <TooltipProvider>
              <Navigation />
              <Navbar />
              <div className='mt-24'>{children}</div>
              <TailwindIndicator />
            </TooltipProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
