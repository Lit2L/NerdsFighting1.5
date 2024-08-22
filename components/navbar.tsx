'use client'

import { useContext } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { cn } from '@/lib/utils'
import { useScroll } from '@/hooks/use-scroll'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { DocsSearch } from '@/components/docs/search'
import MaxWidthWrapper from '@/components/layout/max-width-wrapper'
import { ModeToggle } from '@/components/layout/mode-toggle'
import { ModalContext } from '@/components/modals/providers'
import { Icons } from '@/components/shared/icons'

import { docsConfig } from '../config/docs'
import { marketingConfig } from '../config/marketing'
import Logo from './logo'

interface NavBarProps {
  scroll?: boolean
  large?: boolean
}

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50)
  const { data: session, status } = useSession()
  const { setShowSignInModal } = useContext(ModalContext)

  const selectedLayout = useSelectedLayoutSegment()
  const documentation = selectedLayout === 'docs'

  const configMap = {
    docs: docsConfig.mainNav
  }

  const links =
    (selectedLayout && configMap[selectedLayout]) || marketingConfig.mainNav

  return (
    <header
      className={`sticky top-0 z-40 flex w-full items-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? 'border-b' : 'bg-transparent') : 'border-b'
      }`}
    >
      <MaxWidthWrapper
        className='flex h-20 items-center justify-between py-4 border'
        large={documentation}
      >
        <div className='flex items-center gap-6 md:gap-10'>
          <Link href='/' className='flex size-28 items-center space-x-1.5'>
            <Logo />
          </Link>
          <div className=''>
            {links && links.length > 0 ? (
              <nav className='hidden items-center gap-6 md:flex'>
                {links.map((item, index) => (
                  <Link
                    key={index}
                    href={item.disabled ? '#' : item.href}
                    prefetch={true}
                    className={cn(
                      'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                      item.href.startsWith(`/${selectedLayout}`)
                        ? 'text-foreground'
                        : 'text-foreground/60',
                      item.disabled && 'cursor-not-allowed opacity-80'
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            ) : null}
          </div>
        </div>
        <div className='flex items-center space-x-3'>
          {session ? (
            <Link
              href={session.user.role === 'ADMIN' ? '/admin' : '/dashboard'}
              className='hidden md:block'
            >
              <Button
                className='gap-2 px-5'
                variant='default'
                size='sm'
                rounded='full'
              >
                <span>Dashboard</span>
              </Button>
            </Link>
          ) : status === 'unauthenticated' ? (
            <div className='flex items-center gap-6 px-3'>
              <ModeToggle />
              <Button
                className='hidden gap-2 bg-emerald-700 px-5 uppercase transition-all duration-300 ease-in-out md:flex'
                variant='default'
                size='lg'
                rounded='full'
                onClick={() => setShowSignInModal(true)}
              >
                <span>Sign In</span>
                <Icons.arrowRight className='size-4' />
              </Button>
            </div>
          ) : (
            <Skeleton className='hidden h-9 w-28 rounded-full lg:flex' />
          )}
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
