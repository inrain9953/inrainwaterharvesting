import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import StaticMetatag from '@/components/Schema/StaticMetatag'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WaterloggingCrisis = () => {
  const data = {
    title: `Gurugram's Waterlogging Crisis: Rainwater Harvesting Solutions`,
    desc: `Explore Gurugram's growing waterlogging problem and how rainwater harvesting, stormwater management, and groundwater recharge can support long-term solutions.`,
    keyword:
      'Gurugram waterlogging, Gurugram waterlogging solution, Gurgaon flooding solution, rainwater harvesting in Gurugram, rainwater harvesting in Gurgaon, stormwater management Gurgaon, groundwater recharge Gurugram, modular rainwater harvesting, urban flooding solution',
    canonical:
      'https://www.inrainwaterharvesting.com/blogs/water-logging-issue-in-gurgaon',
    ogTitle: `Gurugram's Waterlogging Crisis: Rainwater Harvesting Solutions`,
    ogDescription: `Explore Gurugram's growing waterlogging problem and how rainwater harvesting, stormwater management, and groundwater recharge can support long-term solutions.`,
    ogUrl:
      'https://www.inrainwaterharvesting.com/blogs/water-logging-issue-in-gurgaon',
    twittertitle: `Gurugram's Waterlogging Crisis: Rainwater Harvesting Solutions`,
    twitterdescription: `Explore Gurugram's growing waterlogging problem and how rainwater harvesting, stormwater management, and groundwater recharge can support long-term solutions.`
  }
  return (
    <>
      <StaticMetatag data={data} />
      <Navbar />

      <main className='bg-slate-50 text-slate-700'>
        {/* Hero Section */}
        <section className='relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950'>
          {/* Background Effects */}
          <div className='absolute inset-0'>
            <div className='absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl' />
            <div className='absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl' />
            <div className='absolute bottom-0 left-1/2 h-40 w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl' />
          </div>

          <div className='relative mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12'>
            <div className='max-w-4xl'>
              <div className='mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200'>
                Stormwater Management & Rainwater Harvesting
              </div>

              <h1 className='text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl'>
                Gurugram's Waterlogging Crisis: Rainwater Harvesting Solutions
              </h1>

              <div className='mt-8 h-1 w-24 rounded-full bg-cyan-400' />

              <p className='mt-8 max-w-3xl text-md leading-8 text-slate-300 sm:text-lg'>
                Every monsoon, Gurugram faces a problem that has become
                increasingly familiar to its residents, businesses and
                commuters: roads filled with water, long traffic jams, stranded
                vehicles and disrupted daily life.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className='mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-0'>
          <div className='space-y-3 text-md leading-8 text-slate-600'>
            <Image
              src='/water-logging.jpg'
              alt='Waterlogging'
              width={1000}
              height={1000}
              className='h-fit w-full rounded-xl'
            />
            <p>
              The recent rainfall events in Gurugram once again brought this
              issue into focus. Within a relatively short period of heavy rain,
              several parts of the city experienced severe waterlogging and
              traffic disruption. Schools and offices were even advised to shift
              to online and work-from-home arrangements during the disruption.
            </p>

            <p>
              For a city known as one of India's major corporate and real estate
              hubs, recurring waterlogging raises an important question:
            </p>

            <div className='my-10 rounded-3xl border border-cyan-100 bg-cyan-50 p-8 shadow-sm'>
              <p className='text-lg font-semibold leading-relaxed text-slate-900 sm:text-xl'>
                Are we only trying to remove water after it accumulates, or are
                we managing rainwater before it becomes a problem?
              </p>
            </div>

            <p>
              This is where better stormwater planning, rainwater harvesting and
              groundwater recharge infrastructure can play an important role.
            </p>

            <p>
              At <strong>InRain Construction</strong>, we believe that rainwater
              should not simply be treated as excess water that needs to be
              pumped away. With proper planning and infrastructure, a
              significant portion of stormwater can be collected, filtered,
              stored and directed towards suitable groundwater recharge systems.
            </p>

            <p>
              While rainwater harvesting alone cannot solve every drainage
              problem in Gurugram, it can become an important part of a broader
              and more sustainable water management strategy.
            </p>
          </div>
        </section>

        {/* Section */}
        <section className='border-y border-slate-200 bg-white'>
          <div className='mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-0'>
            <SectionTitle>
              Gurugram's Waterlogging Problem Is More Than Just Heavy Rain
            </SectionTitle>

            <div className='space-y-3 text-md leading-8 text-slate-600'>
              <p>
                Heavy rainfall is often blamed when roads become flooded.
                However, rain alone is not always the complete reason behind
                urban waterlogging.
              </p>

              <p>
                Cities naturally need systems that can collect, transport,
                temporarily store and discharge large volumes of stormwater.
              </p>

              <p>
                As urban development increases, this becomes more challenging.
              </p>

              <p>Over time, open land is replaced with:</p>

              <BulletGrid
                items={[
                  'Roads',
                  'Buildings',
                  'Parking areas',
                  'Commercial complexes',
                  'Residential developments',
                  'Concrete surfaces'
                ]}
              />

              <p>
                Natural soil absorbs a portion of rainfall. But concrete and
                paved surfaces do not allow water to infiltrate easily.
              </p>

              <p>
                Instead, rainwater quickly flows across the surface and enters
                drains.
              </p>

              <p>
                When a large amount of water reaches the drainage system within
                a short period, bottlenecks can occur.
              </p>

              <p>This can result in:</p>

              <BulletGrid
                items={[
                  'Flooded roads',
                  'Waterlogged underpasses',
                  'Traffic congestion',
                  'Damage to infrastructure',
                  'Disruption to businesses',
                  'Difficulties for emergency services',
                  'Safety risks for residents'
                ]}
              />

              <p>
                Recent reporting on Gurugram has again highlighted widespread
                disruption following intense rainfall, while drainage
                bottlenecks, clogged channels and urban development continue to
                be discussed as major contributors to the city's recurring
                problem.
              </p>

              <p>
                The challenge, therefore, is not simply about receiving rain.
              </p>

              <div className='rounded-2xl bg-slate-900 px-8 py-7 text-lg font-semibold text-white sm:text-xl'>
                The bigger challenge is managing where that rainwater goes.
              </div>
            </div>
          </div>
        </section>

        {/* Traditional Approach */}
        <section className='mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-0'>
          <SectionTitle>
            The Traditional Approach: Drain the Water as Quickly as Possible
          </SectionTitle>

          <div className='space-y-3 text-md leading-8 text-slate-600'>
            <p>
              In many urban areas, stormwater management has traditionally
              focused on one objective: move rainwater away as quickly as
              possible.
            </p>

            <p>Water flows from:</p>

            <div className='rounded-2xl border border-blue-100 bg-blue-50 p-7 text-center text-xl font-bold text-slate-900 sm:text-2xl'>
              Road → Drain → Main Drain → Outfall
            </div>

            <p>
              This approach is important, but it can become insufficient when
              urban areas expand rapidly.
            </p>

            <p>
              If every paved surface sends runoff into the same drainage network
              at the same time, the system can become overloaded during intense
              rainfall.
            </p>

            <p>Instead of only asking:</p>

            <QuestionCard>"How quickly can we drain the water?"</QuestionCard>

            <p>Cities and developments should also ask:</p>

            <QuestionCard>
              "How much water can we manage locally before it reaches the main
              drainage system?"
            </QuestionCard>

            <p>
              This is where decentralized rainwater management becomes valuable.
            </p>
          </div>
        </section>

        {/* Managing Rainwater */}
        <section className='bg-slate-900'>
          <div className='mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-0'>
            <SectionTitle dark>Managing Rainwater Where It Falls</SectionTitle>

            <div className='space-y-3 text-md leading-8 text-slate-300'>
              <p>
                A more sustainable approach to stormwater management is to
                capture and manage rainwater close to where it falls.
              </p>

              <p>
                For example, instead of allowing all rainwater from a commercial
                complex, industrial facility or housing project to immediately
                enter public drains, part of that water can be:
              </p>

              <BulletGrid
                dark
                items={[
                  'Collected',
                  'Filtered',
                  'Temporarily stored',
                  'Reused where suitable',
                  'Directed towards groundwater recharge'
                ]}
              />

              <p>
                This approach reduces the immediate pressure placed on external
                drainage infrastructure.
              </p>

              <p>
                Imagine hundreds of buildings across a city following this
                principle.
              </p>

              <p>
                Each project may manage only a portion of its runoff locally,
                but collectively, this can significantly reduce the amount of
                water entering public drainage networks at the same time.
              </p>
            </div>
          </div>
        </section>

        {/* How InRain Can Help */}
        <section className='bg-white px-6'>
          <div className='mx-auto max-w-6xl py-10 sm:px-8 lg:px-0'>
            <SectionTitle>How InRain Construction Can Help</SectionTitle>

            <div className='mb-7 max-w-4xl space-y-3 text-md leading-8 text-slate-600'>
              <p>
                InRain Construction specializes in{' '}
                <strong>
                  Rainwater Harvesting Systems and Modular Rainwater Harvesting
                  Solutions
                </strong>{' '}
                designed for residential, commercial, industrial and
                infrastructure projects.
              </p>

              <p>
                Our role is to help organizations and developments understand
                how rainwater generated within their site can be managed more
                effectively.
              </p>
            </div>

            <div className='grid gap-8 lg:grid-cols-2'>
              <ServiceCard
                number='01'
                title='Rainwater Harvesting System Design'
              >
                <p>Every project is different.</p>

                <p>
                  A large industrial facility does not have the same
                  requirements as a residential society. Similarly, a commercial
                  complex may generate a different type and volume of runoff
                  compared to a warehouse or institutional campus.
                </p>

                <p>
                  A properly designed rainwater harvesting system considers
                  factors such as:
                </p>

                <BulletList
                  items={[
                    'Catchment area',
                    'Roof size',
                    'Paved surfaces',
                    'Local rainfall intensity',
                    'Runoff volume',
                    'Available land',
                    'Soil conditions',
                    'Groundwater conditions',
                    'Existing drainage infrastructure'
                  ]}
                />

                <p>
                  This helps determine the most suitable system for the site.
                </p>
              </ServiceCard>

              <ServiceCard
                number='02'
                title='Modular Rainwater Harvesting Systems'
              >
                <p>
                  One of the biggest challenges in urban areas such as Gurugram
                  is limited land availability.
                </p>

                <p>
                  Traditional large recharge structures may require significant
                  space.
                </p>

                <p>
                  Modular rainwater harvesting systems provide an alternative.
                </p>

                <p>
                  These systems use engineered underground modules to create a
                  high-volume void for managing collected rainwater.
                </p>

                <p>They can potentially be installed beneath areas such as:</p>

                <BulletList
                  items={[
                    'Parking spaces',
                    'Driveways',
                    'Landscaped areas',
                    'Open spaces',
                    'Commercial premises',
                    'Industrial yards'
                  ]}
                />

                <p>
                  This means valuable surface land does not necessarily need to
                  be sacrificed for water management infrastructure.
                </p>

                <p>
                  Depending on the project design and site conditions, collected
                  rainwater can be temporarily stored and gradually directed
                  towards suitable recharge arrangements.
                </p>
              </ServiceCard>

              <ServiceCard number='03' title='Groundwater Recharge Solutions'>
                <p>
                  Gurugram and the wider NCR region face increasing pressure on
                  groundwater resources.
                </p>

                <p>
                  Rainwater that quickly flows away through drains represents a
                  missed opportunity.
                </p>

                <p>
                  Where hydrogeological and site conditions permit, properly
                  filtered rainwater can be directed towards scientifically
                  designed groundwater recharge systems.
                </p>

                <p>This can contribute to:</p>

                <BulletList
                  items={[
                    'Supporting groundwater replenishment',
                    'Reducing surface runoff',
                    'Improving local water balance',
                    'Reducing dependence on external water sources over time'
                  ]}
                />

                <p>
                  Recharge systems should always be designed according to
                  appropriate site investigations and local conditions rather
                  than using a one-size-fits-all approach.
                </p>
              </ServiceCard>

              <ServiceCard
                number='04'
                title='Stormwater Management for Large Developments'
              >
                <p>
                  Large developments generate significant runoff because of
                  their extensive rooftops and paved surfaces.
                </p>

                <p>Examples include:</p>

                <BulletList
                  items={[
                    'IT parks',
                    'Corporate campuses',
                    'Housing societies',
                    'Shopping complexes',
                    'Warehouses',
                    'Manufacturing facilities',
                    'Educational institutions',
                    'Hospitals'
                  ]}
                />

                <p>
                  A site-specific stormwater management strategy can help reduce
                  the immediate load entering municipal drainage systems.
                </p>

                <p>
                  InRain Construction can help evaluate opportunities for
                  integrating:
                </p>

                <BulletList
                  items={[
                    'Rainwater collection',
                    'Filtration',
                    'Modular storage',
                    'Groundwater recharge',
                    'Controlled stormwater management'
                  ]}
                />

                <p>
                  The objective is to create a system that works with the site's
                  existing infrastructure rather than treating water management
                  as an afterthought.
                </p>
              </ServiceCard>
            </div>
          </div>
        </section>

        {/* Complete Solution */}
        <section className='bg-slate-100'>
          <div className='mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-0'>
            <SectionTitle>
              Why Rainwater Harvesting Alone Is Not the Complete Solution
            </SectionTitle>

            <div className='space-y-3 text-md leading-8 text-slate-600'>
              <p>It is important to be realistic.</p>

              <p>Gurugram's waterlogging issue is complex.</p>

              <p>It involves multiple factors, including:</p>

              <BulletGrid
                items={[
                  'Urban planning',
                  'Drainage capacity',
                  'Drain maintenance',
                  'Encroachments',
                  'Construction patterns',
                  'Natural drainage pathways',
                  'Extreme rainfall events',
                  'Rapid urbanization'
                ]}
              />

              <p>
                Therefore, installing rainwater harvesting systems alone will
                not eliminate city-wide flooding.
              </p>

              <p>However, this does not mean such systems are unimportant.</p>

              <p>
                Rainwater harvesting and decentralized stormwater management can
                become one part of a larger solution.
              </p>

              <p>A city needs both:</p>

              <div className='grid gap-6 md:grid-cols-2'>
                <div className='rounded-3xl bg-white p-8 shadow-sm'>
                  <h3 className='text-2xl font-bold text-slate-900'>
                    Strong Public Drainage Infrastructure
                  </h3>

                  <p className='mt-4 leading-7 text-slate-600'>
                    Public drainage systems must be properly designed,
                    maintained and capable of handling expected stormwater
                    flows.
                  </p>
                </div>

                <div className='rounded-3xl bg-white p-8 shadow-sm'>
                  <h3 className='text-2xl font-bold text-slate-900'>
                    Local Rainwater Management
                  </h3>

                  <p className='mt-4 leading-7 text-slate-600'>
                    Individual developments should manage a reasonable portion
                    of their runoff through storage, recharge and other
                    appropriate solutions.
                  </p>
                </div>
              </div>

              <p>
                Together, these approaches can create a more resilient urban
                water management system.
              </p>
            </div>
          </div>
        </section>

        {/* Water Management */}
        <section className='mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-0'>
          <SectionTitle>From Waterlogging to Water Management</SectionTitle>

          <div className='space-y-3 text-md leading-8 text-slate-600'>
            <p>The way we think about rainwater needs to change.</p>

            <p>When heavy rainfall occurs, the common reaction is:</p>

            <QuestionCard>"How do we get rid of this water?"</QuestionCard>

            <p>But another important question is:</p>

            <QuestionCard>
              "How can we manage this water before it becomes a problem?"
            </QuestionCard>

            <p>Rainwater is a natural resource.</p>

            <div className='grid gap-6 md:grid-cols-2'>
              <div className='rounded-3xl border border-red-100 bg-red-50 p-8'>
                <h3 className='text-xl font-bold text-slate-900 pb-3'>
                  When it is unmanaged, it can cause:
                </h3>

                <BulletList
                  items={[
                    'Flooding',
                    'Waterlogging',
                    'Traffic disruption',
                    'Infrastructure damage'
                  ]}
                />
              </div>

              <div className='rounded-3xl border border-emerald-100 bg-emerald-50 p-8'>
                <h3 className='text-xl font-bold text-slate-900 pb-3'>
                  When it is properly managed, it can support:
                </h3>

                <BulletList
                  items={[
                    'Groundwater recharge',
                    'Water conservation',
                    'Stormwater control',
                    'Sustainable development',
                    'Improved water security'
                  ]}
                />
              </div>
            </div>

            <p>The difference lies in planning and infrastructure.</p>
          </div>
        </section>

        {/* Future Developments */}
        <section className='border-y border-slate-200 bg-white'>
          <div className='mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-0'>
            <SectionTitle>
              A Better Approach for Future Developments in Gurugram
            </SectionTitle>

            <div className='space-y-3 text-md leading-8 text-slate-600'>
              <p>
                As Gurugram continues to grow, future construction projects have
                an opportunity to integrate water management from the beginning.
              </p>

              <p>
                Rainwater harvesting should not be considered only as a
                regulatory requirement or an additional structure installed
                after construction.
              </p>

              <p>
                It should become part of the overall infrastructure planning
                process.
              </p>

              <p>
                Developers, industries, institutions and housing societies can
                consider:
              </p>

              <BulletGrid
                items={[
                  'Rooftop rainwater collection',
                  'Stormwater filtration',
                  'Modular underground storage',
                  'Groundwater recharge',
                  'Permeable landscape planning',
                  'Improved site drainage',
                  'Regular maintenance of harvesting systems'
                ]}
              />

              <p>
                When rainwater management is included at the planning stage,
                systems can be more efficient and better integrated with the
                development.
              </p>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className='bg-cyan-950'>
          <div className='mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-0'>
            <SectionTitle dark>InRain Construction's Vision</SectionTitle>

            <div className='space-y-3 text-md leading-8 text-cyan-50/80'>
              <p>
                At InRain Construction, our focus is on helping projects develop
                practical and sustainable rainwater management infrastructure.
              </p>

              <p>
                Our solutions are designed around the requirements of each site.
              </p>

              <p>We work towards helping organizations:</p>

              <BulletGrid
                dark
                items={[
                  'Capture rainwater effectively',
                  'Reduce unnecessary surface runoff',
                  'Support groundwater recharge',
                  'Manage stormwater efficiently',
                  'Optimize available space',
                  'Implement modular water management systems',
                  'Build more sustainable infrastructure'
                ]}
              />

              <p>
                With the right design, rainwater harvesting can become more than
                a compliance requirement.
              </p>

              <div className='rounded-2xl border border-cyan-400/20 bg-white/10 p-8 text-xl font-semibold text-white'>
                It can become an important part of long-term water management.
              </div>
            </div>
          </div>
        </section>

        {/* Long Term Thinking */}
        <section className='mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-0'>
          <SectionTitle>Gurugram Needs Long-Term Thinking</SectionTitle>

          <div className='space-y-3 text-md leading-8 text-slate-600'>
            <p>
              The recent waterlogging incidents are a reminder that rapidly
              growing cities need infrastructure capable of managing both
              present and future challenges.
            </p>

            <p>
              Pumps and emergency drainage measures may help remove water after
              flooding occurs.
            </p>

            <p>
              But long-term resilience requires better planning before the next
              rainfall event arrives.
            </p>

            <p>
              Gurugram's solution will require coordinated improvements in
              public drainage, maintenance, urban planning and local stormwater
              management.
            </p>

            <p>
              Rainwater harvesting and modular groundwater recharge systems are
              not a magic solution to the entire problem.
            </p>

            <p>
              However, they can help reduce runoff at the source and make better
              use of the water that would otherwise be lost.
            </p>

            <p>
              If more residential societies, corporate campuses, industries and
              commercial developments actively manage rainwater within their own
              sites, the pressure on the city's drainage infrastructure can
              potentially be reduced.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className='relative overflow-hidden bg-slate-950'>
          <div className='absolute inset-0'>
            <div className='absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl' />
            <div className='absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl' />
          </div>

          <div className='relative mx-auto max-w-5xl px-6 py-10 text-center sm:px-8'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Let's Stop Treating Rainwater as Waste
            </h2>

            <div className='mx-auto mt-8 max-w-3xl space-y-3 text-lg leading-8 text-slate-300'>
              <p>
                Every monsoon brings enormous volumes of water to our cities.
              </p>

              <p>The challenge is not only to remove that water from roads.</p>

              <p>The real opportunity is to manage it intelligently.</p>

              <p>
                For Gurugram, the path towards better water resilience will
                require a combination of stronger infrastructure and
                decentralized solutions.
              </p>

              <p>
                At <strong className='text-white'>InRain Construction</strong>,
                we believe that every project can contribute to this change.
              </p>

              <p>
                Through properly designed{' '}
                <strong className='text-white'>
                  Rainwater Harvesting Systems, Modular Rainwater Harvesting
                  Structures, Stormwater Management Solutions and Groundwater
                  Recharge Systems
                </strong>
                , we can help organizations take a practical step towards better
                water management.
              </p>
            </div>

            <div className='mx-auto mt-8 max-w-4xl rounded-3xl border border-cyan-400/20 bg-white/5 p-8 sm:p-10'>
              <p className='text-lg font-semibold leading-relaxed text-cyan-100 sm:text-xl'>
                The next heavy rainfall should not only remind us about the
                problem of waterlogging. It should also remind us about the
                value of the water we are allowing to flow away.
              </p>
            </div>

            <div className='mt-10 rounded-3xl bg-white/90 p-8 text-left shadow-2xl sm:p-12'>
              <h3 className='text-3xl font-bold text-slate-900'>
                Looking for a Rainwater Harvesting or Stormwater Management
                Solution?
              </h3>

              <p className='mt-3 text-lg leading-8 text-slate-600'>
                InRain Construction provides customized solutions for:
              </p>

              <div className='mt-8'>
                <BulletGrid
                  items={[
                    'Residential societies',
                    'Commercial developments',
                    'Industrial facilities',
                    'Corporate campuses',
                    'Warehouses',
                    'Educational institutions',
                    'Infrastructure projects'
                  ]}
                />
              </div>

              <div className='mt-10 rounded-2xl bg-cyan-50 p-7'>
                <p className='text-lg font-semibold leading-8 text-slate-900'>
                  Talk to our team to explore a site-specific rainwater
                  harvesting, stormwater management or groundwater recharge
                  solution for your project.
                </p>
              </div>

              <div className='mt-5 flex justify-center'>
                <Link href={'/contact'}>
                  <Button variant='contained'>Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

/* -------------------------------------------------------------------------- */
/*                               Reusable Components                          */
/* -------------------------------------------------------------------------- */

const SectionTitle = ({ children, dark = false }) => (
  <div className='mb-5'>
    <div
      className={`mb-5 h-1 w-16 rounded-full ${
        dark ? 'bg-cyan-400' : 'bg-cyan-600'
      }`}
    />

    <h2
      className={`max-w-4xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl ${
        dark ? 'text-white' : 'text-slate-900'
      }`}
    >
      {children}
    </h2>
  </div>
)

const BulletGrid = ({ items, dark = false }) => (
  <div className='grid gap-3 sm:grid-cols-2'>
    {items.map(item => (
      <div
        key={item}
        className={`flex items-center gap-3 rounded-xl border p-4 ${
          dark
            ? 'border-white/10 bg-white/5 text-slate-200'
            : 'border-slate-200 bg-slate-50 text-slate-700'
        }`}
      >
        <span className='flex h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-500' />
        <span>{item}</span>
      </div>
    ))}
  </div>
)

const BulletList = ({ items }) => (
  <ul className='space-y-3'>
    {items.map(item => (
      <li key={item} className='flex gap-3'>
        <span className='mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-600' />
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

const QuestionCard = ({ children }) => (
  <div className='rounded-2xl border-l-4 border-cyan-500 bg-cyan-50 px-7 py-6 text-xl font-semibold italic leading-8 text-slate-900'>
    {children}
  </div>
)

const ServiceCard = ({ number, title, children }) => (
  <article className='rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-9'>
    <div className='mb-6 flex items-center gap-4'>
      <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-cyan-300'>
        {number}
      </div>

      <h3 className='text-2xl font-bold leading-tight text-slate-900'>
        {title}
      </h3>
    </div>

    <div className='space-y-3 leading-7 text-slate-600'>{children}</div>
  </article>
)

export default WaterloggingCrisis
