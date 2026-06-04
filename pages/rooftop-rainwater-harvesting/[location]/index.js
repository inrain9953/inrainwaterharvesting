import { CityData } from '@/components/constant'
import Image from 'next/image'
import Link from 'next/link'
import Certification from '@/components/Certification/Certification'
import DynamicMetatag from '@/components/Schema/DynamicMetatag'
import DynamicSchema from '@/components/Schema/DynamicSchema'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default function RooftopRainwaterHarvestingLocationPage ({ city, slug }) {
  const heading = 'Rooftop Rainwater Harvesting'
  const subheading = 'Modular Rainwater Harvesting'
  const page = 'rooftop-rainwater-harvesting'
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
              alt={`Rooftop Rainwater Harvesting in ${city.city}`}
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
                        <bold className='font-semibold'>
                          {heading} in {city.city}
                        </bold>{' '}
                        is a simple yet highly effective method of collecting
                        and storing rainwater from the roofs of buildings for
                        future use. It is one of the most widely adopted water
                        conservation techniques, especially in urban areas where
                        water scarcity is becoming a growing concern.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        In this system, rainwater falling on rooftops is
                        collected through a network of pipes and gutters and
                        directed into a filtration unit. The filtration system
                        removes dust, leaves, and other impurities to ensure the
                        water is clean and safe for use. After filtration, the
                        water is either stored in tanks for domestic purposes or
                        directed into recharge pits, wells, or borewells to
                        replenish groundwater levels.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        One of the major advantages of{' '}
                        <Link
                          href={'/'}
                          className='font-semibold text-green-600 hover:text-sky-600'
                        >
                          {heading} in {city.city}
                        </Link>{' '}
                        is its cost-effectiveness and ease of installation. It
                        does not require large land areas or complex
                        infrastructure, making it suitable for homes, offices,
                        schools, and industrial buildings. Additionally, it
                        helps reduce dependency on municipal water supply and
                        lowers water bills.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        This system also plays a crucial role in environmental
                        conservation. By capturing rainwater, it reduces surface
                        runoff, prevents soil erosion, and minimizes the risk of
                        urban flooding. Furthermore, it helps in recharging
                        groundwater, which is essential for maintaining the
                        natural water cycle.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        Overall,{' '}
                        <bold className='font-semibold'>
                          {heading} in {city.city}
                        </bold>{' '}
                        is a sustainable and practical solution for managing
                        water resources. It not only addresses water shortages
                        but also promotes responsible water usage, making it an
                        essential practice for a greener and more secure future.
                      </p>
                    </div>

                    {/* BEST CHOICE */}
                    <div className='bg-gradient-to-r from-sky-600 to-cyan-600 rounded-[32px] p-6 md:p-10 text-white shadow-2xl'>
                      <h2 className='text-2xl md:text-3xl font-bold mb-3'>
                        Best Choice for {heading} in {city.city}
                      </h2>

                      <p className='leading-7 text-slate-100 text-[16px] md:text-md'>
                        InRain Constructions Pvt. Ltd. is the best {heading}{' '}
                        company in {city.city}, providing top-quality products
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
                        src='/rainwater-harvesting-pit.jpg'
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
                        Get customized {heading} solutions in {city.city},
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
