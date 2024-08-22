'use client'

// import { SessionProvider } from 'next-auth/react'
import { ReactNode, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

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
    <body className={cn('min-h-screen bg-background/90 text-[#f2f2f2]')}>
      {isHydrated && children}
    </body>
    // </SessionProvider>
  )
}
