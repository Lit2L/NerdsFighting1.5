import { About } from '@/components/templates/about'
import { Hero } from '@/components/templates/hero'
import { Menu } from '@/components/templates/menu'
import Schedule from '@/components/templates/schedule'
import { Training } from '@/components/templates/training'

export default function IndexPage() {
  return (
    <main className='relative min-h-screen w-full bg-[radial-gradient(circle_500px_at_50%_350px,#181818,transparent)] items-center gap-6 pb-8 pt-6 flex flex-col mx-auto max-w-5xl'>
      <Hero />
      <About />
      <Training />
      <Schedule />
      <Menu />
    </main>
  )
}
