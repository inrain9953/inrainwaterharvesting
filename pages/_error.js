import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import HomeIcon from '@mui/icons-material/Home'
import RefreshIcon from '@mui/icons-material/Refresh'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default function Error () {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center justify-center px-5 overflow-hidden'>
        <div className='max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center'>
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center lg:text-left'
          >
            <span className='inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold text-sm'>
              Error 404
            </span>

            <h1 className='text-5xl md:text-7xl font-extrabold text-gray-900 mt-5 leading-tight'>
              Oops! Page Not Found
            </h1>

            <p className='text-gray-600 text-lg leading-8 mt-6 max-w-2xl'>
              The page you are looking for might have been removed, renamed, or
              is temporarily unavailable. Let’s get you back to the right place.
            </p>

            {/* BUTTONS */}
            <div className='flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start'>
              <Link
                href='/'
                className='inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold transition duration-300 shadow-lg hover:scale-105'
              >
                <HomeIcon />
                Back To Home
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className='relative flex justify-center'
          >
            <div className='absolute w-[350px] h-[350px] bg-sky-100 blur-[100px] rounded-full' />

            <Image
              src='/rainwater-harvesting-tank.jpg'
              alt='404 Error'
              width={600}
              height={500}
              className='relative z-10 object-contain'
              priority
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
