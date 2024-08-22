'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { useScroll } from '@/hooks/use-scroll'
import { linkVariants } from '@/components/navigation'
import { ThemeToggleButton } from '@/components/theme-toggle-button'

import Logo from '../logo'

const AnimatedLink = motion(Link)
AnimatedLink.defaultProps = { className: ' nav-link' }

interface NavBarProps {
  scroll?: boolean
  large?: boolean
}

export function Navigation({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50)

  return (
    <motion.header
      className={`sticky top-0 z-40 flex justify-between max-w-full py-1 md:px-6 items-center backdrop-blur-xl transition-all bg-gradient-to-bl from-emerald-600/90 via-emerald-600/70 to-emerald-500/90 ${
        scroll ? (scrolled ? 'border-b' : 'bg-transparent') : 'border-b'
      }`}
    >
      <AnimatedLink
        href='/#'
        variants={linkVariants}
        className='hidden md:block h-20 w-28'
      >
        <Logo />
      </AnimatedLink>

      <nav className='text-sm md:text-md flex items-center justify-between gap-x-3 md:gap-x-6 font-heading mx-auto md:mx-0  px-6 tracking-tight'>
        <AnimatedLink href='/#intro' variants={linkVariants}>
          Home
        </AnimatedLink>
        <AnimatedLink href='/#about' variants={linkVariants}>
          About
        </AnimatedLink>
        <AnimatedLink href='/schedule' variants={linkVariants}>
          Schedule
        </AnimatedLink>
        <AnimatedLink href='/#menu' variants={linkVariants}>
          Menu
        </AnimatedLink>

        <motion.div variants={linkVariants}>
          <ThemeToggleButton />
        </motion.div>
      </nav>
    </motion.header>
  )
}
