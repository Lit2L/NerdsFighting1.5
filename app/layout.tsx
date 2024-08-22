import '../styles/globals.css'
import { Toaster } from 'sonner'

import { cn, constructMetadata } from '@/lib/utils'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Analytics } from '@/components/analytics'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { fontBlackOps, fontLogo, fontSans } from '@/app/assets'

export const metadata = constructMetadata()

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
          fontBlackOps.variable,
          fontLogo.variable
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
            <Analytics />
            <Toaster richColors closeButton />
            <TailwindIndicator />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
