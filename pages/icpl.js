import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@mui/material'
import Hero5 from '@/components/Hero/Hero5'
import Hero6 from '@/components/Hero/Hero6'
import Certification from '@/components/Certification/Certification'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import SiteGallery from '@/components/Site/SiteGallery'
import GoogleForm from '@/components/Contact/GoogleForm'
import StaticMetatag from '@/components/Schema/StaticMetatag'
import StaticSchema from '@/components/Schema/StaticSchema'

const ICPL = () => {
  const data = {
    title:
      'Rainwater Harvesting System in India | InRain Construction Pvt. Ltd.',
    desc: 'Looking for a reliable Rainwater Harvesting System in India? InRain Construction Private Limited provide efficient solutions for sustainable water management and Modular Rainwater Harvesting System in India.',
    keyword:
      'Rainwater Harvesting System in India, Modular Rainwater Harvesting System, Polymer Type Rainwater Harvesting System in India, Storm water Management in India, Rainwater Harvesting Service Provider in India, Rainwater Harvesting Company in India',
    canonical: 'https://www.inrainwaterharvesting.com/icpl',
    ogTitle: 'Rainwater Harvesting System in India | InRain Construction Pvt. Ltd.',
    ogDescription:
      'Looking for a reliable Rainwater Harvesting System in India? InRain Construction Private Limited provide efficient solutions for sustainable water management and Modular Rainwater Harvesting System in India',
    ogUrl: 'https://www.inrainwaterharvesting.com/icpl',
    twittertitle: 'Rainwater Harvesting System in India | InRain Construction Pvt. Ltd.',
    twitterdescription:
      'Looking for a reliable Rainwater Harvesting System in India? InRain Construction Private Limited provide efficient solutions for sustainable water management and Modular Rainwater Harvesting System in India'
  }
  return (
    <>
      <StaticMetatag data={data} />
      <StaticSchema />
      <Navbar />
      <section>
        <div className=''>
          <Image
            className='w-full h-full object-cover'
            src='/banner3.jpg'
            alt='hero1'
            width={1300}
            height={500}
          />
        </div>

        {/* Content 1 */}
        <div className='bg-gradient-to-br from-sky-50 to-white py-8 px-4 md:px-8 lg:px-16'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-start'>
              {/* LEFT CONTENT */}
              <div>
                <span className='inline-flex items-center rounded-full bg-sky-100 text-sky-700 px-4 py-2 text-sm font-semibold mb-5'>
                  InRain® Construction Pvt. Ltd. (ICPL)
                </span>

                <h1 className='text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-3'>
                  Rainwater Harvesting System in India
                </h1>

                <p className='text-gray-600 leading-7 text-justify text-base'>
                  InRain Construction Private Limited is a leading Rainwater
                  Harvesting System in India specializing in advanced rainwater
                  harvesting solutions. With a strong track record of success,
                  we have executed over{' '}
                  <span className='font-semibold text-sky-700'>
                    4000+ Rainwater Harvesting (RWH) Units
                  </span>{' '}
                  for esteemed clients such as HUL, PepsiCo, Sobha Developers,
                  CPWD, PWD, Smart Cities, and Supreme Court Judges Bungalows,
                  among others. Our commitment to innovation, quality, and
                  sustainability has made us a trusted partner in the industry.
                </p>

                <p className='text-gray-600 leading-7 text-justify text-base mt-3'>
                  At InRain Construction, we offer Modular Rainwater Harvesting
                  System Service Provider that help our clients optimize water
                  resources and promote environmental conservation. A Rainwater
                  Harvesting System collects rooftop rainwater, stores it
                  safely, and recharges groundwater, providing a cost-effective,
                  eco-friendly water source for homes, industries, and
                  commercial properties year-round.
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
              <div className='grid grid-cols-1 sm:grid-cols- gap-5'>
                <GoogleForm />

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
      </section>
      <section className='pb-10'>
        <div className='bg-gradient-to-b from-slate-50 to-white'>
          <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-10'>
            <div className=''>
              {/* LEFT CONTENT */}
              <div>
                <h2 className='text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4'>
                  Rainwater Harvesting System –
                  <span className='text-sky-600'> Our Advanced Technology</span>
                </h2>

                <div className='space-y-3 text-gray-600 leading-7 text-base md:text-md'>
                  <p>
                    At <span className='font-semibold'>InRain®</span>, We are
                    Engaged In Making
                    <span className='font-semibold'>
                      {' '}
                      Rainwater Harvesting (RWH) Pits in India
                    </span>{' '}
                    Based on the technology adopted from Germany. It is indeed
                    entirely different from conventional rain water system.
                    InRain® is Fully equipped with In house Make and
                    Manufacturing process, ensuring its best in class – quality.
                    We share our contribution to Nation being proud partner of
                    “Make in India Movement”
                  </p>
                </div>

                {/* Trust Points */}
                <div className='grid grid-cols-2 gap-4 mt-5'>
                  <div className='bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition'>
                    <h3 className='text-2xl font-bold text-sky-600'>
                      German Tech
                    </h3>
                    <p className='text-gray-500 text-sm'>Advanced Technology</p>
                  </div>

                  <div className='bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition'>
                    <h3 className='text-2xl font-bold text-green-600'>
                      In-House
                    </h3>
                    <p className='text-gray-500 text-sm'>
                      Manufacturing Process
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE LAYOUT */}
              <div className='space-y-2 mt-5'>
                {/* TOP - 2 IMAGES */}
                <div className='md:grid md:grid-cols-2 flex flex-col gap-2'>
                  <div className='overflow-hidden rounded-[15px] shadow-lg shadow-sky-200 group'>
                    <Image
                      src='/Services/main1.jpg'
                      alt='Rainwater Harvesting'
                      width={500}
                      height={350}
                      className='w-full h-full object-cover transition duration-500 group-hover:scale-102'
                    />
                  </div>

                  <div className='overflow-hidden rounded-[15px] shadow-lg shadow-sky-200 group'>
                    <Image
                      src='/Services/main2.jpeg'
                      alt='Rainwater Technology'
                      width={500}
                      height={350}
                      className='w-full h-full object-cover transition duration-500 group-hover:scale-102'
                    />
                  </div>
                </div>

                {/* BOTTOM - 3 IMAGES */}
                <div className='md:grid md:grid-cols-3 flex flex-col gap-2'>
                  <div className='overflow-hidden rounded-[15px] shadow-lg shadow-sky-200 group'>
                    <Image
                      src='/Services/main3.jpg'
                      alt='Harvesting Site'
                      width={400}
                      height={500}
                      className='w-full object-cover transition duration-500 group-hover:scale-102'
                    />
                  </div>

                  <div className='overflow-hidden rounded-[15px] shadow-lg shadow-sky-200 group'>
                    <Image
                      src='/Services/main4.jpg'
                      alt='Rainwater System'
                      width={400}
                      height={500}
                      className='w-full h-full object-cover transition duration-500 group-hover:scale-102'
                    />
                  </div>

                  <div className='overflow-hidden rounded-[15px] shadow-lg shadow-sky-200 group'>
                    <Image
                      src='/Services/main5.jpg'
                      alt='RWH Pit'
                      width={400}
                      height={500}
                      className='w-full h-full object-cover transition duration-500 group-hover:scale-102'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='py-5 bg-gradient-to-b from-white to-slate-50'>
          <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-10'>
            <div className='grid lg:grid-cols-2 gap-10 items-center'>
              {/* LEFT CONTENT */}
              <div>
                {/* Badge */}
                <span className='inline-flex items-center rounded-full bg-sky-100 text-sky-700 px-4 py-2 text-sm font-semibold mb-5'>
                  InRain®
                </span>

                {/* Heading */}
                <h2 className='text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4'>
                  Rooftop Rainwater
                  <span className='text-sky-600'> Harvesting System</span>
                </h2>

                {/* Content */}
                <div className='space-y-3 text-gray-600 text-base md:text-md leading-7 text-justify'>
                  <p>
                    A Rooftop Rainwater Harvesting System in India intended for
                    filtration, transitory maintenance and ensuing release. It
                    is utilized in waste channel application. It is developed
                    utilizing our restrictive plastic infusion shaped boards.We
                    provide all range of modules as per the requirements.
                  </p>

                  <p>
                    We take pride in our position as a leading Rooftop Rainwater
                    Harvesting System Service Provider in the industry, offering
                    superior solutions customized to meet individual needs. If
                    you are searching for the optimal rainwater harvesting
                    system, feel free to contact us to explore customized offers
                    that match your requirements.
                  </p>
                </div>

                {/* CTA */}
                <div className='mt-5'>
                  <Link href='/rooftop-rainwater-harvesting' passHref>
                    <Button
                      variant='contained'
                      sx={{
                        borderRadius: '14px',
                        padding: '12px 28px',
                        fontWeight: 600,
                        fontSize: '16px',
                        textTransform: 'none',
                        boxShadow: '0 10px 25px rgba(2,132,199,0.25)'
                      }}
                    >
                      EXPLORE
                    </Button>
                  </Link>
                </div>
              </div>

              {/* RIGHT IMAGE GRID */}
              <div className='relative'>
                <div className='grid grid-cols-2 gap-5'>
                  <div className='overflow-hidden rounded-[28px] shadow-lg group'>
                    <Image
                      src='/Filter/rain1.jpg'
                      alt='Rainwater Harvesting'
                      width={500}
                      height={500}
                      className='w-full object-cover transition duration-500 group-hover:scale-105'
                    />
                  </div>

                  <div className='overflow-hidden rounded-[28px] shadow-lg group mt-8'>
                    <Image
                      src='/Filter/rain2.jpg'
                      alt='Rainwater Technology'
                      width={500}
                      height={500}
                      className='w-full object-cover transition duration-500 group-hover:scale-105'
                    />
                  </div>

                  <div className='overflow-hidden rounded-[28px] shadow-lg group -mt-4'>
                    <Image
                      src='/Filter/rain3.png'
                      alt='Rainwater Harvesting'
                      width={500}
                      height={500}
                      className='w-full object-cover transition duration-500 group-hover:scale-105'
                    />
                  </div>

                  <div className='overflow-hidden rounded-[28px] shadow-lg group'>
                    <Image
                      src='/Filter/rain4.png'
                      alt='Rainwater Technology'
                      width={500}
                      height={500}
                      className='w-full object-cover transition duration-500 group-hover:scale-105'
                    />
                  </div>
                </div>

                {/* Background Accent */}
                <div className='hidden lg:block absolute -z-10 -top-8 -right-8 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-40' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteGallery />
      <section className='py-10 bg-gradient-to-b from-slate-50 to-white overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-10'>
          {/* TOP SECTION */}
          <div className='md:flex md:justify-center items-center gap-14'>
            {/* LEFT IMAGE SECTION */}
            <div className='relative'>
              <div className='flex md:flex-col items-center gap-5'>
                <div className='overflow-hidden w-62.5 rounded-[28px] shadow-xl group'>
                  <Image
                    src='/Module/pic1.jpg'
                    alt='Module Image'
                    width={250}
                    height={250}
                    className='w-full object-cover transition duration-500 group-hover:scale-105'
                  />
                </div>

                <div className='overflow-hidden w-62.5 rounded-[28px] shadow-xl group'>
                  <Image
                    src='/Module/pic2.jpg'
                    alt='Module Image'
                    width={250}
                    height={250}
                    className='w-full object-cover transition duration-500 group-hover:scale-105'
                  />
                </div>
              </div>

              {/* Decorative background blur */}
              <div className='hidden lg:block absolute -z-10 top-20 -left-12 w-48 h-48 bg-sky-100 rounded-full blur-3xl opacity-40' />
            </div>

            {/* RIGHT CONTENT */}
            <div className='mt-10 md:mt-0'>
              <span className='inline-flex items-center rounded-full bg-sky-100 text-sky-700 px-4 py-2 text-sm font-semibold mb-2'>
                InRain®
              </span>

              <h2 className='text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-2'>
                Water Conservation & Management Company.
              </h2>

              <span className='block text-lg md:text-2xl italic text-green-700 font-medium mb-4'>
                “Water is life, and conservation is the future.”
              </span>

              <div className='space-y-5 text-gray-600 text-base md:text-md leading-7 text-justify'>
                <p>
                  70% of our earth is water, however, the potable water which is
                  required for most of the human needs, is very less. The
                  growing urbanization and global development have also led to a
                  sharp decline in groundwater. Climate change with global
                  warming is not making things easier for humans. Water
                  conservation and management techniques are vital for
                  sustainable development. It helps in managing the increasing
                  demand for water with growing industrialization and increasing
                  population.
                </p>

                <p>
                  At InRain, we provide water conservation & management
                  techniques leveraging modern technology. Conservation methods
                  and solutions offered by InRain are not only environment
                  friendly but economical as well.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM FEATURES SECTION */}
          <div className='mt-10'>
            <div className='grid md:grid-cols-2 gap-5'>
              <div className='bg-white rounded-[28px] shadow-md border border-slate-200 p-6 hover:shadow-xl transition duration-300'>
                <h3 className='font-bold text-xl text-sky-700 mb-3'>
                  The Technology We Offer
                </h3>

                <p className='text-gray-600 leading-7 text-justify'>
                  At InRain, we are using Modular Rainwater Harvesting System in
                  India. This advanced German technology helps us to reduce
                  costs and improves the longevity of the rainwater harvesting
                  system. It helps in overcoming the major challenge of
                  space-saving, which is a prime concern in urban planning and
                  development.
                </p>
              </div>

              <div className='bg-white rounded-[28px] shadow-md border border-slate-200 p-6 hover:shadow-xl transition duration-300'>
                <h3 className='font-bold text-xl text-sky-700 mb-3'>
                  The Quality We Offer
                </h3>

                <p className='text-gray-600 leading-7 text-justify'>
                  We provide high-quality products as our products go through a
                  stringent quality check. Our in-house manufacturing ensures
                  the quality of products and our quality assurance system
                  ensures consistent quality.
                </p>
              </div>

              <div className='bg-white rounded-[28px] shadow-md border border-slate-200 p-6 hover:shadow-xl transition duration-300'>
                <h3 className='font-bold text-xl text-sky-700 mb-3'>
                  Water Conservation Vision
                </h3>

                <p className='text-gray-600 leading-7 text-justify'>
                  InRain firmly believes that the future of urban planning and
                  development is through the practice of water conservation and
                  management. We are fortunate Modular Rainwater Harvesting
                  System Service Provider to be blessed with the ability to
                  contribute to save the environment movement, while we help
                  others to incorporate water conservation methods and practices
                  in life. And we are also a proud partner in the make in India
                  movement as we manufacture all our parts in India.
                </p>
              </div>

              <div className='bg-white rounded-[28px] shadow-md border border-slate-200 p-6 hover:shadow-xl transition duration-300'>
                <h3 className='font-bold text-xl text-sky-700 mb-3'>
                  Sustainable Development
                </h3>

                <p className='text-gray-600 leading-7 text-justify'>
                  At InRain, we help organizations, housing societies and
                  individuals to integrate water conservation and management
                  into their development plans. We aim to provide sustainability
                  in water conservation practices.
                </p>
              </div>

              <div className='bg-white rounded-[28px] shadow-md border border-slate-200 p-6 hover:shadow-xl transition duration-300 md:col-span-2'>
                <h3 className='font-bold text-xl text-sky-700 mb-3'>
                  Commitment to Sustainability
                </h3>

                <p className='text-gray-600 leading-7 text-justify'>
                  As an advanced rainwater harvesting company, we are deeply
                  committed to sustainable practices and environmental
                  stewardship. We recognize the importance of conserving water
                  resources and reducing reliance on conventional sources. By
                  implementing our rainwater harvesting systems, we help our
                  clients optimize water management, reduce their carbon
                  footprint, and contribute to a more sustainable future.
                </p>
              </div>

              <div className='bg-white rounded-[28px] shadow-md border border-slate-200 p-6 hover:shadow-xl transition duration-300 md:col-span-2'>
                <h3 className='font-bold text-xl text-sky-700 mb-3'>
                  Client Satisfaction
                </h3>

                <p className='text-gray-600 leading-7 text-justify'>
                  Our success is measured by the satisfaction of our clients,
                  and we strive to exceed their expectations in every project we
                  undertake. We prioritize open communication, transparent
                  project management, and timely execution to ensure a seamless
                  experience for our clients. Our commitment to quality,
                  reliability, and customer-centric approach has earned us a
                  strong reputation in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hero5 />
      <Hero6 />
      <Certification />
      <Footer />
    </>
  )
}

export default ICPL
