import { About } from '@/templates/about'
import { Hero } from '@/templates/hero'
import { Menu } from '@/templates/menu'
import { Schedule } from '@/templates/schedule'
import { Training } from '@/templates/training'

import { AnimatedPinCard } from '@/components/AnimatedPinCard'

export default function IndexPage() {
  return (
    <div className='min-h-screen w-full max-w-4xl mx-auto relative bg-[radial-gradient(circle_500px_at_50%_350px,#181818,transparent)]'>
      <Hero />
      <About />
      <Schedule />
      <AnimatedPinCard />
      <Training />
      <Menu />
    </div>
  )
}
