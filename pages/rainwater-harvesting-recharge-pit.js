import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import StaticMetatag from '@/components/Schema/StaticMetatag'
import StaticSchema from '@/components/Schema/StaticSchema'

const RainwaterHarvestingRechargePit = () => {
  const data = {
    title:
      'Rainwater Harvesting Recharge Pit | An Effective Solution for Groundwater Recharge',
    desc: 'Rainwater Harvesting Recharge Pit is an effective solution for collecting and filtering rainwater and directing it into the ground to support groundwater recharge and reduce surface runoff.',
    keyword:
      'rainwater harvesting recharge pit, recharge pit, rainwater recharge pit, recharge pit system, rainwater harvesting system, groundwater recharge, groundwater recharge pit, rainwater recharge system, rooftop rainwater harvesting, rainwater filtration system, rainwater harvesting solutions, water conservation, rainwater harvesting India',
    canonical:
      'https://www.inrainwaterharvesting.com/rainwater-harvesting-recharge-pit',
    ogTitle:
      'Rainwater Harvesting Recharge Pit | An Effective Solution for Groundwater Recharge',
    ogDescription:
      'Rainwater Harvesting Recharge Pit is an effective solution for collecting and filtering rainwater and directing it into the ground to support groundwater recharge and reduce surface runoff.',
    ogUrl:
      'https://www.inrainwaterharvesting.com/rainwater-harvesting-recharge-pit',
    twittertitle:
      'Rainwater Harvesting Recharge Pit | An Effective Solution for Groundwater Recharge',
    twitterdescription:
      'Rainwater Harvesting Recharge Pit is an effective solution for collecting and filtering rainwater and directing it into the ground to support groundwater recharge and reduce surface runoff.'
  }
  return (
    <>
      <StaticMetatag data={data} />
      <StaticSchema />
      <Navbar />
      <main className='min-h-screen bg-white text-slate-700'>
        {/* =========================================================
          HERO SECTION
      ========================================================= */}
        <section className='relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50'>
          <div className='absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl' />
          <div className='absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl' />

          <div className='relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20'>
            <div className='grid items-center gap-12 lg:grid-cols-2'>
              {/* Hero Content */}
              <div>
                <span className='inline-flex rounded-full border border-sky-200 bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700'>
                  Rainwater Harvesting Recharge Pit
                </span>

                <h1 className='mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-5xl'>
                  Rainwater Harvesting Recharge Pit
                </h1>

                <p className='mt-5 text-xl font-semibold text-sky-700'>
                  An Effective Solution for Groundwater Recharge
                </p>

                <p className='mt-6 text-base leading-8 text-slate-600 sm:text-lg'>
                  Rainwater is a valuable natural resource, but a significant
                  amount of rainfall is often lost as surface runoff. In urban
                  and developed areas, concrete roofs, paved surfaces, roads,
                  and other impermeable surfaces reduce the natural infiltration
                  of rainwater into the ground.
                </p>

                <p className='mt-5 text-base leading-8 text-slate-600 sm:text-lg'>
                  A{' '}
                  <Link
                    href='/'
                    target='_blank'
                    className='text-sky-500 hover:text-green-500 font-semibold'
                  >
                    Rainwater Harvesting Recharge Pit
                  </Link>{' '}
                  provides a simple and practical way to collect rainwater and
                  help it move into suitable underground soil and geological
                  formations. Instead of allowing rainwater to flow directly
                  into drains, a properly designed recharge pit can capture
                  runoff and support groundwater recharge.
                </p>

                <p className='mt-5 text-base leading-8 text-slate-600 sm:text-lg'>
                  Recharge pits can be used for residential buildings,
                  commercial properties, institutions, industrial facilities,
                  schools, warehouses, and other suitable sites. The size and
                  design of the pit depend on the site's rainfall, catchment
                  area, soil conditions, groundwater characteristics, and
                  expected runoff.
                </p>
              </div>

              {/* Hero Image */}
              <div className='relative'>
                <div className='absolute -inset-5 rounded-[2rem] bg-sky-300/30 blur-3xl' />

                <div className='relative overflow-hidden rounded-3xl border border-white bg-white p-3 shadow-2xl'>
                  <Image
                    width={500}
                    height={500}
                    src='/projects/18.jpeg'
                    alt='Rainwater Harvesting Recharge Pit'
                    className='h-auto w-full rounded-2xl object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          WHAT IS A RAINWATER HARVESTING RECHARGE PIT?
      ========================================================= */}
        <section className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
          <div className='max-w-5xl'>
            <h2 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
              What is a Rainwater Harvesting Recharge Pit?
            </h2>

            <p className='mt-6 text-lg leading-8 text-slate-600'>
              A rainwater harvesting recharge pit is a specially constructed pit
              that receives collected rainwater and allows it to gradually
              infiltrate into the surrounding ground.
            </p>

            <p className='mt-5 text-lg leading-8 text-slate-600'>
              The pit is generally filled with suitable layers of materials such
              as gravel, coarse sand, and other appropriate filter media. These
              layers help reduce the entry of suspended particles while allowing
              water to pass into the surrounding soil.
            </p>

            <p className='mt-6 text-lg font-semibold text-slate-900'>
              Rainwater may reach the recharge pit through:
            </p>

            <ul className='mt-5 grid gap-3 sm:grid-cols-2'>
              {[
                'Rooftop rainwater pipes',
                'Gutters and downpipes',
                'Surface drainage channels',
                'Stormwater collection systems',
                'Filter chambers',
                'Other suitable rainwater collection arrangements'
              ].map(item => (
                <li
                  key={item}
                  className='flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4'
                >
                  <span className='mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-600' />
                  <span className='leading-7 text-slate-600'>{item}</span>
                </li>
              ))}
            </ul>

            <p className='mt-6 text-lg leading-8 text-slate-600'>
              The exact structure and filtration arrangement should be selected
              according to the site's conditions and water quality requirements.
            </p>
          </div>
        </section>

        {/* =========================================================
          HOW DOES A RECHARGE PIT WORK?
      ========================================================= */}
        <section className='bg-slate-50'>
          <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
            <div className='max-w-5xl'>
              <h2 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
                How Does a Recharge Pit Work?
              </h2>

              <p className='mt-6 text-lg leading-8 text-slate-600'>
                A typical rainwater harvesting recharge pit works through a
                straightforward process.
              </p>

              <div className='mt-10 space-y-8'>
                {/* Step 1 */}
                <div className='relative border-l-2 border-sky-200 pl-8'>
                  <span className='absolute -left-[11px] top-0 flex h-5 w-5 rounded-full bg-sky-600 ring-8 ring-slate-50' />

                  <h3 className='text-xl font-bold text-slate-900'>
                    1. Rainwater Collection
                  </h3>

                  <p className='mt-3 text-lg leading-8 text-slate-600'>
                    Rainwater is collected from a suitable catchment area, such
                    as a rooftop, terrace, paved area, or other approved
                    surface.
                  </p>
                </div>

                {/* Step 2 */}
                <div className='relative border-l-2 border-sky-200 pl-8'>
                  <span className='absolute -left-[11px] top-0 flex h-5 w-5 rounded-full bg-sky-600 ring-8 ring-slate-50' />

                  <h3 className='text-xl font-bold text-slate-900'>
                    2. Conveyance
                  </h3>

                  <p className='mt-3 text-lg leading-8 text-slate-600'>
                    Gutters, pipes, and drainage channels carry the collected
                    water toward a filtration arrangement and eventually to the
                    recharge pit.
                  </p>
                </div>

                {/* Step 3 */}
                <div className='relative border-l-2 border-sky-200 pl-8'>
                  <span className='absolute -left-[11px] top-0 flex h-5 w-5 rounded-full bg-sky-600 ring-8 ring-slate-50' />

                  <h3 className='text-xl font-bold text-slate-900'>
                    3. Filtration
                  </h3>

                  <p className='mt-3 text-lg leading-8 text-slate-600'>
                    Before entering the pit, collected water should generally
                    pass through an appropriate filtration or screening
                    arrangement. This helps remove leaves, debris, silt, and
                    other suspended materials.
                  </p>
                </div>

                {/* Step 4 */}
                <div className='relative border-l-2 border-sky-200 pl-8'>
                  <span className='absolute -left-[11px] top-0 flex h-5 w-5 rounded-full bg-sky-600 ring-8 ring-slate-50' />

                  <h3 className='text-xl font-bold text-slate-900'>
                    4. Water Entry into the Pit
                  </h3>

                  <p className='mt-3 text-lg leading-8 text-slate-600'>
                    Filtered rainwater enters the recharge pit and accumulates
                    within the permeable material placed inside the structure.
                  </p>
                </div>

                {/* Step 5 */}
                <div className='relative pl-8'>
                  <span className='absolute -left-[1px] top-0 flex h-5 w-5 rounded-full bg-sky-600 ring-8 ring-slate-50' />

                  <h3 className='text-xl font-bold text-slate-900'>
                    5. Groundwater Recharge
                  </h3>

                  <p className='mt-3 text-lg leading-8 text-slate-600'>
                    The collected water gradually moves through the surrounding
                    soil and suitable geological layers. This process can
                    contribute to groundwater recharge where site conditions are
                    favorable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          COMPONENTS
      ========================================================= */}
        <section className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
          <div className='max-w-5xl'>
            <h2 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
              Components of a Rainwater Recharge Pit
            </h2>

            <p className='mt-6 text-lg leading-8 text-slate-600'>
              The exact components vary according to the design, but a typical
              system may include:
            </p>

            <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {[
                'Rainwater collection pipes',
                'Inlet chamber',
                'Silt trap or filtration chamber',
                'Recharge pit',
                'Gravel or aggregate layers',
                'Sand or suitable filter media',
                'Protective cover',
                'Inspection and cleaning access',
                'Overflow arrangement, where required'
              ].map(item => (
                <div
                  key={item}
                  className='flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md'
                >
                  <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700'>
                    ✓
                  </span>

                  <span className='leading-7 text-slate-700'>{item}</span>
                </div>
              ))}
            </div>

            <p className='mt-7 text-lg leading-8 text-slate-600'>
              The materials and dimensions should be selected according to the
              expected flow, soil characteristics, and project requirements.
            </p>
          </div>
        </section>

        {/* =========================================================
          BENEFITS
      ========================================================= */}
        <section className='bg-sky-50'>
          <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
            <div className='max-w-6xl'>
              <h2 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
                Benefits of Rainwater Harvesting Recharge Pits
              </h2>

              <div className='mt-10 grid gap-6 md:grid-cols-2'>
                {/* Benefit 1 */}
                <div className='rounded-2xl border border-sky-100 bg-white p-7 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-xl text-sky-700'>
                    ↓
                  </div>

                  <h3 className='mt-5 text-xl font-bold text-slate-900'>
                    Supports Groundwater Recharge
                  </h3>

                  <p className='mt-3 leading-7 text-slate-600'>
                    The primary purpose of a recharge pit is to help transfer
                    suitable rainwater into the ground, supporting the natural
                    groundwater cycle.
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className='rounded-2xl border border-sky-100 bg-white p-7 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-xl text-sky-700'>
                    ≋
                  </div>

                  <h3 className='mt-5 text-xl font-bold text-slate-900'>
                    Reduces Surface Runoff
                  </h3>

                  <p className='mt-3 leading-7 text-slate-600'>
                    Capturing rainwater before it flows away can help reduce
                    uncontrolled runoff from rooftops and paved surfaces.
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className='rounded-2xl border border-sky-100 bg-white p-7 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-xl text-sky-700'>
                    +
                  </div>

                  <h3 className='mt-5 text-xl font-bold text-slate-900'>
                    Helps Manage Rainwater Locally
                  </h3>

                  <p className='mt-3 leading-7 text-slate-600'>
                    A recharge pit allows rainwater to be managed close to where
                    it is collected instead of depending entirely on external
                    drainage infrastructure.
                  </p>
                </div>

                {/* Benefit 4 */}
                <div className='rounded-2xl border border-sky-100 bg-white p-7 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-xl text-sky-700'>
                    ✓
                  </div>

                  <h3 className='mt-5 text-xl font-bold text-slate-900'>
                    Simple and Practical
                  </h3>

                  <p className='mt-3 leading-7 text-slate-600'>
                    Compared with some large-scale water management structures,
                    recharge pits can be relatively straightforward to construct
                    when suitable site conditions exist.
                  </p>
                </div>

                {/* Benefit 5 */}
                <div className='rounded-2xl border border-sky-100 bg-white p-7 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-xl text-sky-700'>
                    ◇
                  </div>

                  <h3 className='mt-5 text-xl font-bold text-slate-900'>
                    Suitable for Different Properties
                  </h3>

                  <p className='mt-3 leading-7 text-slate-600'>
                    Recharge pits can be considered for homes, commercial
                    buildings, institutions, factories, warehouses, and other
                    properties with suitable catchment areas.
                  </p>
                </div>

                {/* Benefit 6 */}
                <div className='rounded-2xl border border-sky-100 bg-white p-7 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-xl text-sky-700'>
                    ♻
                  </div>

                  <h3 className='mt-5 text-xl font-bold text-slate-900'>
                    Supports Sustainable Water Management
                  </h3>

                  <p className='mt-3 leading-7 text-slate-600'>
                    Groundwater recharge is an important part of long-term water
                    conservation. A properly planned recharge system can help
                    make productive use of seasonal rainfall.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          APPLICATIONS
      ========================================================= */}
        <section className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
          <div className='max-w-5xl'>
            <h2 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
              Applications of Recharge Pits
            </h2>

            <p className='mt-6 text-lg leading-8 text-slate-600'>
              Rainwater harvesting recharge pits can be used in various
              locations, including:
            </p>

            <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {[
                'Residential buildings',
                'Apartment complexes',
                'Schools and colleges',
                'Hospitals',
                'Office buildings',
                'Commercial properties',
                'Factories and industrial facilities',
                'Warehouses',
                'Hotels and resorts',
                'Government buildings',
                'Institutional campuses',
                'Parks and suitable open areas'
              ].map(item => (
                <div
                  key={item}
                  className='group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-300 hover:shadow-md'
                >
                  <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700 transition group-hover:bg-sky-600 group-hover:text-white'>
                    ✓
                  </span>

                  <span className='text-slate-700'>{item}</span>
                </div>
              ))}
            </div>

            <p className='mt-7 text-lg leading-8 text-slate-600'>
              The system should always be designed according to the
              characteristics and requirements of the specific site.
            </p>
          </div>
        </section>

        {/* =========================================================
          FACTORS
      ========================================================= */}
        <section className='bg-slate-50'>
          <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
            <div className='max-w-6xl'>
              <h2 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
                Factors to Consider Before Installing a Recharge Pit
              </h2>

              <p className='mt-6 text-lg leading-8 text-slate-600'>
                A recharge pit should not be installed solely based on the
                available space. Proper site evaluation is important for
                determining whether groundwater recharge is suitable.
              </p>

              <p className='mt-6 text-lg font-semibold text-slate-900'>
                Important factors include:
              </p>

              <div className='mt-8 grid gap-5 md:grid-cols-2'>
                {/* Catchment Area */}
                <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                  <h3 className='font-bold text-slate-900'>Catchment Area:</h3>

                  <p className='mt-2 leading-7 text-slate-600'>
                    The size and type of surface from which rainwater will be
                    collected affect the amount of water entering the system.
                  </p>
                </div>

                {/* Rainfall */}
                <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                  <h3 className='font-bold text-slate-900'>Rainfall:</h3>

                  <p className='mt-2 leading-7 text-slate-600'>
                    Local rainfall intensity and seasonal distribution help
                    determine the expected runoff volume.
                  </p>
                </div>

                {/* Soil Permeability */}
                <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                  <h3 className='font-bold text-slate-900'>
                    Soil Permeability:
                  </h3>

                  <p className='mt-2 leading-7 text-slate-600'>
                    The ability of the surrounding soil to absorb water is an
                    important consideration when designing a recharge pit.
                  </p>
                </div>

                {/* Groundwater Conditions */}
                <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                  <h3 className='font-bold text-slate-900'>
                    Groundwater Conditions:
                  </h3>

                  <p className='mt-2 leading-7 text-slate-600'>
                    Existing groundwater levels and local geological conditions
                    should be evaluated before selecting the recharge method.
                  </p>
                </div>

                {/* Water Quality */}
                <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                  <h3 className='font-bold text-slate-900'>Water Quality:</h3>

                  <p className='mt-2 leading-7 text-slate-600'>
                    Rainwater entering the recharge system should be
                    appropriately filtered to minimize the entry of undesirable
                    contaminants.
                  </p>
                </div>

                {/* Available Space */}
                <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                  <h3 className='font-bold text-slate-900'>Available Space:</h3>

                  <p className='mt-2 leading-7 text-slate-600'>
                    The location should provide sufficient space for
                    construction, inspection, maintenance, and safe operation.
                  </p>
                </div>

                {/* Existing Infrastructure */}
                <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2'>
                  <h3 className='font-bold text-slate-900'>
                    Existing Infrastructure:
                  </h3>

                  <p className='mt-2 leading-7 text-slate-600'>
                    Underground electrical cables, pipelines, foundations,
                    drainage lines, and other utilities should be considered
                    during planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          MAINTENANCE
      ========================================================= */}
        <section className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
          <div className='max-w-5xl'>
            <h2 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
              Maintenance of a Recharge Pit
            </h2>

            <p className='mt-6 text-lg leading-8 text-slate-600'>
              Regular maintenance is necessary to prevent clogging and maintain
              infiltration performance.
            </p>

            <p className='mt-6 text-lg font-semibold text-slate-900'>
              Important maintenance activities include:
            </p>

            <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {[
                'Cleaning the rooftop or catchment area',
                'Removing leaves and debris from collection channels',
                'Cleaning the inlet and filtration chamber',
                'Removing accumulated silt',
                'Inspecting filter media',
                'Checking inlet and overflow pipes',
                'Ensuring the pit remains free from unwanted waste',
                'Inspecting the structure before and during the rainy season'
              ].map(item => (
                <div
                  key={item}
                  className='flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5'
                >
                  <span className='mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700'>
                    ✓
                  </span>

                  <span className='leading-7 text-slate-600'>{item}</span>
                </div>
              ))}
            </div>

            <p className='mt-7 text-lg leading-8 text-slate-600'>
              The maintenance frequency depends on rainfall, catchment
              conditions, surrounding environment, and the amount of sediment
              entering the system.
            </p>
          </div>
        </section>

        {/* =========================================================
          RECHARGE PIT VS STORAGE
      ========================================================= */}
        <section className='bg-sky-50'>
          <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
            <div className='max-w-5xl'>
              <h2 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
                Recharge Pit vs. Rainwater Storage
              </h2>

              <p className='mt-6 text-lg leading-8 text-slate-600'>
                A recharge pit and a rainwater storage system serve different
                primary purposes.
              </p>

              <div className='mt-8 grid gap-6 md:grid-cols-2'>
                {/* Storage System */}
                <div className='rounded-3xl border border-slate-200 bg-white p-7 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-xl'>
                    💧
                  </div>

                  <p className='mt-5 text-lg leading-8 text-slate-600'>
                    A <strong>storage system</strong> collects rainwater and
                    keeps it available for later use, such as gardening,
                    cleaning, flushing, or other suitable applications.
                  </p>
                </div>

                {/* Recharge Pit */}
                <div className='rounded-3xl border border-sky-200 bg-white p-7 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-xl'>
                    ↓
                  </div>

                  <p className='mt-5 text-lg leading-8 text-slate-600'>
                    A <strong>recharge pit</strong> is primarily designed to
                    allow suitable collected rainwater to infiltrate into the
                    ground and support groundwater recharge.
                  </p>
                </div>
              </div>

              <div className='mt-6 rounded-2xl border border-sky-100 bg-white p-6 shadow-sm'>
                <p className='text-lg leading-8 text-slate-600'>
                  In some projects, both approaches can be combined. Rainwater
                  can be stored for reuse while excess water is directed toward
                  an appropriate recharge structure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          SUSTAINABLE APPROACH
      ========================================================= */}
        <section className='relative overflow-hidden bg-slate-900 text-white'>
          <div className='absolute -left-40 top-0 h-96 w-96 rounded-full bg-sky-600/20 blur-3xl' />
          <div className='absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl' />

          <div className='relative mx-auto max-w-7xl px-6 py-16 lg:px-8'>
            <div className='max-w-5xl'>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                A Sustainable Approach to Groundwater Conservation
              </h2>

              <p className='mt-6 text-lg leading-8 text-slate-300'>
                A{' '}
                <strong className='text-white'>
                  Rainwater Harvesting Recharge Pit
                </strong>{' '}
                is a practical solution for managing rainwater and supporting
                groundwater recharge where local site conditions are suitable.
                By collecting rainwater from rooftops and other appropriate
                catchment areas, filtering it, and allowing it to infiltrate
                into the ground, the system can help reduce runoff and make
                better use of seasonal rainfall.
              </p>

              <p className='mt-5 text-lg leading-8 text-slate-300'>
                However, the effectiveness of a recharge pit depends heavily on
                proper design, suitable soil and geological conditions, adequate
                filtration, and regular maintenance.
              </p>

              <p className='mt-5 text-lg leading-8 text-slate-300'>
                For residential, commercial, institutional, or industrial
                projects, a site-specific assessment can help determine the
                appropriate pit size, filtration arrangement, location, and
                recharge method.
              </p>

              {/* Final Statement */}
              <div className='mt-10 rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm'>
                <p className='text-xl font-semibold leading-9 text-white sm:text-2xl'>
                  Capture rainwater, recharge the ground, and make every drop
                  contribute to a more sustainable water future.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default RainwaterHarvestingRechargePit
