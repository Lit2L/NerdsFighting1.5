import React from 'react'

import { FlipWords } from './flip-words'

export function FlipWordsComponent() {
  const words = [
    'Upgrade-Body.exe',
    'Debug-Your-Limits.exe',
    'Optimize.Strength.',
    'Program-Updating...'
  ]

  return (
    <div className='flex h-16 w-full items-center justify-center px-4'>
      <div className='mx-auto w-full text-center text-3xl font-bold font-heading tracking-tight text-white'>
        <p className=''></p>
        <FlipWords words={words} />
      </div>
    </div>
  )
}
