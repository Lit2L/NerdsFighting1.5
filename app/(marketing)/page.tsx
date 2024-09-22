// import { About } from '@/templates/about'
import { Hero } from '@/templates/hero'
import { Menu } from '@/templates/menu'
import NerdsLanding from '@/templates/nerdslanding'
import { Schedule } from '@/templates/schedule'
import { Training } from '@/templates/training'

import { AppleCardCarousel } from '@/components/AppleCardCarousel'

export default function IndexPage() {
  return (
    <div className='relative min-h-screen w-full bg-[radial-gradient(circle_500px_at_50%_350px,#181818,transparent)] text-black '>
      <Hero />

      <Schedule />
      <Training />
    </div>
  )
}
