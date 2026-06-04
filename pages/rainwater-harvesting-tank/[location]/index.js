import { CityData } from '@/components/constant'
import Image from 'next/image'
import Link from 'next/link'
import Certification from '@/components/Certification/Certification'
import DynamicMetatag from '@/components/Schema/DynamicMetatag'
import DynamicSchema from '@/components/Schema/DynamicSchema'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default function RainwaterHarvestingTankLocationPage ({ city, slug }) {
  const heading = 'Rainwater Harvesting Tank'
  const subheading = 'Modular Rainwater Harvesting Tank'
  const page = 'rainwater-harvesting-tank'
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
              src='/service8.jpg'
              alt={`${heading} in ${city.city}`}
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
                        is a vital component of any rainwater harvesting system,
                        designed to store collected rainwater for future use.
                        With growing concerns over water scarcity and rising
                        utility costs in {city.city}, these tanks provide an
                        efficient and sustainable way to conserve water for
                        domestic, commercial, and industrial applications.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        <Link
                          href={'/'}
                          className='font-semibold text-green-600 hover:text-sky-600'
                        >
                          {heading} in {city.city}
                        </Link>{' '}
                        are available in various sizes, shapes, and materials to
                        suit different requirements. Common materials include
                        plastic (HDPE), fiberglass, concrete, and steel. Plastic
                        tanks are lightweight, durable, and easy to install,
                        making them ideal for residential use. On the other
                        hand, concrete and steel tanks are preferred for
                        large-scale commercial or industrial projects due to
                        their high storage capacity and strength.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        These tanks can be installed either above ground or
                        underground. Above-ground tanks are easy to maintain and
                        cost-effective, while underground tanks save space and
                        maintain cooler water temperatures, reducing the risk of
                        algae growth. The choice of installation depends on
                        available space, budget, and water storage needs.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        A well-designed rainwater harvesting tank is usually
                        connected to a filtration system that removes dirt,
                        leaves, and other contaminants before water enters the
                        tank. Many modern tanks also include features such as
                        overflow control, first-flush devices, and level
                        indicators to ensure efficient operation and water
                        quality management.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        The stored rainwater can be used for various purposes
                        such as gardening, flushing toilets, washing vehicles,
                        and even for drinking after proper purification. By
                        using harvested rainwater in {city.city}, users can
                        significantly reduce their dependence on municipal water
                        supplies and groundwater sources.
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
                        src='/rainwater-harvesting-tank.jpg'
                        alt={
                          `${heading} in ${city.city}` +
                          ' ' +
                          'Image' +
                          ' ' +
                          '1'
                        }
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
                        {heading} in {city.city}
                      </h3>

                      <p className='text-gray-700 leading-7'>
                        {heading} in {city.city} helps conserve water, reduce
                        groundwater dependency, and support eco-friendly urban
                        development.
                      </p>
                    </div>

                    {/* SMALL CTA CARD */}
                    <div className='bg-slate-900 text-white rounded-[32px] p-7 shadow-xl'>
                      <h4 className='text-xl font-bold mb-3'>
                        Need Expert Consultation?
                      </h4>

                      <p className='text-slate-300 leading-7 mb-5'>
                        Get customized {heading} solutions in {city.city},{' '}
                        designed according to your project requirements.
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
