'use client'

import Link from 'next/link'

export const Menu = () => {
  return (
    <div className='w-full'>
      <div className='container px-4 md:px-12'>
        <div className='mx-auto max-w-3xl space-y-4 text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            Menu
          </h2>
          <p className='leading-relaxed text-muted-foreground md:text-xl'>
            Check out what we offer and ask us about our specials!
          </p>
        </div>
        <div className='mt-12 rounded-lg border bg-background p-6 md:p-10'>
          <div className='aspect-[4/3] rounded-lg'>
            <div className='flex justify-between border-b py-12'>
              <div className='flex w-1/3 flex-col gap-3'>
                <h3 className='md:text-md text-sm font-semibold'>Membership</h3>
                <p className='text-xs sm:text-sm '>
                  Access to All Kickboxing classes
                </p>
              </div>
              <p className='md:text-md w-1/3 text-end text-sm'>
                $125 per month
              </p>
            </div>

            <div className='flex justify-between border-b py-12'>
              <div className='flex w-1/3 flex-col gap-3'>
                <h3 className='md:text-md text-sm font-semibold'>
                  Private Group Session
                </h3>
                <p className='text-xs sm:text-sm '>1 hr group sessions</p>
              </div>
              <p className='md:text-md w-1/3 text-end text-sm'>$125</p>
            </div>
            <div className='flex justify-between border-b py-12'>
              <div className='flex w-1/2 flex-col gap-3'>
                <h3 className='md:text-md text-sm font-semibold'>
                  Private Session (1-on-1)
                </h3>
                <ul className='indent-6 space-y-1 font-geist'>
                  <li className='text-xs sm:text-sm'>• 1 hr private session</li>
                  <li className='text-xs sm:text-sm '>• Customized training</li>
                  <li className='text-xs sm:text-sm '>
                    • Fitness, Technique, Strategy, Video Analysis, Pad/Boxing
                    Mitt Training...
                  </li>
                </ul>
              </div>
              <strong className='capitalize md:text-md w-1/3 text-end text-sm'>
                Call for pricing
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
