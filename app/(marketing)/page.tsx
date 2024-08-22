import { About } from '@/templates/about'
import { Hero } from '@/templates/hero'
import { Menu } from '@/templates/menu'
import { Schedule } from '@/templates/schedule'
import { Training } from '@/templates/training'

export default function IndexPage() {
  return (
    <div className='min-h-screen w-full max-w-sm md:max-w-3xl mx-auto relative flex flex-col gap-24'>
      <Hero />
      <About />
      <Training />
      <Schedule />
      <Menu />
    </div>
  )
}
