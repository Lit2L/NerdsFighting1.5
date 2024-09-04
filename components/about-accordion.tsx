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
            Nerds Fighting Origin Story
          </span>{' '}
        </AccordionTrigger>

        <AccordionContent className='leading-6 font-geist text-left '>
          One day a group of nerds who were very tired of being disrespected and
          antagonized, befriended me and asked if I could teach them how to
          fight. I didn&apos;t think they were serious but I could see in their
          eyes that they really wanted this so we immediately started working.
          <br />
          <br />
          When we started I was pretty sure they were going to quit soon. But
          they didn&apos;t. They would surprise me pretty often in training
          especially with their consistency and willingness to scrap. The
          outcome was pretty incredible. Everyone is and will different but some
          notable benefits gained from trainer were that some of them reduced
          their medication intake by half, some were able to drop all
          medications completely, everyone lost body fat, all were stronger and
          tougher and definitely more confident as a result. All this from a
          bunch of nerds getting together to train and push each other and that
          is what inspired me to extend this experience to because I believe
          that everyone should know what it feels like to be strong, skilled,
          confident and comfortable in their own skin.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        {/* <AccordionTrigger className='text-lg'>
          Nerds Story Continued...
        </AccordionTrigger> */}
        {/* <AccordionContent className='font-geist leading-6 bg-black/10 rounded-lg '>
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
        </AccordionContent> */}
      </AccordionItem>
      {/* <AccordionItem value='item-3'>
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
      </AccordionItem> */}
    </Accordion>
  )
}
