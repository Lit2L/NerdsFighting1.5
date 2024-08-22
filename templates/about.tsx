import Image from 'next/legacy/image'

import { AccordionAbout } from '@/components/about-accordion'

export const About = () => {
  return (
    <section
      id='about'
      className='w-full bg-[radial-gradient(circle_350px_at_50%_450px,#a614204d,transparent)] dark:bg-[radial-gradient(circle_350px_at_50%_450px,#a614204d,transparent)] mt-24'
    >
      <div className='flex flex-col text-center justify-center items-center my-12'>
        <h2 className='text-center font-heading text-3xl font-bold '>
          What Nerds?
        </h2>

        <div className=''>
          <Image
            src='/dojo.png'
            alt='temple'
            width={400}
            height={300}
            className=' '
          />
        </div>
        <div className='my-6'>
          <AccordionAbout />
        </div>
      </div>
    </section>
  )
}
