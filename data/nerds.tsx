import {
  IconApps,
  IconCalendarBolt,
  IconCertificate,
  IconContract,
  IconJoinBevel,
  IconListCheck,
  IconTrophy,
  IconUserCircle
} from '@tabler/icons-react'
import { HomeIcon } from 'lucide-react'
import { CiVideoOn } from 'react-icons/ci'
import { GiTeacher, GiWhistle, GiYinYang } from 'react-icons/gi'
import { PiParkDuotone } from 'react-icons/pi'

export const DATA = {
  name: 'Larry Ly',
  initials: 'LL',
  url: 'https://larryly.com',
  location: 'Orange, CA',
  locationLink: 'https://www.google.com/maps/place/sanfrancisco',
  description: 'Kickboxing and martial arts club.',
  summary: 'i fight nerds',
  navbar: [
    { href: '/#', icon: HomeIcon, label: 'Home' },
    { href: '/#about', icon: IconUserCircle, label: 'About' },
    { href: '/#schedule', icon: IconListCheck, label: 'Schedule' },
    { href: '/#training', icon: IconTrophy, label: 'Training' },
    { href: '/#classes', icon: IconApps, label: 'Classes' }
  ],
  services: [
    {
      id: 0,
      title: 'Hands-on Coaching',
      description:
        'Take your skills to the next level detailed instruction and coaching.  By having your technique and ability assessed by a trained eye immediate adjustments that can be implemeneted immediately. Ideal for beginners and experienced kickboxers alike, private lessons help you master technique at your own pace.',
      info: '60 MINS - ALL AGES. ALL LEVELS.',
      image: '/about1.jpeg',
      icon: <GiWhistle className='size-6 text-gray-600' />,
      href: 'https://calendly.com/nerdsfighting/private-coaching'
    },

    {
      id: 1,
      title: 'Video Analysis',
      description:
        'Accelerate your progress with visual feedback. Our instructors guide you through sessions to pinpoint areas for improvement and deepen your understanding of fight mechanics.',
      info: '30 OR 60 MINS - ALL AGES. ALL LEVELS.',
      image: '/about8.png',
      icon: <CiVideoOn className='size-6 text-red-800' />,
      href: 'https://calendly.com/nerdsfighting/video-analysis-session-1'
    },
    {
      id: 2,
      title: 'Group Training',
      description:
        'Join a supportive community of martial artists. Enjoy daily group sessions that include bodyweight exercises, drills, mitts, Thai pads, heavy bag work, and more, all designed to help you reach your peak performance.',
      info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
      image: '/about5.png',
      icon: <GiYinYang className='size-6 text-black' />,
      href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
    },
    {
      id: 3,
      title: 'Cardio Kickboxing Sessions',
      description:
        'Experience a high-energy, dynamic hour of kickboxing. Perfect for beginners, these sessions boost your fitness and leave you feeling empowered.',
      info: '30 - ALL AGES. BEGINNERS.',
      image: '/about13.png',
      icon: <GiTeacher className='size-6 text-red-500' />,
      href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
    },
    {
      id: 4,
      title: 'Outdoor Training',
      description:
        'Train like ancient warriors with our outdoor sessions. Connect with nature, enhance your fitness, and build mental toughness in a challenging and invigorating environment.',
      info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
      image: '/about13.png',
      icon: <PiParkDuotone className='size-6 text-green-500' />,
      href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
    }
  ],
  contact: {
    email: 'larryly1@gmail.com',
    tel: '+7149075273',
    social: {
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/larry-ly/',
        icon: IconCalendarBolt,

        navbar: true
      }
    }
  }
} as const
