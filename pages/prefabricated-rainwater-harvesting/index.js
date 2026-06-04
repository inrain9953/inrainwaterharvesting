import React from 'react'
import StaticMetatag from '@/components/Schema/StaticMetatag'
import StaticSchema from '@/components/Schema/StaticSchema'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Certification from '@/components/Certification/Certification'
import Image from 'next/image'
import Link from 'next/link'

const Prefabricated_Rainwater_Harvesting = () => {
  const data = {
    title:
      'Prefabricated Rainwater Harvesting | Modular Water Storage & Conservation',
    desc: 'Discover prefabricated rainwater harvesting systems for efficient water collection, storage, and reuse. Reduce water bills, support groundwater recharge, and adopt sustainable water conservation with modular rainwater harvesting solutions.',
    keyword:
      'prefabricated rainwater harvesting, prefabricated rainwater harvesting system, modular rainwater harvesting system, rainwater harvesting solution, rainwater collection system, water conservation system, sustainable water management, rooftop rainwater harvesting, rainwater storage tank, groundwater recharge system, eco-friendly water conservation, rainwater filtration system, modular water storage, commercial rainwater harvesting, industrial rainwater harvesting, residential rainwater harvesting, stormwater management, InRain Construction rainwater harvesting',
    canonical:
      'https://www.inrainwaterharvesting.com/prefabricated-rainwater-harvesting',
    ogTitle:
      'Prefabricated Rainwater Harvesting | Modular Water Storage & Conservation',
    ogDescription:
      'Discover prefabricated rainwater harvesting systems for efficient water collection, storage, and reuse. Reduce water bills, support groundwater recharge, and adopt sustainable water conservation with modular rainwater harvesting solutions.',
    ogUrl:
      'https://www.inrainwaterharvesting.com/prefabricated-rainwater-harvesting',
    twittertitle:
      'Prefabricated Rainwater Harvesting | Modular Water Storage & Conservation',
    twitterdescription:
      'Discover prefabricated rainwater harvesting systems for efficient water collection, storage, and reuse. Reduce water bills, support groundwater recharge, and adopt sustainable water conservation with modular rainwater harvesting solutions.'
  }
  return (
    <>
      <StaticMetatag data={data} />
      <StaticSchema />
      <Navbar />
      <main>
        <section className='bg-gradient-to-b from-slate-50 to-white pb-20 overflow-hidden'>
          {/* HERO IMAGE */}
          <div className='relative h-[260px] md:h-[350px] overflow-hidden'>
            <Image
              src='/service7.jpg'
              alt='Prefabricated Rainwater Harvesting'
              width={1300}
              height={500}
              priority
              className='w-full h-full object-cover'
            />

            {/* Overlay */}
            <div className='absolute inset-0 bg-black/45' />

            {/* Hero Content */}
            <div className='absolute inset-0 flex items-center justify-center px-4'>
              <div className='text-center max-w-4xl'>
                <span className='inline-flex items-center rounded-full bg-white/20 backdrop-blur-md text-white px-5 py-2 text-sm md:text-base font-semibold mb-1 border border-white/30'>
                  Sustainable Water Solutions
                </span>

                <h1 className='text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg'>
                  Prefabricated Rainwater Harvesting
                </h1>
              </div>
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className='max-w-7xl mx-auto px-2 md:px-8 lg:px-5 -mt-12 relative z-10'>
            <div className='bg-white rounded-[36px] shadow-2xl border border-slate-200 p-2 md:p-10'>
              <div className='max-w-7xl'>
                <div className='grid lg:grid-cols-[1.4fr_0.8fr] gap-10'>
                  {/* LEFT CONTENT */}
                  <div className='space-y-4'>
                    {/* INTRO */}
                    <div className='bg-white border border-slate-200 rounded-[32px] p-6 md:p-10 shadow-lg'>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        Prefabricated{' '}
                        <Link
                          href={'/rainwater-harvesting-system'}
                          className='font-semibold text-green-500 hover:text-sky-500'
                        >
                          rainwater harvesting systems
                        </Link>{' '}
                        are a sustainable solution for water scarcity and
                        environmental concerns. These modular systems
                        efficiently capture, store, and utilize rainwater using
                        components like collection surfaces, gutters, filters,
                        storage tanks, and distribution systems. These systems
                        work together seamlessly to conserve and utilize water
                        resources, addressing water scarcity and environmental
                        concerns.
                      </p>
                    </div>

                    {/* BENEFITS */}
                    <div className='bg-gradient-to-br from-sky-50 to-white border border-sky-100 rounded-[32px] p-5 md:p-10 shadow-lg'>
                      <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-3'>
                        Benefits of Prefabricated Rainwater Harvesting
                      </h2>

                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        Prefabricated rainwater harvesting offers numerous
                        advantages, including reduced water bills, decreased
                        strain on municipal water supplies, and increased
                        self-sufficiency in water usage. Additionally, it helps
                        alleviate stormwater runoff, reduces soil erosion, and
                        supports groundwater recharge.
                      </p>
                    </div>

                    {/* CHOOSING SUPPLIER */}
                    <div className='bg-white border border-slate-200 rounded-[32px] p-6 md:p-10 shadow-lg'>
                      <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-3'>
                        How Does Prefabricated Rainwater Harvesting Work?
                      </h2>

                      <ul className='space-y-3'>
                        <li className='flex items-start gap-4'>
                          <div className='min-w-3 h-3 rounded-full bg-green-600 mt-3'></div>
                          <p className='text-gray-700 leading-7'>
                            <span className='font-semibold text-slate-900'>
                              Collection and Filtration:
                            </span>{' '}
                            Rainwater is collected from rooftops or other
                            suitable surfaces and directed through gutters into
                            the harvesting system. The water then passes through
                            a series of filters to remove debris, leaves, and
                            other contaminants.
                          </p>
                        </li>

                        <li className='flex items-start gap-4'>
                          <div className='min-w-3 h-3 rounded-full bg-green-600 mt-2'></div>
                          <p className='text-gray-700 leading-7'>
                            <span className='font-semibold text-slate-900'>
                              Storage and Distribution:
                            </span>{' '}
                            Rainwater stored in secure tanks can be used for
                            non-potable applications like irrigation, toilet
                            flushing, laundry, and washing vehicles. It can also
                            be treated for potable use with additional
                            filtration and purification systems.
                          </p>
                        </li>
                      </ul>
                    </div>

                    {/* BEST CHOICE */}
                    <div className='bg-gradient-to-r from-sky-600 to-cyan-600 rounded-[32px] p-6 md:p-10 text-white shadow-2xl'>
                      <h2 className='text-2xl md:text-3xl font-bold mb-3'>
                        Best Choice for Rainwater Harvesting Solutions
                      </h2>

                      <p className='leading-7 text-slate-100 text-[16px] md:text-md'>
                        InRain Constructions Pvt. Ltd. is the best rainwater
                        harvesting supplier, providing top-quality products and
                        services. With extensive experience and expertise, we
                        offer customized solutions, durable tanks, efficient
                        filters, and reliable pumps. Trust InRain for all your
                        rainwater harvesting needs.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className='lg:sticky lg:top-28 h-fit space-y-5'>
                    {/* IMAGE CARD */}
                    <div className='overflow-hidden rounded-[36px] shadow-2xl border border-slate-200 group bg-white'>
                      <Image
                        src='/prefabricated-rainwater-harvesting.jpg'
                        alt='Prefabricated Rainwater Harvesting'
                        width={500}
                        height={500}
                        className='w-full h-full object-cover transition duration-700 group-hover:scale-105'
                      />
                    </div>

                    {/* INFO CARD */}
                    <div className='bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-100 rounded-[32px] p-7 shadow-lg'>
                      <span className='inline-flex px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold mb-4'>
                        Sustainable Water Management
                      </span>

                      <h3 className='text-2xl font-bold text-slate-900 mb-3'>
                        Prefabricated Rainwater Harvesting Solutions
                      </h3>

                      <p className='text-gray-700 leading-7'>
                        Prefabricated{' '}
                        <Link
                          href={'/'}
                          className='font-semibold text-green-500 hover:text-sky-500'
                        >
                          Rainwater harvesting
                        </Link>{' '}
                        solution helps conserve water, reduce groundwater
                        dependency, and support eco-friendly urban development.
                      </p>
                    </div>

                    {/* SMALL CTA CARD */}
                    <div className='bg-slate-900 text-white rounded-[32px] p-7 shadow-xl'>
                      <h4 className='text-xl font-bold mb-3'>
                        Need Expert Consultation?
                      </h4>

                      <p className='text-slate-300 leading-7 mb-5'>
                        Get customized rainwater harvesting solutions designed
                        according to your project requirements.
                      </p>

                      <Link
                        href='/contact'
                        className='bg-sky-500 hover:bg-sky-600 transition px-6 py-3 rounded-xl font-semibold'
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Certification />
      </main>
      <Footer />
    </>
  )
}

export default Prefabricated_Rainwater_Harvesting
