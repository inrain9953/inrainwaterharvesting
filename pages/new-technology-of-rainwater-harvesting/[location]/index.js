import { CityData } from '@/components/constant'
import Image from 'next/image'
import Link from 'next/link'
import Certification from '@/components/Certification/Certification'
import DynamicMetatag from '@/components/Schema/DynamicMetatag'
import DynamicSchema from '@/components/Schema/DynamicSchema'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default function NewTechnologyOfRainwaterHarvestingLocationPage ({
  city,
  slug
}) {
  const heading = 'New Technology of Rainwater Harvesting'
  const subheading = 'Rainwater Harvesting Tank'
  const page = 'new-technology-of-rainwater-harvesting'
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
              src='/service5.jpg'
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
                        <bold className='font-semibold'>
                          {heading} in {city.city}
                        </bold>{' '}
                        is transforming the way water is collected, filtered,
                        and reused, making systems more efficient, compact, and
                        sustainable. Traditional methods are now being upgraded
                        with smart designs and advanced materials to meet the
                        growing demand for water conservation in urban and
                        industrial areas.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        One of the key innovations is modular rainwater
                        harvesting systems. These systems use interlocking,
                        high-strength plastic modules installed underground to
                        store and recharge large volumes of rainwater. They are
                        space-saving, easy to install, and ideal for areas with
                        limited land availability. Unlike conventional pits,
                        modular systems offer higher storage capacity and better
                        structural durability.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        Another advancement is the use of advanced filtration
                        technologies. Multi-layer filters, UV purification, and
                        self-cleaning filter units ensure that collected
                        rainwater is free from contaminants, making it suitable
                        for reuse in applications like irrigation, flushing, and
                        even industrial processes. Smart filtration systems
                        reduce maintenance efforts and improve water quality
                        significantly.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        Automation and IoT-based monitoring are also playing a
                        major role in modern rainwater harvesting. Smart sensors
                        can track water levels, flow rates, and filter
                        conditions in real time. These systems can send alerts
                        for maintenance and help optimize water usage, making
                        the entire setup more efficient and user-friendly.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        Permeable surfaces and recharge trenches are additional
                        innovations that allow rainwater to naturally seep into
                        the ground, reducing runoff and improving groundwater
                        levels. These solutions are especially useful in urban
                        areas with high concrete coverage.
                      </p>
                      <p className='text-gray-700 text-[15px] md:text-md leading-7 text-justify'>
                        Overall,{' '}
                        <Link
                          href={'/'}
                          className='font-semibold text-green-600 hover:text-sky-600'
                        >
                          {heading} in {city.city}
                        </Link>{' '}
                        is making systems more reliable, efficient, and
                        adaptable. By integrating smart monitoring, advanced
                        filtration, and modular designs, modern rainwater
                        harvesting solutions provide a sustainable answer to
                        water scarcity while supporting long-term environmental
                        conservation.
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
                        src='/new-technology-of-rainwater-harvesting.jpg'
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
