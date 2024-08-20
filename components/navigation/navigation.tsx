'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { linkVariants, navVariants } from '@/components/navigation'
import { ThemeToggleButton } from '@/components/theme-toggle-button'

import Logo from '../logo'

const AnimatedLink = motion(Link)
AnimatedLink.defaultProps = {
  className:
    'hover:text-primary-brand nav-link text-white font-light font-black text-sm tracking-wide'
}

export function Navigation() {
  return (
    <motion.header
      variants={navVariants}
      initial='hidden'
      animate='visible'
      className='container h-24 fixed inset-x-0 top-0 z-50 hidden w-full items-center justify-between md:flex bg-gradient-to-b from-slate-400/95 via-slate-800/70 to-slate-300/70  dark:bg-gradient-to-bl dark:from-emerald-400/95 dark:via-emerald-600/70 dark:to-emerald-400/95'
    >
      <AnimatedLink href='/#' variants={linkVariants} className='h-20 w-28'>
        <Logo />
      </AnimatedLink>

      <nav className='flex items-center justify-center gap-x-6 text-xs font-heading'>
        <AnimatedLink href='/#intro' variants={linkVariants}>
          Introduction
        </AnimatedLink>
        <AnimatedLink href='/#about' variants={linkVariants}>
          About
        </AnimatedLink>
        <AnimatedLink href='/schedule' variants={linkVariants}>
          Schedule
        </AnimatedLink>
        <AnimatedLink href='/#classes' variants={linkVariants}>
          Classes
        </AnimatedLink>

        <motion.div variants={linkVariants}>
          <ThemeToggleButton />
        </motion.div>
      </nav>
    </motion.header>
  )
}
