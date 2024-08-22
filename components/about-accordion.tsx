import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

export function AccordionAbout() {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full font-light font-urban max-w-2xl '
    >
      <AccordionItem value='item-1 '>
        <AccordionTrigger>
          <span className='font-heading text-center text-xl text-white'>
            Nerds Fighting Origins...
          </span>{' '}
        </AccordionTrigger>

        <AccordionContent className='leading-6 font-urban'>
          Once upon a time a group of friends, united by their shared love for
          comics, anime, books, video games, magic cards and kung-fu movies,
          decided to transform their lives. They were the ones who always
          awkward in public, avoided physical challenges and made every effort
          to avoid confrontation. Deep down, they wanted to learn how to fight
          and defend themselves. Despite their fears, they made a pact to train
          hard and push their limits, and the results were incredible. They grew
          stronger, more confident, and mentally sharper. However, the intense
          training took its toll. Bruises and injuries began to pile up, and
          they worried about long-term damage, especially to their brains.
          Determined to continue without risking their health, they sought out a
          new approach to training—one that focused on defensive skills, proper
          technique, and controlled sparring. This method allowed them to train
          like fighters while safeguarding their well-being.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Nerds Fighting was Born..</AccordionTrigger>
        <AccordionContent>
          <span className='font-logo text-2xl text-emerald-500'>
            Nerds Fighting
          </span>{' '}
          was born—a kickboxing gym where anyone, regardless of background or
          fears, could learn to fight in a safe, supportive environment. It
          became a haven for those intimidated by traditional gyms, where they
          could conquer their fears, train smart, and protect their health. If
          you’ve ever been too scared to train or worried about injury, come
          join us at **Nerds Fighting**. We’ll show you that anyone can become a
          fighter—safely and confidently.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Nerds Fighting Goals</AccordionTrigger>
        <AccordionContent>
          <div className='p-6 font-mono text-xl font-bold'>
            <span className='font-heading text-lg text-emerald-500'>
              Nerds Fighting
            </span>
            <ul className='flex flex-col space-y-6 p-6 font-mono text-xs font-semibold tracking-tighter text-white dark:text-white md:text-sm'>
              <li className=''>
                • Wants you to have the ability to protect yourself and your
                loved ones.
              </li>
              <li className=''>
                • Wants you to be confident and comfortable in your own skin no
                matter where are.
              </li>
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
