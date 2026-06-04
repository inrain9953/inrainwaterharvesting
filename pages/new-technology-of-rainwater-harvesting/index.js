import React from 'react'
import StaticMetatag from '@/components/Schema/StaticMetatag'
import StaticSchema from '@/components/Schema/StaticSchema'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Certification from '@/components/Certification/Certification'
import Image from 'next/image'
import Link from 'next/link'

const New_Technology_Of_Rainwater_Harvesting = () => {
  const data = {
    title:
      'New Technology of Rainwater Harvesting: Smart & Sustainable Water Solutions',
    desc: 'Explore new technology in rainwater harvesting, including modular systems, advanced filtration, IoT monitoring, and groundwater recharge solutions for efficient and sustainable water conservation.',
    keyword:
      'new technology of rainwater harvesting, advanced rainwater harvesting system, smart rainwater harvesting, modular rainwater harvesting system, rainwater harvesting technology, IoT rainwater harvesting, rainwater filtration technology, sustainable water conservation, groundwater recharge system, smart water management, modern rainwater harvesting, underground modular tank system, water saving technology, urban rainwater harvesting, eco-friendly water solutions, rainwater storage technology, automated water monitoring system, innovative rainwater harvesting solutions',
    canonical:
      'https://www.inrainwaterharvesting.com/new-technology-of-rainwater-harvesting',
    ogTitle:
      'New Technology of Rainwater Harvesting: Smart & Sustainable Water Solutions',
    ogDescription:
      'Explore new technology in rainwater harvesting, including modular systems, advanced filtration, IoT monitoring, and groundwater recharge solutions for efficient and sustainable water conservation.',
    ogUrl:
      'https://www.inrainwaterharvesting.com/new-technology-of-rainwater-harvesting',
    twittertitle:
      'New Technology of Rainwater Harvesting: Smart & Sustainable Water Solutions',
    twitterdescription:
      'Explore new technology in rainwater harvesting, including modular systems, advanced filtration, IoT monitoring, and groundwater recharge solutions for efficient and sustainable water conservation.'
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
              src='/service5.jpg'
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
                <span className='inline-flex items-center rounded-full bg-white/20 backdrop-blur-md text-white px-5 py-2 text-sm md:text-base font-semibold mb-1 border border-white/30'>
                  Sustainable Solution
                </span>

                <h1 className='text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg'>
                  New Technology of Rainwater Harvesting
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
                    New technology in rainwater harvesting is transforming the
                    way water is collected, filtered, and reused, making systems
                    more efficient, compact, and sustainable. Traditional
                    methods are now being upgraded with smart designs and
                    advanced materials to meet the growing demand for water
                    conservation in urban and industrial areas.
                  </p>

                  <p>
                    One of the key innovations is{' '}
                    <Link
                      href={'/modular-rainwater-harvesting-system'}
                      className='font-semibold text-green-500 hover:text-sky-500'
                    >
                      modular rainwater harvesting systems
                    </Link>
                    . These systems use interlocking, high-strength plastic
                    modules installed underground to store and recharge large
                    volumes of rainwater. They are space-saving, easy to
                    install, and ideal for areas with limited land availability.
                    Unlike conventional pits, modular systems offer higher
                    storage capacity and better structural durability.
                  </p>

                  <p>
                    Another advancement is the use of advanced filtration
                    technologies. Multi-layer filters, UV purification, and
                    self-cleaning filter units ensure that collected rainwater
                    is free from contaminants, making it suitable for reuse in
                    applications like irrigation, flushing, and even industrial
                    processes. Smart filtration systems reduce maintenance
                    efforts and improve water quality significantly.
                  </p>

                  <p>
                    Automation and IoT-based monitoring are also playing a major
                    role in modern rainwater harvesting. Smart sensors can track
                    water levels, flow rates, and filter conditions in real
                    time. These systems can send alerts for maintenance and help
                    optimize water usage, making the entire setup more efficient
                    and user-friendly.
                  </p>

                  <p>
                    Permeable surfaces and recharge trenches are additional
                    innovations that allow rainwater to naturally seep into the
                    ground, reducing runoff and improving groundwater levels.
                    These solutions are especially useful in urban areas with
                    high concrete coverage.
                  </p>
                  <p>
                    Overall, new technology in rainwater harvesting is making
                    systems more reliable, efficient, and adaptable. By
                    integrating smart monitoring, advanced filtration, and
                    modular designs, modern rainwater harvesting solutions
                    provide a sustainable answer to water scarcity while
                    supporting long-term environmental conservation.
                  </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className='lg:sticky lg:top-28 h-fit'>
                  <div className='overflow-hidden rounded-[32px] shadow-2xl border border-slate-200 group'>
                    <Image
                      src='/new-technology-of-rainwater-harvesting.jpg'
                      alt='New Technology of Harvesting System'
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
                      New Technology of{' '}
                      <Link
                        href={'/'}
                        className='font-semibold text-green-500 hover:text-sky-500'
                      >
                        Rainwater harvesting
                      </Link>{' '}
                      helps conserve water, reduce groundwater dependency, and
                      support eco-friendly urban development.
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

export default New_Technology_Of_Rainwater_Harvesting
