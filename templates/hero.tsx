import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Logo from '@/components/logo'
import { AnimatedJoinButton } from '@/components/magicui/AnimatedJoinButton'
import { AnimatedMembersButton } from '@/components/magicui/AnimatedMembersButton'
import { FlipWordsComponent } from '@/components/magicui/FlipWordsComponent'
import GradualSpacing from '@/components/magicui/gradual-spacing'

export const Hero = () => {
  return (
    <section id='hero' className='p-6 relative w-full py-12'>
      <div className='container '>
        <div className='space-y-9'>
          <div className='flex flex-col z-20 items-center space-y-9 p-6 text-center'>
            <Badge className='md:text-md rounded-lg text-xs uppercase shadow-red-900 sm:font-heading tracking-wide'>
              Kickboxing & Martial Arts Club
            </Badge>
            <div className=''>
              <GradualSpacing
                className='text-center font-logo text-white'
                text='Nerds Fighting'
              />
            </div>
            <div className='p-6'>
              <Logo />
            </div>
            <FlipWordsComponent />
          </div>
          <div className='flex gap-6 justify-center h-24'>
            <AnimatedJoinButton />
            <AnimatedMembersButton />
          </div>
        </div>
      </div>
    </section>
  )
}
