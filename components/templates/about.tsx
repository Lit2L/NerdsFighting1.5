import Image from 'next/image'
import { IconYinYangFilled } from '@tabler/icons-react'
import { CiVideoOn } from 'react-icons/ci'
import { GiTeacher, GiWhistle, GiYinYang } from 'react-icons/gi'
import { PiParkDuotone } from 'react-icons/pi'

import { AccordionAbout } from '../about-accordion'
import { Separator } from '../ui/separator'

const featureCards = [
  {
    id: 0,
    title: 'Private Coaching',
    description:
      'Personalized instruction tailored to your ability and goals. Ideal for beginners and experienced kickboxers alike, private lessons help you master technique at your own pace.',
    info: '60 MINS - ALL AGES. ALL LEVELS.',
    image: '/about1.jpeg',
    icon: <GiWhistle className='size-6 text-blue-800' />,
    href: 'https://calendly.com/nerdsfighting/private-coaching'
  },

  {
    id: 1,
    title: 'Video Analysis',
    description:
      'Accelerate your progress with visual feedback. Our instructors guide you through sessions to pinpoint areas for improvement and deepen your understanding of fight mechanics.',
    info: '30 OR 60 MINS - ALL AGES. ALL LEVELS.',
    image: '/about9.png',
    icon: <CiVideoOn className='size-6 text-red-800' />,
    href: 'https://calendly.com/nerdsfighting/video-analysis-session-1'
  },
  {
    id: 2,
    title: 'Nerds Training',
    description:
      'Join a supportive community of martial artists. Enjoy daily group sessions that include bodyweight exercises, drills, mitts, Thai pads, heavy bag work, and more, all designed to help you reach your peak performance.',
    info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
    image: '/about4.png',
    icon: <GiYinYang className='size-6 text-sky-600' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 3,
    title: 'Cardio Kickboxing Sessions',
    description:
      'Experience a high-energy, dynamic hour of kickboxing. Perfect for beginners, these sessions boost your fitness and leave you feeling empowered.',
    info: '30 - ALL AGES. BEGINNERS.',
    image: '/about8.png',
    icon: <GiTeacher className='size-6 text-red-500' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 4,
    title: 'Outdoor Training',
    description:
      'Train like ancient warriors with our outdoor sessions. Connect with nature, enhance your fitness, and build mental toughness in a challenging and invigorating environment.',
    info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
    image: '/about2.png',
    icon: <PiParkDuotone className='size-6 text-green-500' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  }
]

export const About = () => {
  return (
    <section
      id='about'
      className='container my-24 border-4 relative min-h-screen w-full bg-[radial-gradient(circle_350px_at_50%_450px,#a614204d,transparent)]  dark:bg-[radial-gradient(circle_350px_at_50%_450px,#a614204d,transparent)]'
    >
      <div className='absolute  top-0 flex w-full  h-full flex-col items-center'>
        <div className=' opacity-90'>
          <Image
            src='/temple.png'
            alt='temple'
            height={400}
            width={400}
            className=''
          />
          <div className='absolute translate-y-[70%] text-center top-0  w-full'>
            <h2 className='font-heading text-3xl font-bold leading-[1.1] md:text-3xl'>
              Nerds Fighting Story
            </h2>
            <span className='py-6 font-heading text-center text-sm'>
              A Safe Haven for the Brave
            </span>{' '}
            <IconYinYangFilled className='-z-10 mx-auto size-12' />
          </div>
          <AccordionAbout />
        </div>
        <div className='translate-y-full w-full mx-auto'></div>
        {/* <div className='mx-auto my-12 flex max-w-[58rem] flex-col items-center justify-center space-y-9 pb-36 text-center'>
          <h2 className='text-left font-heading text-3xl font-bold leading-[1.1] md:text-3xl'>
            Train with Purpose
          </h2>
          <h3 className='font-kronaOne'>The Dojo.</h3>
          <p className='md:text-md text-md font-krona max-w-[85%]  pb-6 text-left leading-normal dark:text-white sm:text-center md:leading-8'>
            At Nerds Fighting we&apos;ve crafted a friendly environment that
            fosters respect, learning, growth and teamwork while guiding you
            through training that hones your skills and enhances your fighting
            abilities. We&apos;ve developed a wide range of dynamic workouts and
            drills design to improve coordination, speed and power.
          </p>
        </div> */}
      </div>
    </section>
  )
}
