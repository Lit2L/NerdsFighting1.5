'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { useScroll } from '@/hooks/use-scroll'
import { linkVariants } from '@/components/navigation'
import { ThemeToggleButton } from '@/components/theme-toggle-button'

import { Container } from '../Container'
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
      className={`fixed inset-x-0 top-0 z-40 hidden h-24 justify-between md:flex w-full items-center backdrop-blur-xl transition-all px-16 bg-gradient-to-bl rounded-sm hidden  from-emerald-600/90 via-emerald-600/50 to-emerald-500/90 ${
        scroll ? (scrolled ? 'border-b' : 'bg-transparent') : 'border-none'
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
