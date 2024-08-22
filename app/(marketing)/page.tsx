import { About } from '@/templates/about'
import { Hero } from '@/templates/hero'
import { Menu } from '@/templates/menu'
import { Schedule } from '@/templates/schedule'
import { Training } from '@/templates/training'

export default function IndexPage() {
  return (
    <div className='relative min-h-screen max-w-4xl mx-auto flex w-full flex-col gap-24 '>
      <Hero />
      <About />
      <Training />
      <Schedule />
      <Menu />
    </div>
  )
}
