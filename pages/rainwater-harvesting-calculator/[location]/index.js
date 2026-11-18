import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import { CityData } from '@/components/constant'
import DynamicMetatag from '@/components/Schema/DynamicMetatag'
import DynamicSchema from '@/components/Schema/DynamicSchema'
import RainwaterEstimator from '@/components/Calculator/RWHCalculator'

const RainwaterHarvestingCalculationLocation = ({ city, slug }) => {
  const heading = 'Rainwater Harvesting Calculation'
  const subheading = 'Modular Rainwater Harvesting System'
  const page = 'rainwater-harvesting-calculator'
  const data = {
    title: `${heading} in ${city.city}` + ' ' + '|' + ' ' + 'GeoTech Ecosystem',
    desc: `Get the accurate ${heading} in ${city.city}. We have high-quality ${subheading} for your requirement. Our ${subheading} Service Provider in ${city.city} will help you & easy to install. Contact now`,
    keyword: `${heading} in ${city.city}, ${subheading} in ${city.city}, Rainwater Harvesting Tank in ${city.city}, Polymer Type Rainwater Harvesting System in ${city.city}, Storm water Management in ${city.city}`,
    canonical: `https://www.inrainwaterharvesting.com/${page}/${slug}`,
    ogTitle:
      `${heading} in ${city.city}` + ' ' + '|' + ' ' + 'GeoTech Ecosystem',
    ogDescription: `Get the accurate ${heading} in ${city.city}. We have high-quality ${subheading} for your requirement. Our ${subheading} Service Provider in ${city.city} will help you & easy to install. Contact now`,
    ogUrl: `https://www.inrainwaterharvesting.com/${page}/${slug}`,
    twittertitle:
      `${heading} in ${city.city}` + ' ' + '|' + ' ' + 'GeoTech Ecosystem',
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
      <main className='min-h-screen bg-[#F5F8F5] text-[#17231B]'>
        {/* =========================================================
          HERO
      ========================================================= */}
        <section className='relative overflow-hidden bg-[#103D2B]'>
          {/* Decorative shapes */}
          <div className='absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#8BC34A]/10 blur-3xl' />
          <div className='absolute -bottom-48 -left-32 h-[450px] w-[450px] rounded-full bg-[#45A58B]/10 blur-3xl' />

          <div className='relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12'>
            <div className='grid items-end gap-12 lg:grid-cols-[1fr_360px]'>
              <div className='max-w-4xl'>
                {/* Location badge */}
                <div className='mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur'>
                  <span className='h-2 w-2 rounded-full bg-[#A8D65D]' />
                  {city.city} Rainwater Harvesting
                </div>

                <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl'>
                  Rainwater Harvesting Calculation in {city.city}
                </h1>

                <p className='mt-6 max-w-3xl text-xl leading-8 text-white/70'>
                  A simple way to find out how much water your {city.city} roof
                  can collect, and what to do with it.
                </p>
              </div>

              {/* Hero stat card */}
              <div className='rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-[#A8D65D]/15'>
                    <svg
                      width='22'
                      height='22'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#A8D65D'
                      strokeWidth='1.8'
                    >
                      <path d='M12 3v18' />
                      <path d='M5 10l7-7 7 7' />
                      <path d='M5 21h14' />
                    </svg>
                  </div>

                  <div>
                    <p className='text-xs font-medium uppercase tracking-wider text-white/45'>
                      Planning figure
                    </p>
                    <p className='mt-1 text-2xl font-bold text-white'>
                      {city.city}'s Rainfall
                    </p>
                  </div>
                </div>

                <div className='mt-5 border-t border-white/10 pt-5'>
                  <p className='text-sm leading-6 text-white/60'>
                    {city.city} rainfall figure in mm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          INTRO
      ========================================================= */}
        <section className='mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12'>
          <div className='grid gap-10 lg:grid-cols-[1.1fr_0.9fr]'>
            <div>
              <SectionTitle
                title={`Why ${city.city} Suits Rainwater Harvesting`}
              />

              <p className='mt-7 text-lg leading-8 text-[#536159]'>
                {city.city} gets most of its rain in a few loud months. From
                June to September the sky opens up, terraces overflow, and clean
                water rushes into the nearest drain. Come April, many homes and
                societies are booking tankers while borewells run low. Rainwater
                harvesting closes that gap, and the first step is a bit of
                simple maths. This page walks you through the calculation using
                numbers that actually fit {city.city}.
              </p>

              <div className='rounded-3xl hidden md:block max-w-xl m-auto mt-5 border border-[#DCE6DE] bg-white p-7 shadow-[0_20px_60px_rgba(16,61,43,0.07)]'>
                <div className='mb-6 flex items-center justify-between'>
                  <div>
                    <p className='text-xs font-bold uppercase tracking-[0.15em] text-[#6C7A71]'>
                      Geotech Ecosystem
                    </p>
                    <h3 className='mt-1 text-3xl font-bold text-[#103D2B]'>
                      {city.city} at a glance
                    </h3>
                  </div>

                  <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF3E3]'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#568B32'
                      strokeWidth='1.7'
                    >
                      <path d='M12 3C8.5 7.5 6 10.5 6 14a6 6 0 0 0 12 0c0-3.5-2.5-6.5-6-11Z' />
                    </svg>
                  </div>
                </div>

                <p className='text-sm leading-7 text-[#68756D]'>
                  {city.city}'s long-term rainfall sits somewhere around 700 to
                  750 mm a year, and roughly three-quarters of it arrives
                  between June and September. That is a generous supply. A 100
                  square metre terrace receives tens of thousands of litres in a
                  normal year.
                </p>

                <div className='mt-5 rounded-2xl bg-[#F4F7F3] p-5'>
                  <p className='text-sm leading-7 text-[#536159]'>
                    The catch is timing. Rain comes in short, heavy bursts and
                    then stays away for months. So the real question is not only
                    how much you can catch, but where you will keep it: in a
                    tank for use at home, or underground through a recharge pit
                    or well.
                  </p>
                </div>
              </div>
            </div>

            <RainwaterEstimator city={city} />

            <div className='rounded-3xl block md:hidden max-w-xl m-auto mt-5 border border-[#DCE6DE] bg-white p-7 shadow-[0_20px_60px_rgba(16,61,43,0.07)]'>
              <div className='mb-6 flex items-center justify-between'>
                <div>
                  <p className='text-xs font-bold uppercase tracking-[0.15em] text-[#6C7A71]'>
                    Geotech Ecosystem
                  </p>
                  <h3 className='mt-1 text-3xl font-bold text-[#103D2B]'>
                    {city.city} at a glance
                  </h3>
                </div>

                <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF3E3]'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#568B32'
                    strokeWidth='1.7'
                  >
                    <path d='M12 3C8.5 7.5 6 10.5 6 14a6 6 0 0 0 12 0c0-3.5-2.5-6.5-6-11Z' />
                  </svg>
                </div>
              </div>

              <p className='text-sm leading-7 text-[#68756D]'>
                {city.city}'s long-term rainfall sits somewhere around 700 to
                750 mm a year, and roughly three-quarters of it arrives between
                June and September. That is a generous supply. A 100 square
                metre terrace receives tens of thousands of litres in a normal
                year.
              </p>

              <div className='mt-5 rounded-2xl bg-[#F4F7F3] p-5'>
                <p className='text-sm leading-7 text-[#536159]'>
                  The catch is timing. Rain comes in short, heavy bursts and
                  then stays away for months. So the real question is not only
                  how much you can catch, but where you will keep it: in a tank
                  for use at home, or underground through a recharge pit or
                  well.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          FORMULA
      ========================================================= */}
        <section className='bg-white'>
          <div className='mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12'>
            <SectionTitle title='The Calculation in Plain Words' />

            <div className='mt-8 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center'>
              <p className='text-lg leading-8 text-[#536159]'>
                Here is the formula behind every rainwater estimate:
              </p>

              <div className='overflow-hidden rounded-3xl border border-[#D9E5DB] bg-[#103D2B] p-7 shadow-lg'>
                <p className='text-center text-lg font-semibold leading-8 text-white sm:text-xl'>
                  Harvestable water (litres) = Roof area (m²) × Rainfall (mm) ×
                  Runoff coefficient
                </p>
              </div>
            </div>

            <div className='mt-8 max-w-5xl'>
              <p className='text-lg leading-8 text-[#536159]'>
                It works because 1 mm of rain on 1 square metre of surface is
                exactly 1 litre. Multiply your roof area by the rainfall and you
                know how much water lands on you. The last two numbers are the
                reality check. They account for water that splashes away, soaks
                into the surface, or is thrown out on purpose during the first
                dirty minutes of a shower.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
          STEPS
      ========================================================= */}
        <section className='bg-[#F5F8F5]'>
          <div className='mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12'>
            <div className='grid gap-5 lg:grid-cols-3'>
              <StepCard number='01' title='Step 1: Measure Your Roof'>
                Use the flat footprint of the roof as seen from above, not the
                slanted surface. A terrace of 10 m by 12 m gives you 120 square
                metres. If you have more than one roof section draining to the
                same place, add them up.
                <br />
                <br />
                Most {city.city} flats and plots are described in square feet,
                so convert first. Divide square feet by 10.76 to get square
                metres. A 1,200 sq ft roof is about 111 m².
              </StepCard>

              <StepCard
                number='02'
                title='Step 2: Pick a Sensible Rainfall Number'
              >
                For planning, 700 mm is a fair figure for {city.city}. If you
                prefer to be cautious, use 600 mm. Avoid using last year's rain,
                because the city swings quite a bit. The monsoon of 2023 gave
                the Shivajinagar station under 450 mm, while 2025 went past 800
                mm. A planning number should sit somewhere in the middle, not at
                either extreme.
              </StepCard>

              <StepCard
                number='03'
                title='Step 3: Choose the Runoff Coefficient'
              >
                This number tells you how much of the rain actually runs off
                your roof instead of being absorbed. Smooth, hard surfaces send
                more water your way.
              </StepCard>
            </div>
          </div>
        </section>

        {/* =========================================================
          RUNOFF TABLE
      ========================================================= */}
        <section className='bg-white'>
          <div className='mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12'>
            <div className='mx-auto max-w-5xl'>
              <div className='overflow-hidden rounded-3xl border border-[#DCE6DE] bg-white shadow-[0_15px_50px_rgba(16,61,43,0.06)]'>
                <div className='grid grid-cols-2 bg-[#103D2B] px-6 py-5 text-sm font-semibold text-white sm:px-8'>
                  <div>Roof type</div>
                  <div>Typical runoff coefficient</div>
                </div>

                <RunoffRow type='GI or metal sheet' value='0.90 to 0.95' />
                <RunoffRow
                  type='Mangalore or clay tiles'
                  value='0.75 to 0.90'
                />
                <RunoffRow type='RCC terrace' value='0.70 to 0.85' />
                <RunoffRow
                  type='Terrace garden or planted roof'
                  value='0.25 to 0.50'
                  last
                />
              </div>

              <div className='mt-6 rounded-2xl bg-[#EAF3E3] p-5'>
                <p className='text-sm leading-7 text-[#53654E]'>
                  For collection efficiency, 0.85 to 0.90 is a reasonable guess
                  for a system with a first-flush diverter and a filter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          WORKED EXAMPLES
      ========================================================= */}
        <section className='bg-[#F5F8F5]'>
          <div className='mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12'>
            <SectionTitle title='Two Worked Examples' />

            <div className='mt-10 grid gap-6 lg:grid-cols-2'>
              {/* Example 1 */}
              <ExampleCard
                title={`A bungalow in ${city.city}.`}
                description='The RCC terrace is 120 m², rainfall is 700 mm, the runoff coefficient is 0.8 and efficiency is 0.9.'
                calculations={[
                  '120 × 700 = 84,000 litres',
                  '84,000 × 0.8 = 67,200 litres',
                  '67,200 × 0.9 = 60,480 litres a year'
                ]}
                result='60,480 litres a year'
              />

              {/* Example 2 */}
              <ExampleCard
                title={`A housing society in ${city.city}.`}
                description='The combined terrace area is 800 m², with the same assumptions.'
                calculations={[
                  '800 × 700 = 560,000 litres',
                  '560,000 × 0.8 = 448,000 litres',
                  '448,000 × 0.9 = 403,200 litres a year'
                ]}
                result='403,200 litres a year'
              />
            </div>

            <div className='mt-8 rounded-3xl bg-[#103D2B] p-7 sm:p-8'>
              <p className='text-lg leading-8 text-white/75'>
                That is a lot of water, from a roof that already exists. Even if
                you only manage to store a part of it, the savings on tanker
                trips add up quickly.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
          TANK OR RECHARGE
      ========================================================= */}
        <section className='bg-white'>
          <div className='mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12'>
            <SectionTitle title='Tank or Recharge Pit?' />

            <div className='mt-8 rounded-3xl border border-[#DCE6DE] bg-[#F9FBF9] p-7 sm:p-9'>
              <p className='text-lg leading-8 text-[#536159]'>
                Because {city.city}'s rain falls in a short season, a tank alone
                rarely captures everything. A tank holds enough for the dry
                months. Anything beyond that is better sent underground, so it
                can help your borewell or open well instead of flowing out to
                the road. Much of {city.city} sits on hard basalt rock, where
                groundwater is held in cracks and weathered layers, so recharge
                works best when the water is clean and slowly released.
              </p>

              <div className='mt-9'>
                <p className='font-semibold text-[#103D2B]'>
                  A simple way to size a tank:
                </p>

                <div className='mt-5 grid gap-3 sm:grid-cols-2'>
                  <NumberedItem number='1'>
                    Estimate how many litres you will use per day from harvested
                    water.
                  </NumberedItem>

                  <NumberedItem number='2'>
                    Count the dry days you want to cover.
                  </NumberedItem>

                  <NumberedItem number='3'>
                    Multiply the two numbers.
                  </NumberedItem>

                  <NumberedItem number='4'>
                    Compare the result with your yearly estimate. If your target
                    is much bigger than your harvest, choose a smaller tank and
                    add a recharge pit for the rest.
                  </NumberedItem>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          LOCAL RULES
      ========================================================= */}
        <section className='bg-[#103D2B]'>
          <div className='mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12'>
            <div className='grid gap-8 lg:grid-cols-[0.35fr_0.65fr]'>
              <div>
                <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10'>
                  <svg
                    width='26'
                    height='26'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#A8D65D'
                    strokeWidth='1.7'
                  >
                    <path d='M12 3v18' />
                    <path d='M5 10l7-7 7 7' />
                    <path d='M5 21h14' />
                  </svg>
                </div>

                <h2 className='mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                  Local Rules and Rebates
                </h2>
              </div>

              <div className='rounded-3xl border border-white/10 bg-white/5 p-7'>
                <p className='text-lg leading-8 text-white/70'>
                  The {city.city} Municipal Corporation has reportedly required
                  rainwater harvesting for new building approvals since 2006,
                  and it has offered a property tax rebate for properties with
                  working systems. Reports differ on the exact percentage,
                  ranging from 5 to 10 percent, and the rules can differ in
                  Pimpri Chinchwad and PMRDA areas. Check the current terms with
                  your civic office before you plan around them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          TIPS
      ========================================================= */}
        <section className='bg-[#F5F8F5]'>
          <div className='mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12'>
            <SectionTitle title={`Tips for ${city.city} Roofs`} />

            <div className='mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
              <TipCard
                title='Clean the terrace in May.'
                text='Pre-monsoon dust, leaves and pigeon droppings are the main source of dirty first rain.'
              />

              <TipCard
                title='Fit a first-flush diverter.'
                text='It throws away the dirtiest first few minutes of each shower.'
              />

              <TipCard
                title='Check gutters and downpipes.'
                text='Small leaks and blockages waste more water than you would expect.'
              />

              <TipCard
                title='Cover the tank and add mesh at the inlets.'
                text='This keeps out mosquitoes, algae and debris.'
              />

              <TipCard
                title='Test the system before July.'
                text='Pour a bucket of water on the terrace and watch where it goes.'
              />

              <TipCard
                title='Do not drink it untreated.'
                text='Filter and disinfect it first, or use it for gardening, washing and flushing.'
              />
            </div>
          </div>
        </section>

        {/* =========================================================
          COMMON MISTAKES
      ========================================================= */}
        <section className='bg-white'>
          <div className='mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12'>
            <SectionTitle title='Common Mistakes' />

            <div className='mt-10 grid gap-4 lg:grid-cols-2'>
              <MistakeCard title='Measuring the sloped roof surface.'>
                Use the horizontal footprint.
              </MistakeCard>

              <MistakeCard title='Skipping the losses.'>
                Multiplying area by rainfall alone gives a number you will never
                collect.
              </MistakeCard>

              <MistakeCard title='Building an oversized tank.'>
                Match the tank to your real use, and let a recharge pit handle
                the surplus.
              </MistakeCard>

              <MistakeCard title='Forgetting maintenance.'>
                Clean the roof and filters before the rains and check again
                after September.
              </MistakeCard>
            </div>
          </div>
        </section>

        {/* =========================================================
          FAQ
      ========================================================= */}
        <section className='bg-[#F5F8F5]'>
          <div className='mx-auto max-w-4xl px-6 py-16 sm:px-8'>
            <SectionTitle title='Frequently Asked Questions' />

            <div className='mt-10 space-y-4'>
              <Faq
                question={`How much rain does ${city.city} get?`}
                answer={`A fair planning figure is about 700 mm a year, most of it between June and September. Actual rain changes every year.`}
              />

              <Faq
                question='How accurate is this calculation?'
                answer='It is a solid planning estimate, not a guarantee. Weather, roof condition and system quality all change the real result.'
              />

              <Faq
                question='Can I do this for an apartment building?'
                answer='Yes. Add up the roof area of the whole building and use the same formula. Many societies share one tank and one recharge system.'
              />

              <Faq
                question='Do I need a recharge well or a tank?'
                answer='Often both. A tank covers daily use, and a recharge pit takes the extra water that a tank cannot hold.'
              />
            </div>
          </div>
        </section>

        {/* =========================================================
          FINAL CTA
      ========================================================= */}
        <section className='relative overflow-hidden bg-[#103D2B]'>
          <div className='absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#8BC34A]/10 blur-3xl' />

          <div className='relative mx-auto max-w-4xl px-6 py-16 text-center sm:px-8'>
            <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A8D65D]/15'>
              <svg
                width='27'
                height='27'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#A8D65D'
                strokeWidth='1.7'
              >
                <path d='M12 3v18' />
                <path d='M5 10l7-7 7 7' />
                <path d='M5 21h14' />
              </svg>
            </div>

            <h2 className='mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl'>
              Ready to Work Out Your Number?
            </h2>

            <p className='mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70'>
              Grab your roof area, use your area's rainfall figure, pick the
              right runoff coefficient and multiply. In a few minutes you will
              know how many litres your roof could save this monsoon, and
              whether a small tank, a recharge pit or a full system makes sense
              for your home or society.
            </p>

            <div className='mx-auto mt-9 h-px max-w-xs bg-white/10' />

            <p className='mt-8 text-lg font-medium leading-8 text-[#DCEBCB]'>
              Rainwater harvesting starts with a number. Now you know where to
              begin.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

