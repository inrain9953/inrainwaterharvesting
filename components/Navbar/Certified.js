import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Certified = () => {
  return (
    <div className='flex justify-between mr-5 ml-5 m-1'>
      <Link href={'/'}>
        <Image
          loading='eager'
          src='/logo.png'
          alt='logo'
          width={75}
          height={75}
        />
      </Link>
      <div className='flex items-center gap-10'>
        <div className='flex items-center gap-1'>
          <div className='flex flex-col text-[15px]'>
            <span className='font-semibold'>THE BEST INDUSTRIAL</span>
            <span>Solution Provider</span>
          </div>
          <div>
            <Image
              src='/trophyImg.png'
              alt='certified'
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <div className='flex flex-col text-[15px]'>
            <span className='font-semibold'>CERTIFIED COMPANY</span>
            <span>ISO 9001:2015</span>
          </div>
          <div>
            <Image src='/approved.png' alt='certified' width={40} height={40} />
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <div className='flex flex-col text-[15px]'>
            <span className='font-semibold'>CERTIFIED COMPANY</span>
            <span>ISO 14001:2015</span>
          </div>
          <div>
            <Image src='/approved.png' alt='certified' width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certified
