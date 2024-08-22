import { Inter as FontSans, Urbanist } from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const fontUrban = Urbanist({
  subsets: ['latin'],
  variable: '--font-urban'
})

export const fontHeading = localFont({
  src: './CalSans-SemiBold.woff2',
  variable: '--font-heading'
})

export const fontGeist = localFont({
  src: './GeistVF.woff2',
  variable: '--font-geist'
})

export const fontNorthStar = localFont({
  src: './Northstar3D-4D3x.otf',
  variable: '--font-northstar'
})

export const fontBlackOps = localFont({
  src: './BlackOpsOne-Regular.ttf',
  variable: '--font-blackops'
})
