import Image from 'next/image'

function Logo() {
  return (
    <Image
      src='/logo.png'
      alt='Nerds Kickboxing Club'
      width={400}
      height={400}
      priority
      className='rounded-full'
    />
  )
}

export default Logo
