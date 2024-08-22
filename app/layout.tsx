import '../styles/globals.css'
import localFont from 'next/font/local'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'sonner'

import { cn, constructMetadata } from '@/lib/utils'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Analytics } from '@/components/analytics'
import ModalProvider from '@/components/modals/providers'
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
          'min-h-screen max-w-full bg-background font-sans antialiased',
          fontSans.variable,
          fontUrban.variable,
          logoFont.variable,
          fontHeading.variable,
          fontGeist.variable
        )}
      >
        <SessionProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <ModalProvider>{children}</ModalProvider>
              <Analytics />
              <Toaster richColors closeButton />
              <TailwindIndicator />
            </TooltipProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
