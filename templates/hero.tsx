import { Badge } from '@/components/ui/badge'
import Logo from '@/components/logo'
import { AnimatedJoinButton } from '@/components/magicui/AnimatedJoinButton'
import { AnimatedMembersButton } from '@/components/magicui/AnimatedMembersButton'
import { FlipWordsComponent } from '@/components/magicui/FlipWordsComponent'
import GradualSpacing from '@/components/magicui/gradual-spacing'

export const Hero = () => {
  return (
    <section id='hero' className='h-full w-full mt-20'>
      <div className='flex flex-col items-center space-y-9 justify-center'>
        <Badge className='rounded-lg text-xs uppercase tracking-tighter shadow-lg shadow-red-900 font-heading text-black'>
          Kickboxing & Martial Arts Club
        </Badge>
        <GradualSpacing
          className='text-center font-logo text-2xl  shadow-gray-500 dark:shadow-gray-200 text-white sm:text-5xl md:text-6xl'
          text='Nerds Fighting'
        />

        <div className='flex flex-col relative gap-6'>
          <Logo />
          <FlipWordsComponent />
        </div>

        <div className='flex gap-6 '>
          <AnimatedJoinButton />
          <AnimatedMembersButton />
        </div>
      </div>
    </section>
  )
}
