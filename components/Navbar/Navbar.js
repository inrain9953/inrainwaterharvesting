import React from 'react'
import Link from 'next/link'
import Certified from './Certified'
import Quote from './Quote'
import Image from 'next/image'
import { useState } from 'react'
import NavbarSlider from './NavbarSlider'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import ContactForm from '../Contact/Form'
import { serviceData } from '../constant'
import ClearIcon from '@mui/icons-material/Clear'

const Navbar = () => {
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false)
  const [open, setOpen] = useState(false)
  // const [openContact, setOpenContact] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false)
  function openSidebar () {
    setOpenSidebarMenu(!openSidebarMenu)
  }
  const toggleContactForm = () => {
    setShowContactForm(prev => !prev)
  }

  return (
    <>
      <nav className='sticky top-0 z-50 bg-white'>
        {/* For Desktop */}
        <div className='hidden md:block'>
          <div className='bg-sky-200'>
            <div className='flex flex-col justify-center h-10'>
              <div className='flex text-md justify-center gap-10 items-center text-[17px] font-semibold'>
                <Link className='hover:text-green-500' href='/'>
                  Home
                </Link>
                <Link className='hover:text-green-500' href='/about'>
                  About
                </Link>
                <Link className='hover:text-green-500' href='/products'>
                  Products
                </Link>
                <div className='relative'>
                  {/* Trigger */}
                  <button
                    onClick={() => setOpen(!open)}
                    className='flex items-center cursor-pointer gap-1 font-medium hover:text-green-500 transition-colors duration-300'
                  >
                    Services
                    <ArrowDropDownIcon
                      className={`transition-transform duration-300 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`
          absolute left-1/2 top-10 -translate-x-1/2
          z-50 w-[420px]
          transition-all duration-300 origin-top
          ${
            open
              ? 'opacity-100 scale-100 visible'
              : 'opacity-0 scale-95 invisible'
          }
        `}
                  >
                    <div className='bg-white border border-slate-200 rounded-3xl shadow-2xl p-4 max-h-[420px] overflow-y-auto backdrop-blur-lg'>
                      <ul className='space-y-1'>
                        {serviceData.map((service, index) => (
                          <li key={index}>
                            <Link
                              href={service.link}
                              onClick={() => setOpen(false)}
                              className={`
                    flex items-center gap-3 p-1 rounded-xl
                    transition-all duration-300
                    hover:bg-sky-50 hover:text-green-600
                    ${
                      service.danger
                        ? 'text-red-600 animate-pulse'
                        : 'text-gray-700'
                    }
                  `}
                            >
                              <ArrowRightAltIcon fontSize='small' />

                              <span className='flex items-center text-sm font-medium'>
                                {service.title}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <Link className='hover:text-green-500' href='/contact'>
                  Contact
                </Link>
                <Link className='hover:text-green-500' href='/blogs'>
                  Blogs
                </Link>
                <Link className='hover:text-green-500' href='/business-network'>
                  Business Network
                </Link>
              </div>
            </div>
          </div>
          <Certified />
          <Quote toggleContactForm={toggleContactForm} />
        </div>

        {/* For Mobile */}
        <div className='block md:hidden'>
          <div className='flex items-center justify-between ml-3 mr-3'>
            <Link href={'/'} className='flex items-center justify-center h-18'>
              <Image src='/logo.png' alt='logo' width={80} height={80} />
            </Link>
            <div>
              <input id='checkbox' type='checkbox' onClick={openSidebar} />
              <label className='toggle' htmlFor='checkbox'>
                <div id='bar1' className='bars'></div>
                <div id='bar2' className='bars'></div>
                <div id='bar3' className='bars'></div>
              </label>
            </div>
          </div>
          <div
            className={`
      absolute rounded-xl shadow-2xl left-0 top-0 w-full
      z-0
      transition-transform duration-300 ease-in-out
      ${openSidebarMenu ? 'translate-y-26 ' : '-translate-y-full'}
    `}
          >
            <NavbarSlider
              services={serviceData}
              openSidebarMenu={openSidebarMenu}
            />
          </div>
          <Quote toggleContactForm={toggleContactForm} />
        </div>
      </nav>
      {showContactForm && (
        <div className='fixed inset-0 z-[9999] flex items-center justify-center p-4'>
          {/* Backdrop */}
          <div
            className='absolute inset-0 bg-black/50 backdrop-blur-sm'
            onClick={() => setShowContactForm(false)}
          />
          {/* Form */}
          <div className='relative z-10 w-full max-w-md'>
            <div className=''>
              <ClearIcon
                onClick={() => setShowContactForm(false)}
                className='bg-white/90 rounded-full p-1 cursor-pointer'
                fontSize='large'
              />
            </div>
            <ContactForm />
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
