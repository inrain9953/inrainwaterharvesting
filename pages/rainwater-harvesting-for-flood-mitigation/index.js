import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Certification from '@/components/Certification/Certification'
import Navbar from '@/components/Navbar/Navbar'
import StaticMetatag from '@/components/Schema/StaticMetatag'
import StaticSchema from '@/components/Schema/StaticSchema'

const RWHForFloodMitigation = () => {
  const data = {
    title:
      'Rainwater Harvesting for Flood Mitigation | Sustainable Flood Control Solutions',
    desc: 'Explore rainwater harvesting for flood mitigation to reduce stormwater runoff, prevent urban flooding, support groundwater recharge, and promote sustainable water management with advanced rainwater harvesting solutions.',
    keyword:
      'rainwater harvesting for flood mitigation, flood mitigation rainwater harvesting, stormwater management system, rainwater harvesting system, urban flood control solutions, sustainable flood management, stormwater runoff reduction, groundwater recharge system, permeable pavement solutions, rainwater collection system, flood prevention system, eco-friendly water conservation, urban stormwater management, sustainable water management, rainwater harvesting company, water conservation solutions, green infrastructure for flood mitigation, rainwater harvesting for industries',
    canonical:
      'https://www.inrainwaterharvesting.com/rainwater-harvesting-for-flood-mitigation',
    ogTitle:
      'Rainwater Harvesting for Flood Mitigation | Sustainable Flood Control Solutions',
    ogDescription:
      'Explore rainwater harvesting for flood mitigation to reduce stormwater runoff, prevent urban flooding, support groundwater recharge, and promote sustainable water management with advanced rainwater harvesting solutions.',
    ogUrl:
      'https://www.inrainwaterharvesting.com/rainwater-harvesting-for-flood-mitigation',
    twittertitle:
      'Rainwater Harvesting for Flood Mitigation | Sustainable Flood Control Solutions',
    twitterdescription:
      'Explore rainwater harvesting for flood mitigation to reduce stormwater runoff, prevent urban flooding, support groundwater recharge, and promote sustainable water management with advanced rainwater harvesting solutions.'
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
              src='/service12.jpg'
              alt='Rainwater Harvesting for Flood Mitigation'
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
                  Sustainable Water Management
                </span>

                <h1 className='text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg'>
                  Rainwater Harvesting for Flood Mitigation
                </h1>
              </div>
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className='max-w-7xl mx-auto px-2 md:px-8 lg:px-5 -mt-12 relative z-10'>
            <div className='bg-white rounded-[36px] shadow-2xl border border-slate-200 p-6 md:p-10 lg:p-14'>
              <div className='grid lg:grid-cols-[1.3fr_0.7fr] gap-10'>
                {/* LEFT CONTENT */}
                <div className='space-y-4'>
                  {/* INTRO */}
                  <div className='bg-white border border-slate-200 rounded-[32px] p-6 md:p-10 shadow-lg'>
                    <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                      Rainwater harvesting for flood mitigation is an effective
                      strategy for mitigating the devastating impact of floods.
                      Collecting and utilizing rainwater can reduce excessive
                      runoff, thus alleviating the burden on drainage systems
                      during heavy rainfall events. This article explores the
                      benefits of rainwater harvesting and highlights the
                      importance of its implementation for flood mitigation.
                    </p>
                  </div>

                  {/* BENEFITS */}
                  <div className='bg-gradient-to-br from-sky-50 to-white border border-sky-100 rounded-[32px] p-5 md:p-10 shadow-lg'>
                    <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-3'>
                      Benefits of Rainwater Harvesting
                    </h2>

                    <ul className='space-y-3 mt-5'>
                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-3'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Reduction in Storm water Runoff:
                          </span>{' '}
                          Rainwater harvesting reduces storm water runoff,
                          allowing for irrigation, domestic use, and groundwater
                          recharge without overwhelming drainage systems or
                          causing floods.
                        </p>
                      </li>

                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-2'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Sustainable Water Management:
                          </span>{' '}
                          Rainwater harvesting for flood mitigation promotes
                          sustainable water management practices by reducing
                          dependence on limited groundwater and surface
                          supplies, ensuring reliable supply during droughts,
                          and preserving natural ecosystems by minimizing
                          extraction from vulnerable sources.
                        </p>
                      </li>

                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-3'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Infrastructure Development:
                          </span>{' '}
                          Governments can incentivize rainwater harvesting
                          through tax benefits or subsidies, promoting practices
                          among individuals and communities by encouraging
                          rainwater collection systems.
                        </p>
                      </li>

                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-2'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Building Regulations:
                          </span>{' '}
                          Integrating rainwater harvesting features into
                          building regulations, such as green roofs, permeable
                          pavements, and rain gardens, promotes natural
                          infiltration and reduces stormwater runoff, ensuring
                          new construction contributes to flood mitigation
                          efforts.
                        </p>
                      </li>

                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-3'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Urban Design:
                          </span>{' '}
                          Urban planning should incorporate{' '}
                          <Link
                            href={'/rainwater-harvesting-system'}
                            className='font-semibold text-green-500 hover:text-sky-500'
                          >
                            rainwater harvesting system
                          </Link>{' '}
                          as a standard feature. Integrating catchment areas,
                          storage facilities, and distribution networks within
                          urban landscapes can efficiently utilize rainwater and
                          contribute to flood reduction.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className='bg-gradient-to-r from-green-600 to-sky-600 rounded-[32px] p-6 md:p-10 text-white shadow-2xl'>
                    <h2 className='text-2xl md:text-3xl font-bold mb-3'>
                      Revolutionizing Flood Mitigation with Innovative Rainwater
                      Harvesting Solutions
                    </h2>

                    <p className='text-white text-[15px] md:text-md leading-7 text-justify'>
                      InRain Constructions Pvt. Ltd., the vanguard of rainwater
                      harvesting for flood mitigation, offers innovative
                      solutions for sustainable flood mitigation. With expertise
                      in building resilient communities, we revolutionize urban
                      landscapes, preserve water resources, and pave the way
                      towards a safer, greener future. Trust InRain for
                      exceptional rainwater harvesting solutions.
                    </p>
                  </div>

                  {/* BEST CHOICE */}
                  <div className='bg-gradient-to-r from-sky-600 to-cyan-600 rounded-[32px] p-6 md:p-10 text-white shadow-2xl'>
                    <h2 className='text-2xl md:text-3xl font-bold mb-3'>
                      Best Choice of Rainwater Harvesting Solution for
                      Industries
                    </h2>

                    <p className='leading-7 text-slate-100 text-[16px] md:text-md'>
                      InRain Constructions Pvt. Ltd. is the best Rainwater
                      Harvesting Solution for Industries, providing top-quality
                      products and services. With extensive experience and
                      expertise, we offer customized solutions, durable tanks,
                      efficient filters, and reliable pumps. Trust InRain for
                      all your rainwater harvesting needs.
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className='lg:sticky lg:top-28 h-fit space-y-5'>
                  {/* IMAGE CARD */}
                  <div className='overflow-hidden rounded-[36px] shadow-2xl border border-slate-200 group bg-white'>
                    <Image
                      src='/new-generation-of-rainwater-harvesting.jpg'
                      alt='New Generation of Rainwater Harvesting'
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
                      Rainwater Harvesting Solutions
                    </h3>

                    <p className='text-gray-700 leading-7'>
                      <Link
                        href={'/'}
                        className='font-semibold text-green-500 hover:text-sky-500'
                      >
                        Rainwater Harvesting
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
        </section>

        <Certification />
      </main>
    </>
  )
}

export default RWHForFloodMitigation
