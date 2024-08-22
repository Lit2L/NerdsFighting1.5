import '../styles/globals.css'
import localFont from 'next/font/local'

import { cn, constructMetadata } from '@/lib/utils'
import { TooltipProvider } from '@/components/ui/tooltip'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { fontGeist, fontSans, fontUrban } from '@/app/assets'

export const metadata = constructMetadata()

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
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontUrban.variable,
          logoFont.variable,
          fontHeading.variable,
          fontGeist.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <TailwindIndicator />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
