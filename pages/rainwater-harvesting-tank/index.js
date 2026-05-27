import Certification from '@/components/Certification/Certification'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import StaticMetatag from '@/components/Schema/StaticMetatag'
import StaticSchema from '@/components/Schema/StaticSchema'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const RainwaterHarvestingtank = () => {
  const data = {
    title: 'Rainwater Harvesting Tank | Sustainable Water Storage System',
    desc: 'Explore rainwater harvesting tanks for efficient water storage and conservation. Learn about tank types, materials, installation options, and benefits for residential, commercial, and industrial water management.',
    keyword:
      'rainwater harvesting tank, rainwater storage tank, water storage solutions, sustainable water storage, rainwater collection tank, underground rainwater tank, above ground water tank, HDPE rainwater tank, rainwater conservation system, water storage system, rooftop rainwater harvesting tank, commercial rainwater tank, industrial water storage tank, rainwater tank installation, eco-friendly water storage, water conservation tank, rainwater harvesting benefits, rainwater management system',
    canonical:
      'https://www.inrainwaterharvesting.com/rainwater-harvesting-tank',
    ogTitle:
      'Rainwater Harvesting Tank | Water Conservation & Storage Solution',
    ogDescription:
      'Explore rainwater harvesting tanks for efficient water storage and conservation. Learn about tank types, materials, installation options, and benefits for residential, commercial, and industrial water management.',
    ogUrl: 'https://www.inrainwaterharvesting.com/rainwater-harvesting-tank',
    twittertitle:
      'Rainwater Harvesting Tank | Water Conservation & Storage Solution',
    twitterdescription:
      'Explore rainwater harvesting tanks for efficient water storage and conservation. Learn about tank types, materials, installation options, and benefits for residential, commercial, and industrial water management.'
  }
  return (
    <>
      <Navbar />
      <StaticMetatag data={data} />
      <StaticSchema />
      <main>
        <section className='bg-gradient-to-b from-slate-50 to-white pb-20 overflow-hidden'>
          {/* HERO IMAGE */}
          <div className='relative h-[260px] md:h-[350px] overflow-hidden'>
            <Image
              src='/service9.jpg'
              alt='Rainwater Harvesting Tank'
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
                  Rainwater Harvesting Tank
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
                    A rainwater harvesting tank is a vital component of any
                    rainwater harvesting system, designed to store collected
                    rainwater for future use. With growing concerns over water
                    scarcity and rising utility costs, these tanks provide an
                    efficient and sustainable way to conserve water for
                    domestic, commercial, and industrial applications.
                  </p>

                  <p>
                    Rainwater harvesting tanks are available in various sizes,
                    shapes, and materials to suit different requirements. Common
                    materials include plastic (HDPE), fiberglass, concrete, and
                    steel. Plastic tanks are lightweight, durable, and easy to
                    install, making them ideal for residential use. On the other
                    hand, concrete and steel tanks are preferred for large-scale
                    commercial or industrial projects due to their high storage
                    capacity and strength.
                  </p>

                  <p>
                    These tanks can be installed either above ground or
                    underground. Above-ground tanks are easy to maintain and
                    cost-effective, while underground tanks save space and
                    maintain cooler water temperatures, reducing the risk of
                    algae growth. The choice of installation depends on
                    available space, budget, and water storage needs.
                  </p>

                  <p>
                    A well-designed rainwater harvesting tank is usually
                    connected to a filtration system that removes dirt, leaves,
                    and other contaminants before water enters the tank. Many
                    modern tanks also include features such as overflow control,
                    first-flush devices, and level indicators to ensure
                    efficient operation and water quality management.
                  </p>

                  <p>
                    The stored rainwater can be used for various purposes such
                    as gardening, flushing toilets, washing vehicles, and even
                    for drinking after proper purification. By using harvested
                    rainwater, users can significantly reduce their dependence
                    on municipal water supplies and groundwater sources.
                  </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className='lg:sticky lg:top-28 h-fit'>
                  <div className='overflow-hidden rounded-[32px] shadow-2xl border border-slate-200 group'>
                    <Image
                      src='/rainwater-harvesting-system.jpg'
                      alt='Rainwater Harvesting Tank'
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

export default RainwaterHarvestingtank
