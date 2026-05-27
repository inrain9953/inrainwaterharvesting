import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Certification from '@/components/Certification/Certification'
import StaticMetatag from '@/components/Schema/StaticMetatag'
import StaticSchema from '@/components/Schema/StaticSchema'
import { CityData } from '@/components/constant'
import LocationCityIcon from '@mui/icons-material/LocationCity'

const Business_Network = () => {
  const data = {
    title:
      'Business Network | PAN India Rainwater Harvesting Solutions by InRain Construction',
    desc: 'Explore InRain Construction Pvt. Ltd.’s PAN India business network delivering rainwater harvesting, groundwater recharge, modular storage tanks, and sustainable water conservation solutions with 1000+ completed projects across residential, commercial, industrial, and government sectors.',
    keyword:
      'business network rainwater harvesting, PAN India rainwater harvesting, rainwater harvesting company India, groundwater recharge solutions, modular rainwater harvesting system, rainwater harvesting projects India, water conservation solutions, rooftop rainwater harvesting, sustainable water management, industrial rainwater harvesting, commercial rainwater harvesting, residential rainwater harvesting, government rainwater harvesting projects, rainwater harvesting contractor India, modular storage tank supplier, groundwater recharge system India, water management company, InRain Construction Pvt Ltd',
    canonical: 'https://www.inrainwaterharvesting.com/business-network',
    ogTitle:
      'Business Network | PAN India Rainwater Harvesting Solutions by InRain Construction',
    ogDescription:
      'Explore InRain Construction Pvt. Ltd.’s PAN India business network delivering rainwater harvesting, groundwater recharge, modular storage tanks, and sustainable water conservation solutions with 1000+ completed projects across residential, commercial, industrial, and government sectors.',
    ogUrl: 'https://www.inrainwaterharvesting.com/business-network',
    twittertitle:
      'Business Network | PAN India Rainwater Harvesting Solutions by InRain Construction',
    twitterdescription:
      'Explore InRain Construction Pvt. Ltd.’s PAN India business network delivering rainwater harvesting, groundwater recharge, modular storage tanks, and sustainable water conservation solutions with 1000+ completed projects across residential, commercial, industrial, and government sectors.'
  }
  return (
    <>
      <StaticMetatag data={data} />
      <StaticSchema />
      <Navbar />
      <main className='bg-gradient-to-b from-sky-50 to-white'>
        {/* HERO SECTION */}
        <section className='relative'>
          <div className='relative h-[250px] md:h-[350px] overflow-hidden'>
            <Image
              src='/service11.jpg'
              alt='Business Network'
              width={1920}
              height={700}
              className='w-full h-full object-cover'
            />

            <div className='absolute inset-0 bg-black/50' />

            <div className='absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-white'>
              <span className='bg-green-500/20 border border-green-300 text-green-100 px-5 py-1.5 rounded-full text-sm md:text-base font-medium backdrop-blur-sm'>
                PAN India Presence
              </span>

              <h1 className='text-2xl md:text-5xl font-extrabold mt-2 leading-tight'>
                Business Network
              </h1>

              <p className='text-md md:text-2xl mt-1 font-light max-w-3xl'>
                Strong PAN India Presence in Rainwater Harvesting Solutions
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className='max-w-7xl mx-auto px-5 md:px-8 py-10'>
          <div className='grid lg:grid-cols-[1.25fr_0.75fr] gap-12'>
            {/* LEFT CONTENT */}
            <div className='space-y-8'>
              {/* Intro */}
              <div className='bg-white rounded-[32px] shadow-lg border border-slate-200 p-8 md:p-10'>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6'>
                  Strong PAN India Presence in Rainwater Harvesting Solutions
                </h2>

                <div className='space-y-3 text-gray-700 leading-7 text-justify'>
                  <p>
                    At InRain Construction Pvt. Ltd., we have established a
                    strong business network across PAN India, delivering
                    innovative and sustainable rainwater harvesting and
                    groundwater recharge solutions for residential, commercial,
                    industrial, and government projects. With years of expertise
                    and a commitment to water conservation, we have successfully
                    executed projects in multiple cities and states, helping
                    organizations manage water resources efficiently.
                  </p>

                  <p>
                    Our extensive network enables us to serve clients with
                    high-quality rainwater harvesting systems, modular storage
                    tanks, groundwater recharge systems, rooftop rainwater
                    harvesting, filtration units, and customized water
                    conservation solutions tailored to project requirements.
                  </p>
                </div>
              </div>

              {/* Nationwide Network */}
              <div className='bg-white rounded-[32px] shadow-lg border border-slate-200 p-8 md:p-10'>
                <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                  Our Nationwide Business Network
                </h2>

                <p className='text-gray-700 leading-8 mb-8 text-justify'>
                  We proudly operate across major metropolitan cities,
                  industrial zones, smart cities, and developing regions in
                  India. Our business network spans across:
                </p>

                <div className='grid md:grid-cols-4 grid-cols-2 gap-6'>
                  {CityData.map(city => (
                    <Link
                      href={`/rainwater-harvesting-system/${city.slug}`}
                      className='bg-sky-50 border border-sky-100 hover:bg-green-100 hover:border-green-500  rounded-3xl p-2 flex justify-start items-center gap-2'
                    >
                      <div>
                        <LocationCityIcon fontSize='small' />
                      </div>
                      <div>
                        <h3 className='text-xs font-semibold text-sky-700'>
                          {city.city}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Completed Projects */}
              <div className='bg-white rounded-[32px] shadow-lg border border-slate-200 p-8 md:p-10'>
                <h2 className='md:text-3xl text-xl font-bold text-gray-900 mb-3'>
                  Successfully Completed Projects Across India
                </h2>

                <p className='text-gray-700 leading-8 mb-5 text-justify'>
                  Our portfolio includes 4000+ successfully completed rainwater
                  harvesting and groundwater recharge projects across diverse
                  sectors, including:
                </p>

                <div className='grid md:grid-cols-2 gap-6'>
                  {[
                    {
                      title: 'Industrial Projects',
                      desc: 'We have executed advanced water conservation systems for manufacturing plants, warehouses, industrial parks, and processing units to optimize water management and improve sustainability.'
                    },
                    {
                      title: 'Commercial Projects',
                      desc: 'From office complexes and IT parks to malls, hotels, and institutional campuses, we provide scalable rainwater harvesting solutions designed for high-capacity water management.'
                    },
                    {
                      title: 'Residential Projects',
                      desc: 'We support housing societies, villas, apartments, and gated communities with customized rooftop rainwater harvesting and groundwater recharge systems.'
                    },
                    {
                      title: 'Government & Infrastructure Projects',
                      desc: 'Our expertise extends to government institutions, smart city projects, public infrastructure, highways, schools, hospitals, and municipal developments focused on sustainable water conservation.'
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='rounded-[28px] border border-slate-200 bg-slate-50 p-6 hover:shadow-xl transition duration-300'
                    >
                      <h3 className='text-xl font-bold text-gray-900 mb-3'>
                        {item.title}
                      </h3>

                      <p className='text-gray-700 leading-7'>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sustainability */}
              <div className='bg-gradient-to-r from-green-700 to-sky-700 rounded-[36px] p-8 md:p-12 text-white shadow-2xl'>
                <h2 className='text-xl md:text-3xl font-bold mb-4'>
                  Our Commitment to Sustainable Water Management
                </h2>

                <div className='space-y-3 leading-7 text-white/90 text-justify'>
                  <p>
                    At InRain Construction Pvt. Ltd., our mission is to create a
                    water-secure future through innovative and efficient
                    rainwater harvesting solutions. Our nationwide presence and
                    successfully completed projects reflect our dedication to
                    quality, sustainability, and long-term environmental impact.
                  </p>

                  <p>
                    Whether your project is in a metro city or a remote
                    location, our strong business network ensures seamless
                    support, expert consultation, and reliable implementation
                    anywhere in India.
                  </p>

                  <p className='font-semibold text-lg text-white'>
                    Partner with us to build a sustainable future through
                    efficient water conservation and rainwater harvesting
                    solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className='lg:sticky lg:top-34 h-fit'>
              <div className='overflow-hidden rounded-[36px] shadow-2xl border border-slate-200'>
                <Image
                  src='/rainwater-harvesting-tank.jpg'
                  alt='Business Network'
                  width={700}
                  height={900}
                  className='w-full object-cover'
                />
              </div>

              {/* Why Choose */}
              <div className='bg-white rounded-[32px] shadow-lg border border-slate-200 p-3 md:p-5 mt-6'>
                <h2 className='md:text-2xl text-xl font-bold text-gray-900 mb-5'>
                  Why Our Business Network Stands Strong
                </h2>

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                  {[
                    'PAN India Project Execution Capability',
                    '4000+ Successfully Completed Sites',
                    'Customized Water Conservation Solutions',
                    'Advanced Modular Rainwater Harvesting Systems',
                    'Experienced Technical & Installation Team',
                    'Timely Project Delivery & Support',
                    'Trusted by Government, Industrial & Corporate Clients'
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='bg-gradient-to-r from-sky-50 to-green-50 border border-slate-200 rounded-3xl p-3 text-sm leading-6 font-semibold text-gray-800 shadow-sm hover:shadow-lg transition'
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
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
        </section>

        <Certification />
      </main>
      <Footer />
    </>
  )
}

export default Business_Network
