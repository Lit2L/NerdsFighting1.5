import { Metadata } from 'next'
import { clsx, type ClassValue } from 'clsx'
import ms from 'ms'
import { twMerge } from 'tailwind-merge'

import { siteConfig } from '@/config/site'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = '/favicon.ico',
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      'Next.js',
      'React',
      'Prisma',
      'Railway',
      'Auth.js',
      'shadcn ui',
      'Resend',
      'React Email',
      'Stripe'
    ],
    authors: [
      {
        name: 'larry||_'
      }
    ],
    creator: 'larry||_',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title,
      description,
      siteName: title
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@larry||_'
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    manifest: `${siteConfig.url}/site.webmanifest`,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}
