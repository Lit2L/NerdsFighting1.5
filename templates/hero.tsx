import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Logo from '@/components/logo'
import { AnimatedJoinButton } from '@/components/magicui/AnimatedJoinButton'
import { AnimatedMembersButton } from '@/components/magicui/AnimatedMembersButton'
import { FlipWordsComponent } from '@/components/magicui/FlipWordsComponent'
import GradualSpacing from '@/components/magicui/gradual-spacing'

export const Hero = () => {
  return (
    <section id='hero' className='w-full relative  max-w-4xl mx-auto w-full'>
      <div className='flex flex-col container space-y-12'>
        <div className='flex flex-col z-20 items-center text-center gap-6'>
          <Badge className=''>Kickboxing & Martial Arts Club</Badge>

          <GradualSpacing
            className='text-center font-logo'
            text='Nerds Fighting'
          />

          <div className='p-6'>
            <Logo />
          </div>
          <FlipWordsComponent />
        </div>
        <div className='flex gap-3 sm:gap-6 justify-center h-24'>
          <AnimatedJoinButton />
          <AnimatedMembersButton />
        </div>
      </div>
    </section>
  )
}
