import { CityData } from '@/components/constant'
import Image from 'next/image'
import Link from 'next/link'
import Certification from '@/components/Certification/Certification'
import DynamicMetatag from '@/components/Schema/DynamicMetatag'
import DynamicSchema from '@/components/Schema/DynamicSchema'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default function WaterHarvestingSystemLocationPage ({ city, slug }) {
  const heading = 'Water Harvesting System'
  const subheading = 'Industrial Rainwater Harvesting System'
  const page = 'water-harvesting-system'
  const data = {
    title:
      `${heading} in ${city.city}` +
      ' ' +
      '|' +
      ' ' +
      'InRain Construction Pvt. Ltd.',
    desc: `Get the best ${heading} in ${city.city}. We have high-quality ${heading} for your requirement. Our ${heading} Service Provider in ${city.city} will help you & easy to install. Contact now`,
    keyword: `${heading} in ${city.city}, ${subheading} in ${city.city}, Rainwater Harvesting Tank in ${city.city}, Polymer Type Rainwater Harvesting System in ${city.city}, Storm water Management in ${city.city}`,
    canonical: `https://www.inrainwaterharvesting.com/${page}/${slug}`,
    ogTitle:
      `${heading} in ${city.city}` +
      ' ' +
      '|' +
      ' ' +
      'InRain Construction Pvt. Ltd.',
    ogDescription: `Get the best ${heading} in ${city.city}. We have high-quilt ${heading} for your need & requirement. Our ${heading} Service Provider in ${city.city} will help you & easy to install. Contact now`,
    ogUrl: `https://www.inrainwaterharvesting.com/${page}/${slug}`,
    twittertitle:
      `${heading} in ${city.city}` +
      ' ' +
      '|' +
      ' ' +
      'InRain Construction Pvt. Ltd.',
    twitterdescription: `Get the best ${heading} in ${city.city}. We have high-quilt ${heading} for your need & requirement. Our ${heading} Service Provider in ${city.city} will help you & easy to install. Contact now`
  }
  return (
    <>
      <DynamicMetatag data={data} />
      <DynamicSchema
        city={city}
        slug={slug}
        heading={heading}
        subheading={subheading}
        page={page}
      />
      <Navbar />
      <main>
        <section className='bg-gradient-to-b from-slate-50 to-white pb-20 overflow-hidden'>
          {/* HERO IMAGE */}
          <div className='relative h-[260px] md:h-[350px] overflow-hidden'>
            <Image
              src='/service11.jpg'
              alt={heading}
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
                  {heading} in {city.city}
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
                    <div className='bg-white border space-y-3 border-slate-200 rounded-[32px] p-6 md:p-10 shadow-lg'>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        A{' '}
                        <bold className='font-semibold'>
                          {heading} in {city.city}
                        </bold>{' '}
                        is a sustainable method of collecting, storing, and
                        managing water from natural sources such as rainfall and
                        surface runoff. It plays a crucial role in addressing
                        water scarcity, especially in urban and semi-urban areas
                        where the demand for water is continuously increasing.
                        By capturing and reusing water, these systems help
                        conserve valuable resources and reduce dependence on
                        external water supplies.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        The most common type of CC is rainwater harvesting,
                        where water is collected from rooftops, open areas, or
                        paved surfaces. The system typically consists of a
                        catchment area, gutters or pipelines, filtration units,
                        storage tanks, and distribution mechanisms. The
                        collected water passes through filters that remove dust,
                        leaves, and other impurities before being stored for
                        later use.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        Modern water harvesting systems are designed with
                        advanced technologies to improve efficiency and water
                        quality. Features such as first-flush devices,
                        multi-layer filtration, and automated monitoring systems
                        ensure that the collected water remains clean and safe.
                        In addition to storage, many systems are designed to
                        recharge groundwater by directing excess water into
                        recharge pits, trenches, or borewells. This helps
                        restore declining water tables and supports long-term
                        water availability.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        Water harvested through these systems in {city.city} can
                        be used for various purposes, including gardening,
                        cleaning, irrigation, flushing, and industrial
                        processes. With proper treatment, it can also be made
                        suitable for drinking. This reduces the strain on
                        municipal water supplies and lowers water bills for
                        households and businesses.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        The benefits of a water harvesting system in {city.city}{' '}
                        go beyond cost savings. It helps prevent urban flooding
                        by managing excess rainwater and reduces soil erosion.
                        Moreover, it promotes environmental sustainability by
                        conserving water and supporting ecological balance.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        In conclusion, a{' '}
                        <bold className='font-semibold'>
                          {heading} in {city.city}
                        </bold>{' '}
                        is a practical and eco-friendly solution for efficient
                        water management. Its adoption is essential for ensuring
                        a reliable water supply and building a sustainable
                        future for coming generations.
                      </p>
                    </div>

                    {/* BEST CHOICE */}
                    <div className='bg-gradient-to-r from-sky-600 to-cyan-600 rounded-[32px] p-6 md:p-10 text-white shadow-2xl'>
                      <h2 className='text-2xl md:text-3xl font-bold mb-3'>
                        Best Choice for {heading} in {city.city}
                      </h2>

                      <p className='leading-7 text-slate-100 text-[16px] md:text-md'>
                        InRain Constructions Pvt. Ltd. is the best {heading}{' '}
                        supplier in {city.city}, providing top-quality products
                        and services. With extensive experience and expertise,
                        we offer customized solutions, durable tanks, efficient
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
                        src='/water-harvesting-system.jpg'
                        alt={`${heading} in ${city.city}`}
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
                        {subheading} in {city.city}
                      </h3>

                      <p className='text-gray-700 leading-7'>
                        {subheading} solution in {city.city} helps conserve
                        water, reduce groundwater dependency, and support
                        eco-friendly urban development.
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

/* ---------------------------- */
/* Static Paths */
/* ---------------------------- */

export async function getStaticPaths () {
  const paths = CityData.map(city => ({
    params: {
      location: city.slug
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

/* ---------------------------- */
/* Static Props */
/* ---------------------------- */

export async function getStaticProps ({ params }) {
  const slug = params.location

  // FIXED: find city by slug
  const city = CityData.find(item => item.slug === slug)

  // 404 page if city not found
  if (!city) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      city,
      slug
    },

    // Rebuild every 24 hrs
    revalidate: 86400
  }
}
