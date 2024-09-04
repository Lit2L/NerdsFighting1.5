'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import Logo from './logo'
import { ModeToggle } from './mode-toggle'
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu'

export function TopNavbar() {
  return (
    <div className='w-full flex items-center justify-center '>
      <Navbar className='top-2' />
    </div>
  )
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div
      className={cn(
        'fixed top-0  inset-x-0 rounded-full bg-gradient-to-bl from-neutral-800/90 via-neutral-400/90 to-neutral-600/90 dark:from-emerald-600/90 dark:via-neutral-900 dark:to-emerald-600/90 max-w-2xl mx-auto z-50',
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className='flex items-center justify-between w-full'>
          <Link href='/#' className='rounded-full w-24'>
            <Logo />
          </Link>
          <div className='flex gap-6 font-bold font-heading tracking-widest text-balance text-md'>
            <MenuItem setActive={setActive} active={active} item='Info'>
              <div className='flex flex-col w-full space-y-4 text-sm  bg-black/50 rounded-xl p-4'>
                <HoveredLink href='/#about'>About Us</HoveredLink>
                <HoveredLink href='/#schedule'>Schedule</HoveredLink>
                <HoveredLink href='/#menu'>See packages</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item='Training'>
              <div className='text-sm grid grid-cols-2 gap-10 bg-gradient-to-br from-neutral-600/50 to-neutral-900/50 p-4'>
                <ProductItem
                  title='Technique & Form'
                  href='/#training'
                  src='/about4.png'
                  description='Maximize your abilities with technique focused training'
                />
                <ProductItem
                  title='Pad Training'
                  href='/#training'
                  src='/nerds0.png'
                  description='Combine all your striking skills together with angles, timing, and accuracy for next level fighting skills and awareness. '
                />
                <ProductItem
                  title='Bag Training'
                  href='/#training'
                  src='/about11.png'
                  description='Bag work allows us to improve any aspect of our game whether alone or with your team'
                />
                <ProductItem
                  title='Sparring'
                  href='/#training'
                  src='/legkick.png'
                  description='Bring out the best in yourself and your teammates and expose each others weaknesses so that can remove them'
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item='Members'>
              <div className='flex flex-col space-y-4 text-sm rounded-lg bg-gradient-to-bl from-neutral-400/50 via-neutral-800/50 to-neutral-400/50 p-4'>
                <HoveredLink href='/hobby'>Hobby</HoveredLink>
                <HoveredLink href='/individual'>Individual</HoveredLink>
                <HoveredLink href='/team'>Team</HoveredLink>
                <HoveredLink href='/enterprise'>Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </div>

          <ModeToggle />
        </div>
      </Menu>
    </div>
  )
}
