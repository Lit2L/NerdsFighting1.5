import Image from 'next/image'
import { CiVideoOn } from 'react-icons/ci'
import { FaYinYang } from 'react-icons/fa'
import { GiTeacher, GiWhistle, GiYinYang } from 'react-icons/gi'
import { PiParkDuotone } from 'react-icons/pi'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { AccordionAbout } from '@/components/about-accordion'

import { AspectRatio } from '../components/ui/aspect-ratio'

export const About = () => {
  return (
    <section
      id='about'
      className='container relative min-h-full w-full bg-[radial-gradient(circle_350px_at_50%_450px,#a614204d,transparent)] dark:bg-[radial-gradient(circle_350px_at_50%_450px,#a614204d,transparent)] '
    >
      <div className='flex flex-col text-center items-center  py-20'>
        <h2 className='text-center font-heading text-3xl font-bold '>
          What Nerds?
        </h2>
        <div className='mx-auto h-full mt-20'>
          <Image
            src='/temple.png'
            alt='temple'
            width={400}
            height={400}
            className='rounded-full'
          />
          <span className='text-center font-heading text-lg'>The Dojo.</span>
          <FaYinYang className='mx-auto size-16' />

          <div className='mt-20 '>
            <AccordionAbout />
          </div>
        </div>
      </div>
    </section>
  )
}
