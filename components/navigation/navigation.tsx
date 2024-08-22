'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { useScroll } from '@/hooks/use-scroll'
import { linkVariants } from '@/components/navigation'
import { ThemeToggleButton } from '@/components/theme-toggle-button'

import Logo from '../logo'

const AnimatedLink = motion(Link)
AnimatedLink.defaultProps = { className: ' nav-link font-bold' }

interface NavBarProps {
  scroll?: boolean
  large?: boolean
}

export function Navigation({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50)

  return (
    <motion.header
      className={`sticky top-0 z-40 flex justify-between px-12 py-3 w-full items-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? 'border-b' : 'bg-transparent') : 'border-b'
      }`}
    >
      <AnimatedLink href='/#' variants={linkVariants} className='h-20 w-28'>
        <Logo />
      </AnimatedLink>

      <nav className='text-md flex items-center justify-center gap-x-6 font-kronaOne tracking-tight'>
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