const SectionTitle = ({ title }) => {
  return (
    <div>
      <div className='mb-4 h-1 w-12 rounded-full bg-[#8BC34A]' />

      <h2 className='text-3xl font-bold tracking-tight text-[#103D2B] sm:text-4xl'>
        {title}
      </h2>
    </div>
  )
}

const StepCard = ({ number, title, children }) => {
  return (
    <article className='group rounded-3xl border border-[#DCE6DE] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
      <div className='flex items-center justify-between'>
        <span className='text-5xl font-black text-[#E5EDE5]'>{number}</span>

        <span className='h-2 w-2 rounded-full bg-[#8BC34A]' />
      </div>

      <h3 className='mt-6 text-xl font-bold text-[#103D2B]'>{title}</h3>

      <p className='mt-4 text-sm leading-7 text-[#657169]'>{children}</p>
    </article>
  )
}

const RunoffRow = ({ type, value, last = false }) => {
  return (
    <div
      className={`grid grid-cols-2 px-6 py-5 sm:px-8 ${
        !last ? 'border-b border-[#E8EEE9]' : ''
      }`}
    >
      <div className='text-sm font-medium text-[#35443A]'>{type}</div>

      <div className='text-sm font-bold text-[#568B32]'>{value}</div>
    </div>
  )
}

