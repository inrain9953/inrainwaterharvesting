import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Main1 = ({ heading, location, img }) => {
  return (
    <section>
      <div className=''>
        <Image
          className='w-full h-full object-cover'
          src={img}
          alt='hero1'
          width={1300}
          height={500}
        />
      </div>

      {/* Content 1 */}
      <div className='bg-gradient-to-br from-sky-50 to-white py-8 px-4 md:px-8 lg:px-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* LEFT CONTENT */}
            <div>
              <span className='inline-flex items-center rounded-full bg-sky-100 text-sky-700 px-4 py-2 text-sm font-semibold mb-5'>
                InRain® Construction Pvt. Ltd. (ICPL)
              </span>

              <h1 className='text-2xl md:text-4xl font-bold leading-tight text-gray-900 mb-3'>
                {heading} in {location}
              </h1>

              <p className='text-gray-600 leading-7 text-justify text-base'>
                <bold className='font-semibold'>
                  InRain Construction Private Limited
                </bold>{' '}
                is a leading{' '}
                <Link href={'/'} className='font-semibold text-sky-700 hover:text-green-600'>
                  {heading} in {location}
                </Link>{' '}
                specializing in advanced rainwater harvesting solutions. With a
                strong track record of success, we have executed over{' '}
                <span className='font-semibold text-sky-700'>
                  4000+ Rainwater Harvesting (RWH) Units
                </span>{' '}
                for esteemed clients such as HUL, PepsiCo, Sobha Developers,
                CPWD, PWD, Smart Cities, and Supreme Court Judges Bungalows,
                among others. Our commitment to innovation, quality, and
                sustainability has made us a trusted partner in the industry.
              </p>

              <p className='text-gray-600 leading-7 text-justify text-base mt-3'>
                At InRain Construction, we offer{' '}
                <Link
                  href='/modular-rainwater-harvesting-system'
                  className='text-sky-600 hover:underline font-semibold'
                >
                  Modular Rainwater Harvesting System
                </Link>{' '}
                Service Provider that help our clients optimize water resources
                and promote environmental conservation.
              </p>

              {/* CTA BUTTONS */}
              <div className='flex flex-wrap gap-4 mt-5'>
                <Link href='/contact'>
                  <button className='bg-sky-600 hover:bg-sky-700 transition-all duration-300 text-white px-6 py-3 rounded-xl font-medium shadow-lg'>
                    Get Free Consultation
                  </button>
                </Link>

                <Link href='/products'>
                  <button className='border border-sky-600 text-sky-700 hover:bg-sky-50 transition-all duration-300 px-6 py-3 rounded-xl font-medium'>
                    Explore Solutions
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              {/* Card 1 */}
              <div className='bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100'>
                <div className='flex items-center gap-4'>
                  <div className='bg-sky-100 rounded-2xl p-4'>
                    <Image
                      src='/approved.png'
                      alt='ISO Certification'
                      width={45}
                      height={45}
                      className='h-auto w-auto'
                    />
                  </div>

                  <div>
                    <span className='text-sm text-gray-500'>
                      ISO 9001 : 2015
                    </span>

                    <h4 className='font-bold text-gray-900 text-lg'>
                      Certified Company
                    </h4>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className='bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100'>
                <div className='flex items-center gap-4'>
                  <div className='bg-amber-100 rounded-2xl p-4'>
                    <Image
                      src='/trophyImg.png'
                      alt='Industrial Solution'
                      width={45}
                      height={45}
                      className='h-auto w-auto'
                    />
                  </div>

                  <div>
                    <span className='text-sm text-gray-500'>
                      Solution Provider
                    </span>

                    <h4 className='font-bold text-gray-900 text-lg'>
                      Best Industrial Partner
                    </h4>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className='bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 sm:col-span-2'>
                <div className='flex items-center gap-4'>
                  <div className='bg-green-100 rounded-2xl p-4'>
                    <Image
                      src='/griha.jpg'
                      alt='GRIHA Certified'
                      width={50}
                      height={50}
                      className='rounded-lg h-auto w-auto'
                    />
                  </div>

                  <div>
                    <span className='text-sm text-gray-500'>
                      Certified Product Recognition
                    </span>

                    <h4 className='font-bold text-gray-900 text-lg'>
                      InRain® Construction Pvt. Ltd. (ICPL)
                    </h4>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className='bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 sm:col-span-2'>
                <div className='flex items-center gap-4'>
                  <div className='bg-emerald-100 rounded-2xl p-4'>
                    <Image
                      src='/approved.png'
                      alt='ISO Environmental'
                      width={45}
                      height={45}
                      className='h-auto w-auto'
                    />
                  </div>

                  <div>
                    <span className='text-sm text-gray-500'>
                      ISO 14001 : 2015
                    </span>

                    <h4 className='font-bold text-gray-900 text-lg'>
                      Environmental Certified
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content 2 */}
    </section>
  )
}

export default Main1
