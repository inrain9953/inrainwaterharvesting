import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import StaticMetatag from '@/components/Schema/StaticMetatag'
import Image from 'next/image'
import React from 'react'
import StaticSchema from '@/components/Schema/StaticSchema'
import Link from 'next/link'
import Certification from '@/components/Certification/Certification'

const Rainwater_Harvesting_System = () => {
  const data = {
    title:
      'Rainwater Harvesting System | Water Conservation & Storage Solution',
    desc: 'Discover the benefits of a rainwater harvesting system for collecting, storing, and conserving rainwater. Learn how advanced filtration, storage, and groundwater recharge solutions help reduce water scarcity and promote sustainable water management.',
    keyword:
      'rainwater harvesting system, rainwater harvesting, water conservation system, rainwater collection system, rooftop rainwater harvesting, groundwater recharge system, rainwater storage tank, sustainable water management, rainwater filtration system, water saving solutions, eco-friendly water system, domestic rainwater harvesting, commercial rainwater harvesting, industrial rainwater harvesting, water scarcity solution, rainwater harvesting benefits, groundwater replenishment, water management system',
    canonical:
      'https://www.inrainwaterharvesting.com/rainwater-harvesting-system',
    ogTitle:
      'Rainwater Harvesting System | Water Conservation & Storage Solution',
    ogDescription:
      'Discover the benefits of a rainwater harvesting system for collecting, storing, and conserving rainwater. Learn how advanced filtration, storage, and groundwater recharge solutions help reduce water scarcity and promote sustainable water management.',
    ogUrl: 'https://www.inrainwaterharvesting.com/rainwater-harvesting-system',
    twittertitle:
      'Rainwater Harvesting System | Water Conservation & Storage Solution',
    twitterdescription:
      'Discover the benefits of a rainwater harvesting system for collecting, storing, and conserving rainwater. Learn how advanced filtration, storage, and groundwater recharge solutions help reduce water scarcity and promote sustainable water management.'
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
              src='/service9.jpg'
              alt='Rainwater Harvesting System'
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
                <span className='inline-flex items-center rounded-full bg-white/20 backdrop-blur-md text-white px-5 py-2 text-sm md:text-base font-semibold mb-5 border border-white/30'>
                  Sustainable Water Solution
                </span>

                <h1 className='text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg'>
                  Rainwater Harvesting System
                </h1>
              </div>
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className='max-w-7xl mx-auto px-2 md:px-8 lg:px-5 -mt-12 relative z-10'>
            <div className='bg-white rounded-[36px] shadow-2xl border border-slate-200 p-6 md:p-10 lg:p-14'>
              <div className='grid lg:grid-cols-[1.3fr_0.7fr] gap-10'>
                {/* LEFT CONTENT */}
                <div className='space-y-3 text-gray-600 text-base md:text-md leading-7 text-justify'>
                  <p>
                    A rainwater harvesting system is an efficient and
                    eco-friendly method of collecting, storing, and utilizing
                    rainwater for various domestic, commercial, and industrial
                    purposes. With increasing water scarcity and rising demand,
                    this system has become an essential solution for sustainable
                    water management, especially in urban areas.
                  </p>

                  <p>
                    The basic components of a rainwater harvesting system
                    include a catchment area, conveyance system, filtration
                    unit, storage tank, and distribution system. The catchment
                    area is usually a rooftop or open surface where rainwater is
                    collected. This water is then directed through pipes or
                    gutters into a filtration system that removes dust, leaves,
                    and other impurities. After filtration, the clean water is
                    stored in tanks or underground reservoirs for future use.
                  </p>

                  <p>
                    Modern rainwater harvesting systems are designed with
                    advanced filtration technologies and durable storage
                    solutions to ensure water quality and longevity. These
                    systems can be easily integrated into residential buildings,
                    commercial complexes, and industrial facilities. In addition
                    to storage, some systems are designed for groundwater
                    recharge, where excess water is directed into recharge pits
                    or borewells to replenish underground water levels.
                  </p>

                  <p>
                    One of the major benefits of a rainwater harvesting system
                    is its ability to reduce dependence on municipal water
                    supply and groundwater extraction. It helps lower water
                    bills, conserves natural resources, and reduces the risk of
                    flooding by managing excess rainwater efficiently. Moreover,
                    it promotes environmental sustainability by supporting water
                    conservation efforts.
                  </p>

                  <p>
                    In regions with irregular rainfall patterns, rainwater
                    harvesting acts as a reliable backup water source.
                    Governments and environmental agencies also encourage its
                    adoption through regulations and incentives. Overall,
                    installing a rainwater harvesting system is a smart
                    investment that not only addresses water scarcity but also
                    contributes to a cleaner and greener environment for future
                    generations.
                  </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className='lg:sticky lg:top-28 h-fit'>
                  <div className='overflow-hidden rounded-[32px] shadow-2xl border border-slate-200 group'>
                    <Image
                      src='/rainwater-harvesting-system.jpg'
                      alt='Rainwater Harvesting System'
                      width={500}
                      height={500}
                      className='w-full object-cover transition duration-500 group-hover:scale-105'
                    />
                  </div>

                  {/* Small Info Card */}
                  <div className='bg-sky-50 border border-sky-100 rounded-[28px] p-6 mt-6 shadow-md'>
                    <h3 className='text-xl font-bold text-sky-700 mb-3'>
                      Sustainable Water Management
                    </h3>

                    <p className='text-gray-600 leading-7'>
                      Rainwater harvesting helps conserve water, reduce
                      groundwater dependency, and support eco-friendly urban
                      development.
                    </p>
                  </div>

                  {/* SMALL CTA CARD */}
                  <div className='bg-slate-900 text-white rounded-[32px] p-7 shadow-xl mt-6'>
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
        </section>

        <Certification />
      </main>
      <Footer />
    </>
  )
}

export default Rainwater_Harvesting_System
