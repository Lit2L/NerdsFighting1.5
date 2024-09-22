import '../styles/globals.css'
import { Toaster } from 'sonner'

import { constructMetadata } from '@/lib/utils'
import { TooltipProvider } from '@/components/ui/tooltip'
import Hydrate from '@/components/Hydrate'
import { Analytics } from '@/components/analytics'
import { Navigation } from '@/components/navigation'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata = constructMetadata()

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <head />

      <Hydrate>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className='min-h-screen bg-background/90'>{children}</div>
            <Analytics />
            <Toaster richColors closeButton />
            <TailwindIndicator />
          </TooltipProvider>
        </ThemeProvider>
      </Hydrate>
    </html>
  )
}
