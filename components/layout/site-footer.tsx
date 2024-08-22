import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { ModeToggle } from '@/components/layout/mode-toggle'

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn('border-t', className)}>
      <div className='border-t py-4'>
        <div className='container flex max-w-6xl items-center justify-between'>
          <p className='text-left text-sm text-muted-foreground'>
            Built by . Hosted on{' '}
            <Link
              href='https://vercel.com'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Vercel
            </Link>
            . Illustrations by{' '}
            <Link
              href='https://popsy.co'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Popsy
            </Link>
          </p>

          <div className='flex items-center gap-3'>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