const ExampleCard = ({ title, description, calculations, result }) => {
  return (
    <article className='overflow-hidden rounded-3xl border border-[#DCE6DE] bg-white shadow-sm'>
      <div className='bg-[#103D2B] p-7'>
        <p className='text-xs font-bold uppercase tracking-[0.15em] text-[#A8D65D]'>
          Worked example
        </p>

        <h3 className='mt-3 text-2xl font-bold text-white'>{title}</h3>

        <p className='mt-3 text-sm leading-7 text-white/65'>{description}</p>
      </div>

      <div className='p-7'>
        <div className='space-y-3'>
          {calculations.map((calculation, index) => (
            <div
              key={calculation}
              className={`rounded-2xl px-5 py-4 text-sm ${
                index === calculations.length - 1
                  ? 'bg-[#EAF3E3] font-semibold text-[#103D2B]'
                  : 'bg-[#F5F8F5] text-[#5D6961]'
              }`}
            >
              {calculation}
            </div>
          ))}
        </div>

        <div className='mt-6 flex items-end justify-between gap-4 border-t border-[#E6ECE7] pt-6'>
          <div>
            <p className='text-xs font-bold uppercase tracking-wider text-[#78847D]'>
              Harvest estimate
            </p>

            <p className='mt-1 text-2xl font-bold text-[#103D2B]'>{result}</p>
          </div>

          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF3E3] text-[#568B32]'>
            ✓
          </div>
        </div>
      </div>
    </article>
  )
}

