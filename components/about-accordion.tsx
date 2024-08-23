import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

import { Separator } from './ui/separator'

export function AccordionAbout() {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full mx-auto font-light font-heading max-w-2xl '
    >
      <AccordionItem value='item-1 '>
        <AccordionTrigger>
          <span className='font-heading text-center text-lg '>
            Nerds Fighting Origins...
          </span>{' '}
        </AccordionTrigger>

        <AccordionContent className='leading-6 font-urban text-left'>
          Once upon a time a group of friends united by their love for kung-fu
          movies, anime, books, comics, video games and magic cards, decided to
          transform their lives. This gang of nerds were the awkward people who
          avoided anything physical and made every effort to avoid
          confrontation. Deep down, they wanted to learn how to fight and defend
          themselves. Despite their fears, they made a pact to train hard and
          push their limits, and the results were incredible. They grew
          stronger, more confident, healthier and mentally sharper. <br />
          With all these positive benefits however, the intense training took
          its toll. Bruises and injuries began to pile up, and they worried
          about the long-term damage they would accumulate as they continued to
          train, especially to their brains. Determined to continue without
          risking their longevity and health, they sought out a new approach to
          training. One that focused on defensive skills, proper technique, and
          controlled sparring. This method allowed them to train like fighters
          while safeguarding their well-being.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger className='text-lg'>
          Nerds Story Continued...
        </AccordionTrigger>
        <AccordionContent className='font-sans leading-6 bg-black/10 rounded-lg '>
          And so...
          <span className='font-logo text-2xl text-emerald-950 font-extrabold '>
            Nerds Fighting
          </span>{' '}
          Nerds Fighting was born — a kickboxing gym where anyone, regardless of
          background, could learn to fight and train in a safe and supportive
          environment. It became a haven for those intimidated by traditional
          fight gyms. For once there was a place where admitting to your fears
          led to conquering them. <br />
          If you&apos;ve ever felt too intimidated to walk into a fight gym, we
          completely understand but if you do we&apos;ll do our best to help you
          get to where you want to be. <br />
          <br /> Come join us at Nerds Fighting. We&apos;ll show you that anyone
          can train like a fighter, get in shape, and build confidence safely
          and effectively.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger className='text-lg'>The Goal</AccordionTrigger>
        <AccordionContent>
          <div className='p-6 font-mono text-xl font-bold'>
            <span className='font-heading text-lg text-black dark:text-emerald-500'>
              Nerds Fighting
            </span>
            <ul className='flex flex-col space-y-6 p-6 font-mono text-xs font-semibold tracking-tighter text-left dark:text-white md:text-sm'>
              <li className=''>
                • Wants you to have the ability to protect yourself.
              </li>
              <Separator />
              <li className=''>
                • Wants you to be confident and comfortable in your own skin no
                matter where are.
              </li>
              <Separator />
              <li className=''>
                • Wants you to live in a body that is sharp, strong, and built
                for longevity.
              </li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
