import '../styles/globals.css'
import { Toaster } from 'sonner'

import { constructMetadata } from '@/lib/utils'
import { TooltipProvider } from '@/components/ui/tooltip'
import Hydrate from '@/components/Hydrate'
import { Analytics } from '@/components/analytics'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata = constructMetadata()

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      {/* <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable,
          fontLogo.variable
        )}
      > */}
      <Hydrate>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <Analytics />
            <Toaster richColors closeButton />
            <TailwindIndicator />
          </TooltipProvider>
        </ThemeProvider>
      </Hydrate>
      {/* </body> */}
    </html>
  )
}
