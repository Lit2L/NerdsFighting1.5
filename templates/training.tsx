import Image from 'next/image'
import { IconPokeball } from '@tabler/icons-react'
import { CiVideoOn } from 'react-icons/ci'
import { GiTeacher, GiWhistle, GiYinYang } from 'react-icons/gi'
import { PiParkDuotone } from 'react-icons/pi'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from '@/components/ui/card'

import { AspectRatio } from '../components/ui/aspect-ratio'

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
    info: '45 MINS - ALL AGES. ALL LEVELS.',
    image: '/nerds2.jpg',
    icon: <CiVideoOn className='size-6 text-red-800' />,
    href: 'https://calendly.com/nerdsfighting/video-analysis-session-1'
  },
  {
    id: 2,
    title: 'Nerds Training',
    description:
      'Join a supportive community of martial artists. Enjoy daily group sessions that include bodyweight exercises, drills, mitts, Thai pads, heavy bag work, and more, all designed to help you reach your peak performance.',
    info: '60 MINS',
    image: '/nerds1.png',
    icon: <GiYinYang className='size-6 text-sky-600' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 3,
    title: 'Cardio Kickboxing Sessions',
    description:
      'Experience a high-energy, dynamic hour of kickboxing. Perfect for beginners, these sessions boost your fitness and leave you feeling empowered.',
    info: '60 MINS',
    image: '/nerds3.png',
    icon: <GiTeacher className='size-6 text-red-500' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 4,
    title: 'Outdoor Training',
    description:
      'Train like ancient warriors with our outdoor sessions. Connect with nature, enhance your fitness, and build mental toughness in a challenging and invigorating environment.',
    info: '60 MINS ALL LEVELS.',
    image: '/about13.png',
    icon: <PiParkDuotone className='size-6 text-green-500' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 5,
    title: 'Test your skills',
    description:
      'No better way to bond with your teammates than to compete against them. Test your skills and unleash your new abilities with some friendly random competition.',
    info: '60 MINS',
    image: '/about12.png',
    icon: (
      <IconPokeball className='size-6 text-white rounded-full bg-red-600' />
    ),
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  }
]

export const Training = () => {
  return (
    <section
      id='training'
      className='flex flex-col w-full my-24 relative min-h-screen gap-12 py-12'
    >
      <h2 className='text-3xl font-heading text-center'>Training</h2>
      {featureCards.map((card, index) => (
        <div
          key={card.id}
          className={`flex w-full justify-center md:flex-row ${
            card.id % 2 === 0 ? '' : 'md:flex-row-reverse'
          }`}
        >
          <Card className='w-full border flex flex-col '>
            <CardContent>
              <AspectRatio ratio={5 / 6} className=''>
                <Image
                  src={card.image}
                  alt={card.title}
                  className='rounded-lg object-cover'
                  layout='fill'
                  // height={350}
                  // width={350}
                />
              </AspectRatio>
            </CardContent>
          </Card>

          <Card className='flex flex-col items-center justify-start space-y-6 max-w-sm h-full border'>
            <Badge className='text-xs'>{card.info}</Badge>
            <CardTitle className='flex items-center gap-3'>
              {card.icon}
              <h3 className='font-heading text-lg'>{card.title}</h3>
            </CardTitle>

            <CardDescription>
              <p className='text-sm font-light leading-6 dark:text-white mt-3'>
                {card.description}
              </p>
            </CardDescription>
          </Card>
        </div>
      ))}
    </section>
  )
}
