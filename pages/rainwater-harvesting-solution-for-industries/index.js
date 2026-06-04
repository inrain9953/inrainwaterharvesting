import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Certification from '@/components/Certification/Certification'
import Navbar from '@/components/Navbar/Navbar'
import StaticMetatag from '@/components/Schema/StaticMetatag'
import StaticSchema from '@/components/Schema/StaticSchema'

const RainwaterHarvestingSolutionForIndustries = () => {
  const data = {
    title:
      'Rainwater Harvesting Solution for Industries | Sustainable Industrial Water Management',
    desc: 'Discover rainwater harvesting solutions for industries to reduce water costs, improve water conservation, manage stormwater, and support sustainable industrial water management with customized systems and expert support.',
    keyword:
      'rainwater harvesting solution for industries, industrial rainwater harvesting, industrial water management system, rainwater harvesting for factories, stormwater management for industries, rooftop rainwater harvesting for industries, industrial water conservation, groundwater recharge system, industrial rainwater collection system, sustainable water management, water recycling and reuse system, industrial stormwater management, rainwater harvesting company, commercial rainwater harvesting, eco-friendly water conservation, industrial water saving solutions, rainwater harvesting system supplier, industrial water sustainability',
    canonical:
      'https://www.inrainwaterharvesting.com/rainwater-harvesting-solution-for-industries',
    ogTitle:
      'Rainwater Harvesting Solution for Industries | Sustainable Industrial Water Management',
    ogDescription:
      'Discover rainwater harvesting solutions for industries to reduce water costs, improve water conservation, manage stormwater, and support sustainable industrial water management with customized systems and expert support.',
    ogUrl:
      'https://www.inrainwaterharvesting.com/rainwater-harvesting-solution-for-industries',
    twittertitle:
      'Rainwater Harvesting Solution for Industries | Sustainable Industrial Water Management',
    twitterdescription:
      'Discover rainwater harvesting solutions for industries to reduce water costs, improve water conservation, manage stormwater, and support sustainable industrial water management with customized systems and expert support.'
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
              src='/service2.jpg'
              alt='Rainwater Harvesting Solution for Industries'
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
                  Rainwater Harvesting Solution for Industries
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
                      In today's world, industries face the pressing need to
                      conserve water resources and reduce their dependence on
                      freshwater sources. Rainwater harvesting solutions for
                      industries, achieving water conservation goals, cost
                      savings, environmental benefits, and improved water
                      management practices. Solutions include rooftop
                      harvesting, surface runoff collection, stormwater
                      management, water recycling, and reuse, education,
                      monitoring, maintenance, and collaboration with experts.
                      These comprehensive approaches optimize water management
                      systems, offering tangible benefits.
                    </p>

                    <ul className='space-y-3 mt-5'>
                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-3'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Rooftop Rainwater Harvesting:
                          </span>{' '}
                          Install rainwater collection systems on industrial
                          rooftops, direct rainwater through gutters, and use
                          filtering and treatment systems to maintain water
                          quality.
                        </p>
                      </li>

                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-2'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Surface Runoff Harvesting:
                          </span>{' '}
                          Catchment areas near industrial sites collect
                          rainwater, directing it to reservoirs or recharge pits
                          for irrigation, cooling, and industrial processes.
                        </p>
                      </li>

                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-3'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Stormwater Management:
                          </span>{' '}
                          Sustainable stormwater management using rainwater
                          harvesting allows industries to build retention ponds
                          and infiltration basins for various industrial
                          applications.
                        </p>
                      </li>

                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-2'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Water Recycling and Reuse:
                          </span>{' '}
                          Rainwater harvesting solutions for industries,
                          recycling, and reuse systems optimize industrial water
                          conservation, purifying rainwater and wastewater,
                          reducing freshwater demand and promoting efficient
                          processes.
                        </p>
                      </li>

                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-3'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Education and Awareness:
                          </span>{' '}
                          Training programmes and workshops promote employee
                          education on rainwater harvesting, conserving water,
                          and raising awareness for active participation in
                          water-saving initiatives.
                        </p>
                      </li>

                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-3'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Monitoring and Maintenance:
                          </span>{' '}
                          Regular monitoring of{' '}
                          <Link
                            href={'/rainwater-harvesting-system'}
                            className='font-semibold text-green-500 hover:text-sky-500'
                          >
                            Rainwater Harvesting System
                          </Link>{' '}
                          is crucial for proper functioning, ensuring longevity
                          and efficiency through filter cleaning, tank
                          inspection, and component repair.
                        </p>
                      </li>
                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-3'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Collaboration with Experts:
                          </span>{' '}
                          Collaborating with water management experts,
                          consultants, and engineers enhances efficient
                          rainwater harvesting systems, maximizing effectiveness
                          by leveraging their expertise.
                        </p>
                      </li>
                    </ul>

                    <p className='text-gray-700 text-[15px] mt-5 md:text-md leading-7 text-justify'>
                      We at InRain Constructions Pvt. Ltd. provide rainwater
                      harvesting solutions for industries, promoting water
                      conservation, cost savings, and sustainable management
                      practices. These solutions include rooftop harvesting,
                      surface runoff collection, stormwater management, water
                      recycling, and education initiatives. Regular monitoring
                      and collaboration with our experts can help industries
                      optimize rainwater harvesting systems for maximum
                      effectiveness, contributing to water conservation efforts
                      and promoting a greener, more sustainable future.
                    </p>
                  </div>

                  {/* BENEFITS */}
                  <div className='bg-gradient-to-br from-sky-50 to-white border border-sky-100 rounded-[32px] p-5 md:p-10 shadow-lg'>
                    <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-3'>
                      Benefits of Rainwater Harvesting Solution for Industries
                    </h2>

                    <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                      Rainwater Harvesting Solution for Industries offers
                      numerous advantages, including reduced water bills,
                      decreased strain on municipal water supplies, and
                      increased self-sufficiency in water usage. Additionally,
                      it helps alleviate stormwater runoff, reduces soil
                      erosion, and supports groundwater recharge.
                    </p>
                  </div>

                  {/* CHOOSING SUPPLIER */}
                  <div className='bg-white border border-slate-200 rounded-[32px] p-6 md:p-10 shadow-lg'>
                    <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-3'>
                      Why Choose Us?
                    </h2>

                    <ul className='space-y-3'>
                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-3'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Expertise:
                          </span>{' '}
                          With years of experience in the field, our new
                          generation of rainwater harvesting skilled
                          professionals have in-depth knowledge of rainwater
                          harvesting techniques and regulations. We stay updated
                          with the latest industry trends to deliver optimal
                          solutions.
                        </p>
                      </li>

                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-2'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Customized Solutions:
                          </span>{' '}
                          We are aware that each project is distinctive. Our
                          experts conduct thorough site assessments and design
                          personalized rainwater harvesting systems that
                          maximize water collection and minimize waste.
                        </p>
                      </li>

                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-3'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Quality Assurance:
                          </span>{' '}
                          We prioritize quality at every step. From selecting
                          premium-grade materials to using advanced filtration
                          systems, we ensure that our systems are durable,
                          efficient, and comply with the highest standards.
                        </p>
                      </li>

                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-2'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Eco-Friendly Approach:
                          </span>{' '}
                          Our new generation of rainwater harvesting systems
                          promote sustainability and reduce the strain on
                          conventional water sources. Using rainwater, we help
                          conserve precious groundwater and contribute to a
                          greener future.
                        </p>
                      </li>

                      <li className='flex items-start gap-4'>
                        <div className='min-w-3 h-3 rounded-full bg-green-600 mt-3'></div>
                        <p className='text-gray-700 leading-7'>
                          <span className='font-semibold text-slate-900'>
                            Reliable Support:
                          </span>{' '}
                          Our commitment to customer satisfaction extends beyond
                          installation. We provide ongoing maintenance, repairs,
                          and technical support to ensure the long-term
                          performance of your rainwater harvesting system.
                        </p>
                      </li>
                    </ul>

                    <p className='text-gray-700 text-[15px] mt-5 md:text-md leading-7 text-justify'>
                      Join us and be part of the solution to water scarcity.
                      Together, let's create a sustainable future. Contact us
                      today to learn more about our new generation of rainwater
                      harvesting services and start your journey towards a
                      water-wise world.
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
                      Modular Rainwater Harvesting Solutions
                    </h3>

                    <p className='text-gray-700 leading-7'>
                      <Link
                        href={'/modular-rainwater-harvesting-system'}
                        className='font-semibold text-green-500 hover:text-sky-500'
                      >
                        Modular Rainwater Harvesting
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

export default RainwaterHarvestingSolutionForIndustries
