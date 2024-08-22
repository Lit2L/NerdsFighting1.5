'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { ModeToggle } from '@/components/mode-toggle'
import { linkVariants, navVariants } from '@/components/navigation'

import Logo from '../logo'

const AnimatedLink = motion(Link)
AnimatedLink.defaultProps = {
  className:
    'hover:text-primary-brand nav-link text-white font-light font-black text-sm tracking-wide'
}

export function Navigation() {
  return (
    <header className='sticky top-0 z-40 w-full backdrop-blur-xl flex items-center justify-between px-16 transition-all bg-gradient-to-b dark:from-emerald-500/90 dark:via-emerald-400 dark:to-emerald-600/95 from-emerald-400/70 via-emerald-300/70 to-gray-500/10'>
      <div className='size-20 flex flex-col justify-center items-center'>
        <Link href='/#' className=''>
          <Logo />
        </Link>
      </div>
      <nav className='flex items-center font-heading'>
        <div className='flex px-12 space-x-3 text-sm'>
          <Link href='/#about'>About</Link>
          <Link href='/#training'>Training</Link>
          <Link href='/#schedule'>Schedule</Link>
          <Link href='/#menu'>Menu</Link>
        </div>
        <div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}