const NumberedItem = ({ number, children }) => {
  return (
    <div className='flex gap-4 rounded-2xl border border-[#E2EAE3] bg-white p-5'>
      <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#103D2B] text-xs font-bold text-white'>
        {number}
      </div>

      <p className='text-sm leading-7 text-[#5D6961]'>{children}</p>
    </div>
  )
}

const TipCard = ({ title, text }) => {
  return (
    <article className='rounded-2xl border border-[#DCE6DE] bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg'>
      <div className='mb-5 flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF3E3] text-sm font-bold text-[#568B32]'>
        ✓
      </div>

      <h3 className='font-bold text-[#103D2B]'>{title}</h3>

      <p className='mt-2 text-sm leading-7 text-[#657169]'>{text}</p>
    </article>
  )
}

const MistakeCard = ({ title, children }) => {
  return (
    <article className='rounded-2xl border border-[#E5EAE6] bg-[#FAFCFA] p-6'>
      <div className='flex gap-4'>
        <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF0E7] font-bold text-[#C56C35]'>
          !
        </div>

        <div>
          <h3 className='font-bold text-[#103D2B]'>{title}</h3>

          <p className='mt-2 text-sm leading-7 text-[#657169]'>{children}</p>
        </div>
      </div>
    </article>
  )
}

const Faq = ({ question, answer }) => {
  return (
    <details className='group rounded-2xl border border-[#DCE6DE] bg-white'>
      <summary className='flex cursor-pointer list-none items-center justify-between gap-6 p-6 font-semibold text-[#103D2B] [&::-webkit-details-marker]:hidden'>
        <span>{question}</span>

        <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDF4E9] text-xl font-light text-[#568B32] transition duration-300 group-open:rotate-45'>
          +
        </span>
      </summary>

      <div className='border-t border-[#E8EEE9] px-6 pb-6 pt-5'>
        <p className='text-sm leading-7 text-[#657169]'>{answer}</p>
      </div>
    </details>
  )
}

export default RainwaterHarvestingCalculationLocation

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
