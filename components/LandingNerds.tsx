'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight, MapPin, Play } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export default function Component() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const photos = [
    {
      src: '/placeholder.svg?height=600&width=800',
      alt: 'Action shot of kickboxing training'
    },
    {
      src: '/placeholder.svg?height=600&width=800',
      alt: 'Group photo of gym members'
    },
    {
      src: '/placeholder.svg?height=600&width=800',
      alt: 'Close-up of punch technique'
    },
    {
      src: '/placeholder.svg?height=600&width=800',
      alt: 'Wide shot of gym interior'
    }
  ]

  const videos = [
    {
      id: 'video1',
      title: 'Basic Techniques',
      thumbnail: '/placeholder.svg?height=200&width=300'
    },
    {
      id: 'video2',
      title: 'Advanced Combinations',
      thumbnail: '/placeholder.svg?height=200&width=300'
    },
    {
      id: 'video3',
      title: 'Cardio Kickboxing',
      thumbnail: '/placeholder.svg?height=200&width=300'
    }
  ]

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    )
  }

  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50])

  return (
    <div
      className='flex flex-col min-h-screen bg-black text-white'
      ref={containerRef}
    >
      <motion.header
        className='fixed top-0 left-0 right-0 z-50 py-6 bg-gradient-to-r from-purple-600 to-pink-600'
        style={{ opacity: headerOpacity, y: headerY }}
      >
        <div className='container mx-auto px-4'>
          <h1 className='text-5xl font-bold text-center tracking-tight'>
            Nerds Fighting
          </h1>
          <p className='text-xl text-center mt-2 font-light'>
            Where Code Meets Combat
          </p>
        </div>
      </motion.header>

      <main className='flex-grow container mx-auto px-4 py-24'>
        <section className='mb-32 h-screen flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='relative w-full h-[80vh] overflow-hidden rounded-3xl'
          >
            <Image
              src='/placeholder.svg?height=1080&width=1920'
              alt='Nerds Fighting Gym'
              layout='fill'
              objectFit='cover'
              className='brightness-50'
            />
            <motion.div
              className='absolute inset-0 flex flex-col items-center justify-center text-center'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h2 className='text-6xl font-bold mb-6'>
                Train Like a Nerd, Fight Like a Pro
              </h2>
              <p className='text-2xl max-w-2xl'>
                Experience the perfect blend of mental acuity and physical
                prowess at Silicon Valley&apos;s most innovative Muay Thai gym.
              </p>
            </motion.div>
          </motion.div>
        </section>

        <section className='mb-32'>
          <h2 className='text-5xl font-bold mb-12 text-center'>
            Our Training Ground
          </h2>
          <div className='relative h-[80vh]'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentPhotoIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                className='absolute inset-0 rounded-3xl overflow-hidden'
              >
                <Image
                  src={photos[currentPhotoIndex].src}
                  alt={photos[currentPhotoIndex].alt}
                  layout='fill'
                  objectFit='cover'
                />
              </motion.div>
            </AnimatePresence>
            <div className='absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent' />
            <Button
              variant='ghost'
              size='icon'
              className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 rounded-full h-12 w-12'
              onClick={prevPhoto}
            >
              <ChevronLeft className='h-8 w-8' />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 rounded-full h-12 w-12'
              onClick={nextPhoto}
            >
              <ChevronRight className='h-8 w-8' />
            </Button>
          </div>
        </section>

        <section className='mb-32'>
          <h2 className='text-5xl font-bold mb-12 text-center'>
            Training Videos
          </h2>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className='bg-gray-900 border-none overflow-hidden transform transition-all duration-300 hover:scale-105'>
                  <CardContent className='p-0'>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant='ghost'
                          className='w-full h-full p-0 hover:bg-transparent'
                          onClick={() => setActiveVideo(video.id)}
                        >
                          <div className='relative w-full aspect-video'>
                            <Image
                              src={video.thumbnail}
                              alt={video.title}
                              layout='fill'
                              objectFit='cover'
                            />
                            <div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                              <Play className='w-16 h-16' />
                            </div>
                          </div>
                          <div className='p-4 text-left'>
                            <h3 className='font-semibold text-lg'>
                              {video.title}
                            </h3>
                          </div>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className='sm:max-w-[768px] bg-gray-900 text-white'>
                        <div className='aspect-video'>
                          <iframe
                            width='100%'
                            height='100%'
                            src={`https://www.youtube-nocookie.com/embed/${activeVideo}`}
                            title={video.title}
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                          ></iframe>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className='mb-32'>
          <h2 className='text-5xl font-bold mb-12 text-center'>Find Us</h2>
          <motion.div
            className='bg-gray-900 p-8 rounded-3xl'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='flex items-center mb-6'>
              <MapPin className='mr-4 h-8 w-8 text-purple-500' />
              <p className='text-xl'>
                123 Tech Street, Silicon Valley, CA 94000
              </p>
            </div>
            <motion.div
              className='aspect-video rounded-2xl overflow-hidden'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01462168467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sus!4v1637309850935!5m2!1sen!2sus'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
              ></iframe>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <footer className='bg-gray-900 py-8'>
        <div className='container mx-auto px-4 text-center'>
          <p className='text-gray-400'>
            &copy; 2023 Nerds Fighting. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
