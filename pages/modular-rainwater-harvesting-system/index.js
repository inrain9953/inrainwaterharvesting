import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Certification from '@/components/Certification/Certification'
import Navbar from '@/components/Navbar/Navbar'
import StaticMetatag from '@/components/Schema/StaticMetatag'
import StaticSchema from '@/components/Schema/StaticSchema'

const ModularRainwaterHarvestingSystem = () => {
  const data = {
    title:
      'Modular Rainwater Harvesting System | Smart & Sustainable Water Management',
    desc: 'Discover modular rainwater harvesting systems for efficient water collection, storage, and reuse. Explore scalable, eco-friendly, and cost-effective solutions for residential, commercial, and industrial water conservation.',
    keyword:
      'modular rainwater harvesting system, modular rainwater harvesting, rainwater harvesting system, modular water storage system, rainwater conservation system, sustainable water management, rooftop rainwater harvesting, underground rainwater storage, rainwater filtration system, modular tank system, groundwater recharge system, eco-friendly water solution, commercial rainwater harvesting, industrial rainwater harvesting, residential rainwater harvesting, prefabricated rainwater harvesting system, water saving technology, stormwater management, rainwater harvesting service provider',
    canonical:
      'https://www.inrainwaterharvesting.com/modular-rainwater-harvesting-system',
    ogTitle:
      'Modular Rainwater Harvesting System | Smart & Sustainable Water Management',
    ogDescription:
      'Discover modular rainwater harvesting systems for efficient water collection, storage, and reuse. Explore scalable, eco-friendly, and cost-effective solutions for residential, commercial, and industrial water conservation.',
    ogUrl:
      'https://www.inrainwaterharvesting.com/modular-rainwater-harvesting-system',
    twittertitle:
      'Modular Rainwater Harvesting System | Smart & Sustainable Water Management',
    twitterdescription:
      'Discover modular rainwater harvesting systems for efficient water collection, storage, and reuse. Explore scalable, eco-friendly, and cost-effective solutions for residential, commercial, and industrial water conservation.'
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
              src='/service8.jpg'
              alt='Modular Rainwater Harvesting System'
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
                  Eco-Friendly
                </span>

                <h1 className='text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg'>
                  Modular Rainwater Harvesting System
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
                    Water scarcity is a global issue that demands innovative
                    solutions to ensure the sustainable management of this
                    precious resource. In recent years, modular rainwater
                    harvesting technology has emerged as a groundbreaking
                    approach to tackle water scarcity and promote efficient
                    water management practices. This technology combines the
                    principles of modularity, efficiency, and adaptability to
                    revolutionize the way we collect, store, and utilize
                    rainwater. In this article, we will explore the concept of
                    modular rainwater harvesting technology and its
                    transformative impact on water management.
                  </p>

                  <p>
                    The modular{' '}
                    <Link
                      className='text-green-500 font-semibold hover:text-sky-500'
                      href={'/rainwater-harvesting-system'}
                    >
                      Rainwater Harvesting System
                    </Link>{' '}
                    in Delhi is based on the idea of utilizing pre-fabricated
                    components that can be easily assembled and adapted to
                    various settings and structures.
                  </p>

                  <p>
                    These components include rainwater collection surfaces,
                    storage units, filtration systems, and distribution
                    networks. The modularity of these components allows for
                    flexibility and customization, making the technology
                    suitable for diverse applications, ranging from residential
                    homes to commercial complexes, schools, and even entire
                    communities.
                  </p>

                  <p>
                    At the core of modular rainwater harvesting Sis the
                    collection of rainwater from rooftops, paved surfaces, or
                    other catchment areas. Rainwater flows through gutters and
                    downpipes, which are connected to storage tanks or modular
                    units specifically designed to efficiently capture and store
                    the rainwater. These storage units can range from small,
                    compact tanks to larger, underground cisterns, depending on
                    the requirements and available space.
                  </p>

                  <p>
                    The modular design of rainwater storage units offers
                    numerous advantages. Firstly, it allows for easy
                    scalability, enabling the system to be expanded as the need
                    for water storage grows. Additional storage modules can be
                    seamlessly integrated into the existing setup, accommodating
                    increased demand without the need for extensive
                    modifications. This scalability makes modular rainwater
                    harvesting technology suitable for both small-scale
                    residential applications and large-scale commercial or
                    institutional projects.
                  </p>
                  <p>
                    Efficiency is another key benefit of modular rainwater
                    harvesting technology. The pre-fabricated components are
                    engineered to optimize water flow, minimize losses, and
                    ensure maximum water collection. In addition, advanced
                    filtration systems are integrated into the technology to
                    remove debris, sediment, and contaminants from the collected
                    rainwater. These filtration units can range from simple mesh
                    filters to advanced multi-stage filtration systems,
                    depending on the desired water quality for specific uses.
                  </p>
                  <p>
                    The versatility of modular rainwater harvesting technology
                    is a significant advantage, as it allows for the
                    customization of the system to meet specific needs.
                    Rainwater can be used for a variety of purposes, including
                    landscape irrigation, toilet flushing, laundry, and even
                    potable water supply with appropriate treatment. Modular
                    technology enables the integration of tailored filtration
                    and purification units, ensuring that the harvested
                    rainwater meets the required quality standards for each
                    specific application.
                  </p>
                  <p>
                    <Link
                      href='/'
                      className='font-semibold text-sky-600 hover:underline'
                    >
                      Modular Rainwater Harvesting System
                    </Link>{' '}
                    Service Provider is also highly adaptable to different
                    environmental conditions and building structures. The
                    components can be easily installed on existing rooftops or
                    integrated into new construction projects. This adaptability
                    eliminates the need for major alterations to the building
                    design, making it a cost-effective solution for retrofitting
                    rainwater harvesting systems into existing structures.
                    Additionally, the modular components can be disassembled and
                    reinstalled if necessary, allowing for flexibility in case
                    of building renovations or relocation.
                  </p>
                  <p>
                    The environmental benefits of modular rainwater harvesting
                    technology are significant. By capturing and utilizing
                    rainwater, this technology helps to reduce the strain on
                    traditional water sources, such as groundwater and municipal
                    supplies. It also mitigates stormwater runoff, which can
                    contribute to flooding and water pollution. Furthermore, the
                    use of harvested rainwater for non-potable purposes reduces
                    the energy-intensive treatment required for freshwater
                    sources, leading to a lower carbon footprint and a more
                    sustainable water supply.
                  </p>
                  <p>
                    From an economic standpoint, modular rainwater harvesting
                    technology offers several advantages. By reducing reliance
                    on external water sources, it helps to lower water bills and
                    decrease the demand for costly infrastructure expansion.
                  </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className='lg:sticky lg:top-28 h-fit'>
                  <div className='overflow-hidden rounded-[32px] shadow-2xl border border-slate-200 group'>
                    <Image
                      src='/modular-rainwater-harvesting.jpg'
                      alt='Modular Rainwater Harvesting'
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
                      Modular{' '}
                      <Link
                        href='/rainwater-harvesting-tank'
                        className='text-green-500 font-semibold hover:text-sky-500'
                      >
                        Rainwater Harvesting Tanks
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
    </>
  )
}

export default ModularRainwaterHarvestingSystem
