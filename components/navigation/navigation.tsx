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
    <motion.header
      variants={navVariants}
      initial='hidden'
      animate='visible'
      className='fixed top-0 left-0 z-50 w-full h-24 bg-background/90 backdrop-blur-lg flex items-center justify-between px-6'
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
          <ModeToggle />
        </motion.div>
      </nav>
    </motion.header>
  )
}
