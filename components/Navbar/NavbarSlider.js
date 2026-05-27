import React from 'react'
import Link from 'next/link'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { useState } from 'react'

const NavbarSlider = ({ openSidebarMenu, services }) => {
  const [showServices, setShowServices] = useState(false)

  return (
    <div>
      <div className='text-center'>
        <ul
          className='overflow-y-auto space-y-4 p-5 rounded-xl bg-transparent backdrop-blur-xl font-semibold max-h-[70vh]'
          style={openSidebarMenu ? { top: '1px' } : {}}
        >
          <li className='hover:text-green-500'>
            <Link href='/' style={{ textDecoration: 'none' }}>
              Home
            </Link>
          </li>
          <li className='hover:text-green-500'>
            <Link href='/about-us' style={{ textDecoration: 'none' }}>
              About
            </Link>
          </li>
          <li className='hover:text-green-500'>
            <Link href='/products' style={{ textDecoration: 'none' }}>
              Products
            </Link>
          </li>
          <li className='text-center cursor-pointer'>
            <button
              type='button'
              onClick={() => setShowServices(prev => !prev)}
              className='flex items-center justify-center w-full'
            >
              Services
              <ArrowDropDownIcon
                className={`transition-transform duration-300 ${
                  showServices ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                showServices
                  ? 'max-h-225 opacity-100 mt-3'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <ul className='flex flex-col gap-1 rounded-lg p-5 font-normal bg-sky-100 border-1 text-left'>
                {services.map(service => (
                  <li
                    key={service.link}
                    className={service.className ?? 'hover:text-green-500'}
                  >
                    <Link
                      href={service.link}
                      className='flex items-start gap-1'
                    >
                      <ArrowRightAltIcon fontSize='small' />

                      <span>{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className='hover:text-green-500'>
            <Link href='/contact-us' style={{ textDecoration: 'none' }}>
              Contact
            </Link>
          </li>
          <li className='hover:text-green-500'>
            <Link href='/blogs' style={{ textDecoration: 'none' }}>
              Blogs
            </Link>
          </li>
          <li className='hover:text-green-500'>
            <Link href='/business-network' style={{ textDecoration: 'none' }}>
              Business Network
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavbarSlider
