import React from 'react'
import StaticMetatag from '@/components/Schema/StaticMetatag'
import StaticSchema from '@/components/Schema/StaticSchema'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Certification from '@/components/Certification/Certification'
import Image from 'next/image'
import Link from 'next/link'

const Ground_Water_Recharge_System = () => {
  const data = {
    title:
      'Ground Water Recharge System | Rainwater Recharge & Water Conservation',
    desc: 'Discover groundwater recharge systems for replenishing underground water levels through rainwater harvesting, filtration, and recharge structures. Improve water conservation, reduce flooding, and support sustainable groundwater management.',
    keyword:
      'ground water recharge system, groundwater recharge system, rainwater recharge system, groundwater replenishment, water conservation system, aquifer recharge system, borewell recharge system, recharge pit system, rainwater harvesting recharge, underground water recharge, sustainable water management, modular recharge system, groundwater restoration, recharge trench system, urban water conservation, eco-friendly water solution, water recharge technology, rainwater filtration system',
    canonical:
      'https://www.inrainwaterharvesting.com/ground-water-recharge-system',
    ogTitle:
      'Ground Water Recharge System | Rainwater Recharge & Water Conservation',
    ogDescription:
      'Discover groundwater recharge systems for replenishing underground water levels through rainwater harvesting, filtration, and recharge structures. Improve water conservation, reduce flooding, and support sustainable groundwater management.',
    ogUrl: 'https://www.inrainwaterharvesting.com/ground-water-recharge-system',
    twittertitle:
      'Ground Water Recharge System | Rainwater Recharge & Water Conservation',
    twitterdescription:
      'Discover groundwater recharge systems for replenishing underground water levels through rainwater harvesting, filtration, and recharge structures. Improve water conservation, reduce flooding, and support sustainable groundwater management.'
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
              src='/service2.jpg'
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
                  Environmental Solution
                </span>

                <h1 className='text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg'>
                  Ground Water Recharge System
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
                    A groundwater recharge system is an effective method used to
                    replenish underground water levels by allowing rainwater or
                    surface water to percolate into the soil. It plays a crucial
                    role in maintaining the balance of the water cycle,
                    especially in urban and industrial areas where excessive
                    water extraction has led to declining groundwater levels.
                  </p>

                  <p>
                    The system works by collecting rainwater from rooftops,
                    roads, or open areas and directing it through a network of
                    pipes into specially designed recharge structures such as
                    pits, trenches, or wells. Before entering the ground, the
                    water passes through filtration units consisting of sand,
                    gravel, and charcoal layers. This filtration process removes
                    impurities, debris, and contaminants, ensuring that only
                    clean water is absorbed into the soil.
                  </p>

                  <p>
                    Modern groundwater recharge systems incorporate advanced
                    techniques like modular recharge chambers, borewell recharge
                    systems, and injection wells. These systems are designed to
                    handle large volumes of water efficiently while occupying
                    minimal space. In addition, geotextile filters and silt
                    traps are used to enhance filtration and prevent clogging,
                    thereby increasing the lifespan and performance of the
                    system.
                  </p>

                  <p>
                    One of the main benefits of a{' '}
                    <Link className='font-semibold text-green-500 hover:text-sky-500' href='/'>
                      Groundwater Recharge System
                    </Link>{' '}
                    is the restoration of depleted aquifers. It helps improve
                    water availability for domestic, agricultural, and
                    industrial use. Furthermore, it reduces surface runoff,
                    prevents waterlogging, and minimizes the risk of urban
                    flooding during heavy rainfall. Over time, it also improves
                    groundwater quality through natural filtration.
                  </p>

                  <p>
                    Groundwater recharge systems are cost-effective,
                    environmentally friendly, and easy to maintain. Regular
                    cleaning of filters and inspection of recharge structures
                    ensures optimal performance. These systems are widely
                    adopted as a sustainable solution for water conservation.
                  </p>
                  <p>
                    In conclusion, a groundwater recharge system is a smart and
                    responsible approach to managing water resources. By
                    implementing such systems, individuals and organizations can
                    contribute to water sustainability while reducing dependence
                    on external water supplies.
                  </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className='lg:sticky lg:top-28 h-fit'>
                  <div className='overflow-hidden rounded-[32px] shadow-2xl border border-slate-200 group'>
                    <Image
                      src='/ground-water-recharge-system.jpg'
                      alt='Ground Water Recharge System'
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
                      Ground Water Recharge System helps conserve water, reduce
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

export default Ground_Water_Recharge_System
