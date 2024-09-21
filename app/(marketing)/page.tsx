import { About } from '@/templates/about'
import { Hero } from '@/templates/hero'
import { Menu } from '@/templates/menu'
import { Schedule } from '@/templates/schedule'
import { Training } from '@/templates/training'

export default function IndexPage() {
  return (
    // <div className='relative min-h-screen max-w-4xl mx-auto flex w-full flex-col my-24 py-12 space-y-24 bg-[radial-gradient(circle_500px_at_50%_350px,#181818,transparent)]'>
    <div className='relative max-w-4xl mx-auto w-full'>
      <Hero />
      <About />
      <Schedule />
      <Training />
      <Menu />
    </div>
  )
}
