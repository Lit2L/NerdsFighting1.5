'use client'

import React from 'react'
import Image from 'next/image'

import { PinContainer } from '@/components/magicui/3dpin'

import { Card, CardContent } from './ui/card'
import { Separator } from './ui/separator'

export function AnimatedPinCard() {
  return (
    <div className='h-[50rem] w-full flex items-center justify-center '>
      <PinContainer
        title='8780 Warner Ave, Suite 7 Fountain Valley, CA 92708'
        href='https://maps.app.goo.gl/zvZ1hC5it3SM1qad7'
      >
        <div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[28rem] h-[20rem] '>
          <h3 className='max-w-xs font-heading !pb-2 !m-0 font-bold  text-base text-slate-100'>
            Nerds Fighting
          </h3>
          <p className=''>Location: Williams MMA</p>
          <div className='text-base !m-0 !p-0 font-normal'>
            <span className='text-slate-500 '>
              Address: 8780 Warner Ave, Suite 7 Fountain Valley, CA 92708
            </span>
          </div>
          <div className='flex w-full rounded-lg p-3'>
            <Image
              src='/location.png'
              alt='location'
              width={420}
              height={420}
              className='border rounded-md '
            />
          </div>
        </div>
        <Card className='py-6 my-6'>
          <CardContent className='p-3 '>
            <h3 className='font-heading text-center text-2xl'>
              Location: Williams MMA
            </h3>
            <Separator className='my-1' />
            8780 Warner Ave, Suite 7 Fountain Valley, CA 92708
          </CardContent>
        </Card>
      </PinContainer>
    </div>
  )
}
