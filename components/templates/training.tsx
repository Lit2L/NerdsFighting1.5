import Image from 'next/image'
import { IconPokeball } from '@tabler/icons-react'
import { CiVideoOn } from 'react-icons/ci'
import { GiTeacher, GiWhistle, GiYinYang } from 'react-icons/gi'
import { PiParkDuotone } from 'react-icons/pi'

import { AspectRatio } from '../ui/aspect-ratio'
import { Badge } from '../ui/badge'
import { Card } from '../ui/card'

export const Training = () => {
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
      image: '/about244.png',
      icon: <CiVideoOn className='size-6 text-red-800' />,
      href: 'https://calendly.com/nerdsfighting/video-analysis-session-1'
    },
    {
      id: 2,
      title: 'Nerds Training',
      description:
        'Join a supportive community of martial artists. Enjoy daily group sessions that include bodyweight exercises, drills, mitts, Thai pads, heavy bag work, and more, all designed to help you reach your peak performance.',
      info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
      image: '/about6.png',
      icon: <GiYinYang className='size-6 text-sky-600' />,
      href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
    },
    {
      id: 3,
      title: 'Cardio Kickboxing Sessions',
      description:
        'Experience a high-energy, dynamic hour of kickboxing. Perfect for beginners, these sessions boost your fitness and leave you feeling empowered.',
      info: '30 - ALL AGES. BEGINNERS.',
      image: '/about5.png',
      icon: <GiTeacher className='size-6 text-red-500' />,
      href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
    },
    {
      id: 4,
      title: 'Outdoor Training',
      description:
        'Train like ancient warriors with our outdoor sessions. Connect with nature, enhance your fitness, and build mental toughness in a challenging and invigorating environment.',
      info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
      image: '/about20.png',
      icon: <PiParkDuotone className='size-6 text-green-500' />,
      href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
    },
    {
      id: 5,
      title: 'Test your skills',
      description:
        'No better way to bond with your teammates than to compete against them. Test your skills and unleash your new abilities with some friendly random competition.',
      info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
      image: '/about12.png',
      icon: (
        <IconPokeball className='size-6 text-white rounded-full bg-red-600' />
      ),
      href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
    }
  ]

  return (
    <section
      id='training'
      className='max-w-5xl h-[70dvh] flex flex-col space-y-12'
    >
      {featureCards.map((card) => (
        <div key={card.id} className=''>
          {card.id % 2 === 0 ? (
            <div className='flex items-center w-full justify-between h-[300px]'>
              <div className='w-[400px] h-[300px]'>
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    className='fill rounded-lg object-fill'
                    fill
                  />
                </AspectRatio>
              </div>
              <div className='w-[400px] h-[300px] flex flex-col justify-center space-y-3 '>
                <div className='flex w-full translate-x-6 gap-3 pt-3'>
                  <span className=''>{card.icon}</span>
                  <h3 className='font-heading text-lg'>{card.title}</h3>
                </div>
                <p className='ml-6 text-sm font-light font-urban dark:text-white'>
                  {card.description}
                </p>
              </div>
            </div>
          ) : (
            <div className='flex justify-between h-[300px]  w-full gap-12'>
              <div className='flex w-[400px] h-[300px] flex-col justify-center bg-transparent space-y-6 '>
                <div className='flex gap-3'>
                  <div className='flex translate-x-6 gap-3 pt-3'>
                    {card.icon}
                    <h3 className='font-heading text-lg'>{card.title}</h3>
                  </div>
                </div>
                <div>
                  <p className='ml-6 text-sm font-light leading-6 text-black dark:text-white'>
                    {card.description}
                  </p>
                </div>
              </div>
              <div className='w-[400px]'>
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    className='rounded-lg object-fill '
                    fill
                  />
                </AspectRatio>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  )
}
