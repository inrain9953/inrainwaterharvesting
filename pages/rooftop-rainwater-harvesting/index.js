import Image from 'next/image'
import React from 'react'
import Certification from '@/components/Certification/Certification'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import StaticMetatag from '@/components/Schema/StaticMetatag'
import StaticSchema from '@/components/Schema/StaticSchema'
import Link from 'next/link'

const Rooftop_Rainwater_Harvesting = () => {
  const data = {
    title:
      'Rooftop Rainwater Harvesting System | Water Saving & Groundwater Recharge',
    desc: 'Learn about rooftop rainwater harvesting, an efficient water conservation system for collecting, storing, and recharging rainwater. Reduce water bills, conserve resources, and support sustainable water management for homes, offices, and industries.',
    keyword:
      'rooftop rainwater harvesting, rooftop rainwater harvesting system, rainwater harvesting, water conservation system, rooftop water collection, groundwater recharge system, rainwater storage solution, rooftop water harvesting, sustainable water management, urban water conservation, rainwater filtration system, domestic rainwater harvesting, commercial rainwater harvesting, industrial rainwater harvesting, water saving solutions, groundwater replenishment, eco-friendly water conservation, rainwater harvesting benefits',
    canonical:
      'https://www.inrainwaterharvesting.com/rooftop-rainwater-harvesting',
    ogTitle:
      'Rooftop Rainwater Harvesting System | Water Saving & Groundwater Recharge',
    ogDescription:
      'Learn about rooftop rainwater harvesting, an efficient water conservation system for collecting, storing, and recharging rainwater. Reduce water bills, conserve resources, and support sustainable water management for homes, offices, and industries.',
    ogUrl: 'https://www.inrainwaterharvesting.com/rooftop-rainwater-harvesting',
    twittertitle:
      'Rooftop Rainwater Harvesting System | Water Saving & Groundwater Recharge',
    twitterdescription:
      'Learn about rooftop rainwater harvesting, an efficient water conservation system for collecting, storing, and recharging rainwater. Reduce water bills, conserve resources, and support sustainable water management for homes, offices, and industries.'
  }
  return (
    <>
      <StaticMetatag data={data} />
      <StaticSchema />
      <Navbar />
      <main>
        <section className='bg-gradient-to-b from-slate-50 to-white pb-20 overflow-hidden'>
          {/* HERO IMAGE */}
          <div className='relative h-[260px] md:h-[350px] overflow-hidden'>
            <Image
              src='/service8.jpg'
              alt='Rainwater Harvesting System'
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
                  Sustainable Water Solution
                </span>

                <h1 className='text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg'>
                  Rooftop Rainwater Harvesting
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
                    Rooftop Rainwater Harvesting is a simple yet highly
                    effective method of collecting and storing rainwater from
                    the roofs of buildings for future use. It is one of the most
                    widely adopted water conservation techniques, especially in
                    urban areas where water scarcity is becoming a growing
                    concern.
                  </p>

                  <p>
                    In this system, rainwater falling on rooftops is collected
                    through a network of pipes and gutters and directed into a
                    filtration unit. The filtration system removes dust, leaves,
                    and other impurities to ensure the water is clean and safe
                    for use. After filtration, the water is either stored in
                    tanks for domestic purposes or directed into recharge pits,
                    wells, or borewells to replenish groundwater levels.
                  </p>

                  <p>
                    One of the major advantages of rooftop rainwater harvesting
                    is its cost-effectiveness and ease of installation. It does
                    not require large land areas or complex infrastructure,
                    making it suitable for homes, offices, schools, and
                    industrial buildings. Additionally, it helps reduce
                    dependency on municipal water supply and lowers water bills.
                  </p>

                  <p>
                    This system also plays a crucial role in environmental
                    conservation. By capturing rainwater, it reduces surface
                    runoff, prevents soil erosion, and minimizes the risk of
                    urban flooding. Furthermore, it helps in recharging
                    groundwater, which is essential for maintaining the natural
                    water cycle.
                  </p>

                  <p>
                    Overall, Rooftop Rainwater Harvesting is a sustainable and
                    practical solution for managing water resources. It not only
                    addresses water shortages but also promotes responsible
                    water usage, making it an essential practice for a greener
                    and more secure future.
                  </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className='lg:sticky lg:top-28 h-fit'>
                  <div className='overflow-hidden rounded-[32px] shadow-2xl border border-slate-200 group'>
                    <Image
                      src='/rainwater-harvesting-tank.jpg'
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
                      Rooftop Rainwater harvesting helps conserve water, reduce
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

export default Rooftop_Rainwater_Harvesting
