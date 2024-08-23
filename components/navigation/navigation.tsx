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
      className={`sticky top-0 z-40 flex w-full items-center backdrop-blur-xl transition-all px-6 bg-gradient-to-bl from-emerald-600/90 via-emerald-600/70 to-emerald-500/90 ${
        scroll ? (scrolled ? 'border-b' : 'bg-transparent') : 'border-b'
      }`}
    >
      <Link href='/#' className='hidden md:flex p-3 h-20 w-24'>
        <Logo />
      </Link>

      <nav className='flex items-center mx-auto font-heading gap-3 py-3 tracking-tight'>
        <AnimatedLink href='/#about' variants={linkVariants}>
          About
        </AnimatedLink>
        <AnimatedLink href='/schedule' variants={linkVariants}>
          Schedule
        </AnimatedLink>
        <AnimatedLink href='/#menu' variants={linkVariants}>
          Menu
        </AnimatedLink>
        <AnimatedLink
          href='https://calendly.com/nerdsfighting/private-coaching'
          variants={linkVariants}
        >
          Book Private
        </AnimatedLink>
      </nav>
      <motion.div variants={linkVariants}>
        <ThemeToggleButton />
      </motion.div>
    </motion.header>
  )
}
