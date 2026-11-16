import RainwaterEstimator from '@/components/Calculator/RWHCalculator'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import StaticMetatag from '@/components/Schema/StaticMetatag'
import StaticSchema from '@/components/Schema/StaticSchema'
import React from 'react'

const RainwaterHarvestingCalculator = () => {
  const data = {
    title: 'Rainwater Harvesting Calculator | Rainwater Calculation',
    desc: 'Calculate the amount of rainwater you can harvest from your roof with our easy-to-use calculator. Enter your roof area and local rainfall to find out how much water you can save.',
    keyword:
      'rainwater harvesting calculator, rainwater harvesting calculation, rainwater harvesting estimation, rainwater harvesting capacity, rainwater harvesting efficiency, rainwater harvesting potential, rainwater harvesting volume, rainwater harvesting formula',
    canonical:
      'https://www.inrainwaterharvesting.com/rainwater-harvesting-calculator',
    ogTitle:
      'Rainwater Harvesting Calculator | Rainwater Calculation',
    ogDescription:
      'Calculate the amount of rainwater you can harvest from your roof with our easy-to-use calculator. Enter your roof area and local rainfall to find out how much water you can save.',
    ogUrl:
      'https://www.inrainwaterharvesting.com/rainwater-harvesting-calculator',
    twittertitle:
      'Rainwater Harvesting Calculator | Rainwater Calculation',
    twitterdescription:
      'Calculate the amount of rainwater you can harvest from your roof with our easy-to-use calculator. Enter your roof area and local rainfall to find out how much water you can save.'
  }
  return (
    <>
      <StaticMetatag data={data} />
      <StaticSchema />
      <Navbar />
      <main className='min-h-screen bg-[#F6F8F5] text-[#17231B]'>
        {/* Hero */}
        <section className='relative overflow-hidden bg-[#123C2A]'>
          <div className='absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#8CC63F]/10 blur-3xl' />
          <div className='absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#55B9A5]/10 blur-3xl' />

          <div className='relative mx-auto max-w-7xl px-6 py-16 lg:px-8'>
            <div className='max-w-4xl'>
              <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur'>
                <span className='h-2 w-2 rounded-full bg-[#8CC63F]' />
                Geotech Ecosystem
              </div>

              <h1 className='text-4xl font-bold tracking-tight text-white lg:text-5xl'>
                Rainwater Harvesting Calculator
              </h1>

              <p className='mt-5 max-w-3xl text-xl leading-8 text-white/75'>
                Find out how much water your roof can collect, and what size
                tank you actually need.
              </p>

              <ul className='mt-8 flex flex-wrap gap-3'>
                <li className='rounded-full bg-white/10 px-4 py-2 text-sm text-white/80'>
                  Rooftop area
                </li>
                <li className='rounded-full bg-white/10 px-4 py-2 text-sm text-white/80'>
                  Local rainfall
                </li>
                <li className='rounded-full bg-white/10 px-4 py-2 text-sm text-white/80'>
                  Rainwater runoff coefficient
                </li>
                <li className='rounded-full bg-white/10 px-4 py-2 text-sm text-white/80'>
                  Modular Rainwater Harvesting Calculator
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className='mx-auto max-w-7xl px-6 py-10 lg:px-8'>
          <div className='grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start'>
            <div>
              <p className='text-lg leading-8 text-[#4B5A50]'>
                Every monsoon, thousands of litres of clean water land on your
                roof and disappear down the drain. Meanwhile, you pay for tanker
                deliveries, run the borewell a little deeper, or watch the water
                table drop year after year. Rainwater harvesting is one of the
                simplest ways to change that, and it starts with a single
                question: how much water can my roof really give me?
              </p>

              <p className='mt-6 text-lg leading-8 text-[#4B5A50]'>
                This calculator answers that in under a minute. Enter a few
                details about your roof and your local rainfall, and you will
                see how many litres of water you can save a year, litres used in
                a day and a tank size that makes sense for your household. No
                jargon, no sign-up, no guesswork.
              </p>

              <div className='rounded-3xl max-w-lg md:max-w-xl m-auto border hidden md:block mt-5 border-[#DDE6DF] bg-white p-6 shadow-[0_20px_60px_rgba(18,60,42,0.08)]'>
                <div className='mb-5 flex items-center justify-between'>
                  <div>
                    <p className='text-sm font-semibold text-[#123C2A]'>
                      Quick estimate
                    </p>
                    <p className='mt-1 text-sm text-[#718078]'>
                      Start with your roof details
                    </p>
                  </div>

                  <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF4E1] text-[#4E8A24]'>
                    <svg
                      width='22'
                      height='22'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.8'
                    >
                      <path d='M3 12h18' />
                      <path d='M12 3v18' />
                      <path d='M5.5 7.5 12 3l6.5 4.5' />
                      <path d='M5 16h14' />
                    </svg>
                  </div>
                </div>

                <div className='space-y-3'>
                  {['Roof (catchment) area', 'Annual rainfall'].map(item => (
                    <div
                      key={item}
                      className='flex items-center justify-between rounded-2xl border border-[#E5EBE6] bg-[#F8FAF8] px-4 py-3'
                    >
                      <span className='text-sm font-medium text-[#35443A]'>
                        {item}
                      </span>
                      <span className='text-xs text-[#8A968E]'>Required</span>
                    </div>
                  ))}
                </div>

                <div className='mt-5 rounded-2xl bg-[#123C2A] p-4'>
                  <p className='text-xs font-medium uppercase tracking-wider text-white/50'>
                    Result
                  </p>
                  <p className='mt-1 text-sm text-white/80'>
                    Estimated yearly harvest
                  </p>
                </div>

                <div className='mt-5'>
                  <p className='border-t border-slate-200 pt-3 font-semibold text-sm leading-relaxed text-slate-500'>
                    Estimate = rooftop area (m²) × annual rainfall (mm) × {0.85}
                    . It is a planning figure; actual collection depends on your
                    roof, filters and how the rain falls.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual calculator card */}
            <RainwaterEstimator />

            <div className='rounded-3xl max-w-lg md:max-w-xl m-auto border block md:hidden mt-5 border-[#DDE6DF] bg-white p-6 shadow-[0_20px_60px_rgba(18,60,42,0.08)]'>
              <div className='mb-5 flex items-center justify-between'>
                <div>
                  <p className='text-sm font-semibold text-[#123C2A]'>
                    Quick estimate
                  </p>
                  <p className='mt-1 text-sm text-[#718078]'>
                    Start with your roof details
                  </p>
                </div>

                <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF4E1] text-[#4E8A24]'>
                  <svg
                    width='22'
                    height='22'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.8'
                  >
                    <path d='M3 12h18' />
                    <path d='M12 3v18' />
                    <path d='M5.5 7.5 12 3l6.5 4.5' />
                    <path d='M5 16h14' />
                  </svg>
                </div>
              </div>

              <div className='space-y-3'>
                {['Roof (catchment) area', 'Annual rainfall'].map(item => (
                  <div
                    key={item}
                    className='flex items-center justify-between rounded-2xl border border-[#E5EBE6] bg-[#F8FAF8] px-4 py-3'
                  >
                    <span className='text-sm font-medium text-[#35443A]'>
                      {item}
                    </span>
                    <span className='text-xs text-[#8A968E]'>Required</span>
                  </div>
                ))}
              </div>

              <div className='mt-5 rounded-2xl bg-[#123C2A] p-4'>
                <p className='text-xs font-medium uppercase tracking-wider text-white/50'>
                  Result
                </p>
                <p className='mt-1 text-sm text-white/80'>
                  Estimated yearly harvest
                </p>
              </div>

              <div className='mt-5'>
                <p className='border-t border-slate-200 pt-3 font-semibold text-sm leading-relaxed text-slate-500'>
                  Estimate = rooftop area (m²) × annual rainfall (mm) × {0.85}.
                  It is a planning figure; actual collection depends on your
                  roof, filters and how the rain falls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className='bg-white'>
          <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
            <SectionHeading title='How the Calculator Works' />

            <div className='mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]'>
              <div className='rounded-3xl bg-[#123C2A] p-8 text-white'>
                <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#A7D65C]'>
                  <span className='text-xl font-bold'>01</span>
                </div>

                <p className='mt-6 text-lg leading-8 text-white/75'>
                  The tool does something very simple. It measures how much rain
                  falls on your roof, subtracts what is lost along the way, and
                  shows you what is left to store or send underground. Think of
                  it as a quick, honest estimate you can use before you spend a
                  rupee on pipes, filters or tanks.
                </p>
              </div>

              <div>
                <p className='mb-5 text-base font-semibold text-[#123C2A]'>
                  You provide four things:
                </p>

                <div className='space-y-3'>
                  <InfoCard
                    title='Roof (catchment) area:'
                    text='the flat, horizontal area of the surface that collects rain, in square metres or square feet.'
                  />
                  <InfoCard
                    title='Annual rainfall:'
                    text='the total rain your area receives in a year, in millimetres.'
                  />
                  <InfoCard
                    title='Roof type:'
                    text='this decides how much water runs off instead of soaking in or evaporating.'
                  />
                  <InfoCard
                    title='Collection efficiency:'
                    text='how much of that runoff actually reaches your tank after first-flush diversion, filters and small leaks.'
                  />
                </div>

                <p className='mt-6 text-base leading-7 text-[#5D6A62]'>
                  Press calculate, and the result appears instantly. Change any
                  number to see how the answer shifts. That is the best way to
                  understand what matters most for your own home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before you start */}
        <section className='bg-[#F6F8F5]'>
          <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
            <SectionHeading title='What You Need Before You Start' />

            <div className='mt-10 grid gap-5 md:grid-cols-3'>
              <TipCard number='01' title='Measure your roof area.'>
                Use the length and width of the roof as seen from above, not the
                slanted surface. A pitched roof catches rain over its footprint,
                so the footprint is what counts. If your terrace is 10 m by 12
                m, your catchment area is 120 square metres. If you have several
                roof sections draining to the same point, add them together.
              </TipCard>

              <TipCard number='02' title='Find your local rainfall.'>
                Your city's weather department publishes yearly averages, and
                most local municipal or groundwater boards share them too. Use a
                long-term average rather than last year's figure, since a single
                unusually wet or dry season can mislead you.
              </TipCard>

              <TipCard number='03' title='Pick your roof material.'>
                Be honest here. A tiled roof and a concrete slab with an old
                waterproofing layer behave very differently, and the calculator
                adjusts for that.
              </TipCard>
            </div>
          </div>
        </section>

        {/* Formula */}
        <section className='bg-[#EAF4E1]'>
          <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
            <SectionHeading title='The Formula Behind the Numbers' />

            <p className='mt-8 max-w-4xl text-lg leading-8 text-[#4B5A50]'>
              Here is the calculation running quietly in the background:
            </p>

            <div className='mt-6 overflow-x-auto rounded-3xl border border-[#D4E2D0] bg-white p-6 shadow-sm'>
              <div className='min-w-[700px] rounded-2xl bg-[#123C2A] px-6 py-8 text-center'>
                <p className='text-lg font-semibold leading-8 text-white sm:text-2xl'>
                  Harvestable water (litres) = Roof area (m²) × Rainfall (mm) ×
                  Runoff coefficient
                </p>
              </div>
            </div>

            <p className='mt-8 max-w-5xl text-lg leading-8 text-[#4B5A50]'>
              The reason this works is neat. One millimetre of rain falling on
              one square metre of surface equals exactly one litre of water. So
              the first two numbers give you the total rain that lands on your
              roof. The last two numbers are your reality check, accounting for
              water that splashes off, soaks into the surface, evaporates, or
              gets thrown away in the first few minutes of a downpour to flush
              dirt off the roof.
            </p>
          </div>
        </section>

        {/* Worked example */}
        <section className='bg-white'>
          <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
            <SectionHeading title='A Worked Example' />

            <div className='mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]'>
              <div className='rounded-3xl bg-[#F6F8F5] p-8'>
                <p className='text-lg leading-8 text-[#4B5A50]'>
                  Say you live in a house with a 100 m² concrete terrace. Your
                  area receives about 700 mm of rain a year. Concrete has a
                  runoff coefficient of roughly 0.8, and you expect around 90
                  percent of that water to reach your tank after filtering.
                </p>
              </div>

              <div className='rounded-3xl border border-[#DDE6DF] bg-white p-8 shadow-sm'>
                <div className='space-y-5'>
                  <CalculationRow>
                    Total rain on the roof: 100 × 700 = 70,000 litres
                  </CalculationRow>

                  <CalculationRow>
                    After runoff loss: 70,000 × 0.8 = 56,000 litres
                  </CalculationRow>

                  <CalculationRow highlight>
                    After collection losses: 56,000 × 0.9 ={' '}
                    <strong>50,400 litres per year</strong>
                  </CalculationRow>
                </div>

                <p className='mt-7 border-t border-[#E5EBE6] pt-6 text-base leading-7 text-[#5D6A62]'>
                  That is over fifty thousand litres, from a roof you already
                  own. For a family that uses tanker water for gardening,
                  washing the car or cleaning floors, this alone could cover a
                  large share of non-drinking needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Runoff table */}
        <section className='bg-[#F6F8F5]'>
          <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
            <SectionHeading title='Typical Runoff Coefficients by Roof Type' />

            <p className='mt-6 max-w-4xl text-lg leading-8 text-[#4B5A50]'>
              The calculator picks these automatically, but here is a rough
              guide so you know what is happening behind the scenes. Exact
              figures vary with age, slope and condition.
            </p>

            <div className='mt-8 overflow-hidden rounded-3xl border border-[#DDE6DF] bg-white shadow-sm'>
              <div className='grid grid-cols-2 bg-[#123C2A] px-6 py-4 text-sm font-semibold text-white'>
                <div>Roof type</div>
                <div>Typical runoff coefficient</div>
              </div>

              {[
                ['Metal sheet', '0.90 to 0.95'],
                ['Clay or concrete tiles', '0.75 to 0.90'],
                ['Concrete terrace', '0.70 to 0.85'],
                ['Asphalt or bitumen', '0.70 to 0.90'],
                ['Green or planted roof', '0.25 to 0.50']
              ].map(([type, coefficient], index) => (
                <div
                  key={type}
                  className={`grid grid-cols-2 px-6 py-5 ${
                    index !== 4 ? 'border-b border-[#E8EDE9]' : ''
                  }`}
                >
                  <div className='font-medium text-[#35443A]'>{type}</div>
                  <div className='font-semibold text-[#4E8A24]'>
                    {coefficient}
                  </div>
                </div>
              ))}
            </div>

            <p className='mt-5 text-sm leading-6 text-[#718078]'>
              Smooth, sloped, non-porous surfaces send more water your way.
              Rough, flat or planted ones keep more of it for themselves.
            </p>
          </div>
        </section>

        {/* Tank size */}
        <section className='bg-white'>
          <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
            <SectionHeading title='Choosing the Right Tank Size' />

            <div className='mt-8 rounded-3xl border border-[#DDE6DF] bg-[#F8FAF8] p-7 lg:p-10'>
              <p className='text-lg leading-8 text-[#4B5A50]'>
                Here is something many people get wrong: the biggest tank is not
                always the best tank. Rain does not arrive evenly. Most places
                get the bulk of it in a few intense months, and your tank only
                needs to bridge the gap between one rainy season and the next,
                or between one storm and the next.
              </p>

              <p className='mt-8 text-base font-semibold text-[#123C2A]'>
                A sensible way to think about it:
              </p>

              <div className='mt-5 space-y-4'>
                <StepItem number='1'>
                  <strong>Estimate your daily use</strong> of harvested water. A
                  household of four using rainwater only for drinking and
                  cooking might need around 40 to 50 litres a day. Add garden
                  watering, laundry or toilet flushing, and that figure climbs
                  quickly.
                </StepItem>

                <StepItem number='2'>
                  <strong>Count your dry days,</strong> meaning how long you
                  will depend on stored water before the next good rain.
                </StepItem>

                <StepItem number='3'>
                  <strong>Multiply the two.</strong> Daily use times dry days
                  gives you a storage target.
                </StepItem>

                <StepItem number='4'>
                  <strong>Compare it with your annual harvest.</strong> If the
                  target is far larger than what your roof can supply, a smaller
                  tank is more realistic.
                </StepItem>
              </div>

              <div className='mt-8 rounded-2xl border border-[#D9E8C9] bg-[#EAF4E1] p-5'>
                <p className='text-base leading-7 text-[#3F533E]'>
                  The calculator does this comparison for you and suggests a
                  tank size, along with a note when your roof is likely to fill
                  it faster than you can use it. In that case, a recharge pit or
                  borewell recharge system is a smart companion, because the
                  extra water goes into the ground instead of overflowing into
                  the street.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Uses */}
        <section className='bg-[#123C2A]'>
          <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
            <div className='max-w-3xl'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                What Can You Use Harvested Rainwater For?
              </h2>

              <p className='mt-6 text-lg leading-8 text-white/70'>
                Rainwater is naturally soft and free of the minerals that cause
                scaling, which makes it surprisingly useful around the house.
              </p>
            </div>

            <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {[
                'Watering gardens, lawns and potted plants',
                'Washing clothes, vehicles and floors',
                'Flushing toilets',
                'Topping up a water feature or cooling system',
                'Recharging groundwater through a pit, trench or recharge well',
                'Drinking and cooking, but only after proper filtration and disinfection'
              ].map(item => (
                <div
                  key={item}
                  className='rounded-2xl border border-white/10 bg-white/5 p-5'
                >
                  <div className='mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#8CC63F]/15 text-[#A7D65C]'>
                    ✓
                  </div>
                  <p className='text-base leading-7 text-white/80'>{item}</p>
                </div>
              ))}
            </div>

            <div className='mt-8 rounded-3xl border border-[#D7E8C6]/20 bg-white/10 p-6'>
              <p className='text-base leading-7 text-white/75'>
                Please do not treat roof runoff as drinking water straight from
                the pipe. Bird droppings, dust and roof materials all end up in
                it. If you plan to drink it, use a multi-stage filter and a
                purifier, and test the water regularly.
              </p>
            </div>
          </div>
        </section>

        {/* Practical tips */}
        <section className='bg-[#F6F8F5]'>
          <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
            <SectionHeading title='Practical Tips to Collect More' />

            <div className='mt-10 grid gap-4 md:grid-cols-2'>
              {[
                [
                  'Keep your roof clean.',
                  'Sweep leaves and debris before the monsoon begins. A cleaner roof means cleaner water and fewer blocked filters.'
                ],
                [
                  'Install a first-flush diverter.',
                  'The first ten minutes of rain wash away most of the dirt. Diverting that portion protects your tank.'
                ],
                [
                  'Check gutters and downpipes.',
                  'A sagging gutter or a loose joint can quietly waste a surprising amount of water.'
                ],
                [
                  'Cover your tank.',
                  'Darkness and a tight lid stop algae and mosquitoes from moving in.'
                ],
                [
                  'Add mesh at every inlet.',
                  'A simple screen keeps out leaves, insects and small debris.'
                ],
                [
                  'Think about the whole plot.',
                  'Paved courtyards and driveways can feed a recharge pit too, not just the roof.'
                ]
              ].map(([title, text]) => (
                <div
                  key={title}
                  className='rounded-2xl border border-[#DDE6DF] bg-white p-6'
                >
                  <h3 className='font-semibold text-[#123C2A]'>{title}</h3>
                  <p className='mt-2 leading-7 text-[#657169]'>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mistakes */}
        <section className='bg-white'>
          <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
            <SectionHeading title='Common Mistakes to Avoid' />

            <div className='mt-10 space-y-4'>
              <Mistake title='Using the sloped roof area instead of the footprint.'>
                This inflates your estimate. Always measure the horizontal area.
              </Mistake>

              <Mistake title='Forgetting the losses.'>
                Dividing rainfall straight into litres without a runoff
                coefficient gives you a number you will never actually collect.
              </Mistake>

              <Mistake title='Buying a tank before running the numbers.'>
                An oversized tank is an expensive way to store air.
              </Mistake>

              <Mistake title='Ignoring maintenance.'>
                A system you never clean will eventually stop working well. A
                quick check twice a year, once before the rains and once after,
                goes a long way.
              </Mistake>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className='bg-[#F6F8F5]'>
          <div className='mx-auto max-w-5xl px-6 py-16 lg:px-8'>
            <SectionHeading title='Frequently Asked Questions' />

            <div className='mt-10 space-y-4'>
              <Faq
                question='How accurate is the result?'
                answer='It is a solid planning estimate, not a guarantee. Actual rainfall changes every year, and real-world losses depend on how well your system is built and maintained. Use the result to compare options and set expectations, and expect some variation.'
              />

              <Faq
                question='Do I need rainwater harvesting if I already get municipal water?'
                answer='It is not a requirement everywhere, but it is a smart backup. It eases pressure on public supply, lowers water bills, and keeps you going during shortages. Some cities and states also encourage or require it for new buildings, so check the rules for your area.'
              />

              <Faq
                question='Can I use the calculator for a farm, school or factory?'
                answer='Yes. The math is the same whatever the size. Enter the combined roof area of all the buildings that drain to your collection point.'
              />

              <Faq
                question='What if my roof has several different materials?'
                answer='Calculate each section separately with its own runoff coefficient, then add the results together for a more accurate total.'
              />

              <Faq
                question='Is harvested rainwater safe to drink?'
                answer='Not without treatment. Filter it, disinfect it, and test it. For anything beyond drinking and cooking, such as gardening or cleaning, basic filtration is usually enough.'
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='bg-[#123C2A]'>
          <div className='mx-auto max-w-5xl px-6 py-20 text-center lg:px-8 lg:py-24'>
            <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8CC63F]/15 text-[#A7D65C]'>
              <svg
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.7'
              >
                <path d='M12 3v18' />
                <path d='M5 10l7-7 7 7' />
                <path d='M5 21h14' />
              </svg>
            </div>

            <h2 className='mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl'>
              Ready to See Your Number?
            </h2>

            <p className='mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70'>
              You already own a free water source. It just needs a little
              planning to put it to work. Enter your roof area and local
              rainfall above, and see how many litres you could be saving this
              monsoon. Once you have your figure, you will know whether to start
              small with a barrel and a downpipe, or go bigger with a full tank
              and a recharge system.
            </p>

            <p className='mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-[#D9E8C6]'>
              A few minutes with the calculator today could mean fewer tanker
              bills and a healthier water table tomorrow.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ----------------------------- */
/* Reusable Components */
/* ----------------------------- */

const SectionHeading = ({ title }) => (
  <div>
    <div className='mb-4 h-1 w-12 rounded-full bg-[#8CC63F]' />
    <h2 className='text-3xl font-bold tracking-tight text-[#123C2A] sm:text-4xl'>
      {title}
    </h2>
  </div>
)

const InfoCard = ({ title, text }) => (
  <div className='rounded-2xl border border-[#E1E8E2] bg-[#FAFCFA] p-5'>
    <p className='text-sm leading-6 text-[#5D6A62]'>
      <span className='font-semibold text-[#123C2A]'>{title}</span> {text}
    </p>
  </div>
)

const TipCard = ({ number, title, children }) => (
  <div className='group rounded-3xl border border-[#DDE6DF] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg'>
    <div className='flex items-center justify-between'>
      <span className='text-4xl font-bold text-[#DDE8D9]'>{number}</span>

      <div className='h-2 w-2 rounded-full bg-[#8CC63F]' />
    </div>

    <h3 className='mt-6 text-lg font-bold text-[#123C2A]'>{title}</h3>

    <p className='mt-3 text-sm leading-7 text-[#657169]'>{children}</p>
  </div>
)

const CalculationRow = ({ children, highlight = false }) => (
  <div
    className={`rounded-2xl p-4 text-sm leading-6 ${
      highlight ? 'bg-[#EAF4E1] text-[#123C2A]' : 'bg-[#F6F8F5] text-[#5D6A62]'
    }`}
  >
    {children}
  </div>
)

const StepItem = ({ number, children }) => (
  <div className='flex gap-4 rounded-2xl bg-white p-5'>
    <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#123C2A] text-sm font-bold text-white'>
      {number}
    </div>

    <p className='text-sm leading-7 text-[#5D6A62]'>{children}</p>
  </div>
)

const Mistake = ({ title, children }) => (
  <div className='rounded-2xl border border-[#E1E8E2] bg-[#FAFCFA] p-6'>
    <div className='flex gap-4'>
      <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF1E8] text-[#C56A35]'>
        !
      </div>

      <div>
        <h3 className='font-semibold text-[#123C2A]'>{title}</h3>
        <p className='mt-2 text-sm leading-7 text-[#657169]'>{children}</p>
      </div>
    </div>
  </div>
)

const Faq = ({ question, answer }) => (
  <details className='group rounded-2xl border border-[#DDE6DF] bg-white'>
    <summary className='flex cursor-pointer list-none items-center justify-between gap-6 p-6 font-semibold text-[#123C2A] [&::-webkit-details-marker]:hidden'>
      <span>{question}</span>

      <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0F5EF] text-[#4E8A24] transition group-open:rotate-45'>
        +
      </span>
    </summary>

    <div className='border-t border-[#E8EDE9] px-6 pb-6 pt-5'>
      <p className='text-sm leading-7 text-[#657169]'>{answer}</p>
    </div>
  </details>
)

export default RainwaterHarvestingCalculator
