'use client'

// import { SessionProvider } from 'next-auth/react'
import { ReactNode, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { fontHeading, fontLogo, fontSans } from '@/app/assets'

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false)

  //Wait till Nextjs rehydration completes
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    // <SessionProvider>
    <body
      className={cn(
        'min-h-screen bg-background/90 font-sans antialiased',
        fontSans.variable,
        fontHeading.variable,
        fontLogo.variable
      )}
    >
      {isHydrated && children}
    </body>
    // </SessionProvider>
  )
}
