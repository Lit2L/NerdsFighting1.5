import Image from 'next/legacy/image'
import { IconPokeball, IconTrees } from '@tabler/icons-react'
import { VideoIcon } from 'lucide-react'
import { CiVideoOn } from 'react-icons/ci'
import { GiTeacher, GiWhistle, GiYinYang } from 'react-icons/gi'
import { PiParkDuotone } from 'react-icons/pi'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

import { AspectRatio } from '../components/ui/aspect-ratio'

const featureCards = [
  {
    id: 0,
    title: 'Technique & Skill Development',
    description:
      'Technique and skills development are a cornerstone Join a supportive community of martial artists. Enjoy daily group sessions that include bodyweight exercises, drills, mitts, Thai pads, heavy bag work, and more, all designed to help you reach your peak performance.',
    duration: '1 Hour',
    levels: '',
    recommended: '',
    image: '/nerds1.png',
    icon: <GiYinYang className='size-6 text-sky-600' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 1,
    title: 'Group Training Sessions',
    description:
      'Become part of a welcoming martial arts community where daily group sessions focus on conditioning, drills, mitts, Thai pads, heavy bag work, and more. All is aimed at helping you achieve peak performance. Dive into a high-energy, dynamic hour of kickboxing—perfect for beginners to boost your fitness leaving you feeling empowered and confident.',
    duration: '1 Hour',
    levels: '',
    recommended: '',
    image: '/nerds3.png',
    icon: <GiTeacher className='size-6 ' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 2,
    title: 'Hands on Training',
    description:
      'Get hands-on training with our coaches who guide you through every session. Our coaches provide personalized feedback to help you improve your technique and reach your goals. ',
    duration: '',
    levels: '',
    recommended: '',
    image: '/nerds6.png',
    icon: <CiVideoOn className='size-6 text-red-800' />,
    href: 'https://calendly.com/nerdsfighting/video-analysis-session-1'
  },

  {
    id: 3,
    title: 'Cardio Kickboxing Sessions',
    description:
      'Master your technique and enhance your skills in a vibrant community of martial artists. Participate in daily group sessions that incorporate bodyweight exercises, drills, mitts, Thai pads, heavy bag work, and more—all tailored to elevate your performance to the next level.',
    duration: '1 Hour',
    levels: '',
    recommended: '',
    image: '/nerds7.png',
    icon: <GiTeacher className='size-6 ' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },

  {
    id: 4,
    title: 'Private Coaching',
    description: `Advance your skills level up your technique with private lessons customized to your goals. Whether you want to fine-tune  specific techniques or enhance your overall performance, private sessions provide the perfect opportunity.  Suitable for beginners and seasoned kickboxers alike, private lessons allow you to level up your craft at your own pace`,
    duration: '1 Hour',
    recommended:
      'boxing/kickboxing/muay thai gloves, hand wraps, water bottle, shin-pads, towel',
    image: '/about1.jpg',
    icon: <GiWhistle className='size-6 text-blue-800' />,
    href: 'https://calendly.com/nerdsfighting/private-coaching'
  },
  {
    id: 5,
    title: 'Outdoor Training',
    description:
      'Embrace the outdoors with our training sessions that let you soak up the sun and breathe in the fresh air. Connect with nature as you boost your fitness and build mental toughness with outdoor training sessions that include bodyweight exercises, drills, mitts, Thai pads, heavy bag work, and more.',
    duration: '1 Hour ALL LEVELS.',
    levels: '',
    recommended: '',
    image: '/about13.png',
    icon: <IconTrees className='size-6 text-green-600 rounded-full' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 6,
    title: 'Test your skills',
    description:
      'No better way to bond with your teammates than to compete against them. Test your skills and unleash your new abilities with some friendly random competition.',
    duration: '1 Hour',
    levels: '',
    recommended: '',
    image: '/about12.png',
    icon: <IconPokeball className='size-6 text-red-500 rounded-full' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  }
]

export const Training = () => {
  return (
    <section id='training' className='w-full h-full '>
      <div className='text-center  '>
        <p className='my-3 text-3xl md:text-6xl font-heading tracking-tight uppercase'>
          TRAINING
        </p>
      </div>
      <Separator className='w-20' />
      <div className='w-full mx-auto'>
        {featureCards.map((card, index) => (
          <div key={card.id} className='flex flex-col mt-6 gap-6 '>
            <div className='w-full'>
              <div className='flex w-full items-center p-2 justify-center'>
                <Image
                  src={card.image}
                  alt={card.title}
                  className='rounded-lg object-cover'
                  height={300}
                  width={420}
                />
              </div>
            </div>

            <div className='flex flex-col border-b'>
              <div className=' p-6 flex flex-col gap-3'>
                <div className='flex gap-3 items-center'>
                  <div className=''>{card.icon}</div>
                  <p className='font-heading text-md'>{card.title}</p>
                </div>
                <div className='flex flex-col '>
                  <p className='text-sm dark:text-white'>
                    <strong className=''> Description:</strong>{' '}
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='flex flex-col mt-6 gap-6 '>
          <div className='w-full'>
            <div className='flex w-full items-center p-2 justify-center'>
              <Image
                src='/nerds4.png'
                alt='Video Analysis'
                className='rounded-lg object-cover'
                height={300}
                width={320}
              />
            </div>
          </div>

          <div className='flex flex-col border-b'>
            <div className=' p-6 flex flex-col gap-3'>
              <div className='flex gap-3 items-center'>
                <div className=''>
                  <VideoIcon />
                </div>
                <p className='font-heading text-md'>Video Analysis </p>
              </div>
              <div className='flex flex-col '>
                <p className='text-sm dark:text-white'>
                  <strong className=''> Description:</strong> Accelerate your
                  progress with visual feedback. Our coaches guide you through
                  sessions to pinpoint areas for improvement and deepen your
                  understanding of fight mechanics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
