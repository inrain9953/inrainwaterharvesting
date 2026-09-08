import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
import StaticMetatag from '@/components/Schema/StaticMetatag'
import StaticSchema from '@/components/Schema/StaticSchema'

/* ---------------------------------------------------------------------- */
/* small inline icons (no icon library)                                   */
/* ---------------------------------------------------------------------- */

const IconDrop = props => (
  <svg viewBox='0 0 24 24' fill='none' {...props}>
    <path
      d='M12 2C12 2 5 11 5 15.5C5 19.09 8.13 22 12 22C15.87 22 19 19.09 19 15.5C19 11 12 2 12 2Z'
      stroke='currentColor'
      strokeWidth='1.6'
      strokeLinejoin='round'
    />
  </svg>
)

const IconRoof = props => (
  <svg viewBox='0 0 24 24' fill='none' {...props}>
    <path
      d='M3 11L12 4L21 11'
      stroke='currentColor'
      strokeWidth='1.6'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5 10.5V20H19V10.5'
      stroke='currentColor'
      strokeWidth='1.6'
      strokeLinejoin='round'
    />
  </svg>
)

const IconLayers = props => (
  <svg viewBox='0 0 24 24' fill='none' {...props}>
    <path
      d='M12 3L21 8L12 13L3 8L12 3Z'
      stroke='currentColor'
      strokeWidth='1.6'
      strokeLinejoin='round'
    />
    <path
      d='M3 12L12 17L21 12'
      stroke='currentColor'
      strokeWidth='1.6'
      strokeLinejoin='round'
    />
    <path
      d='M3 16L12 21L21 16'
      stroke='currentColor'
      strokeWidth='1.6'
      strokeLinejoin='round'
    />
  </svg>
)

const IconGrid = props => (
  <svg viewBox='0 0 24 24' fill='none' {...props}>
    <rect
      x='3'
      y='3'
      width='7'
      height='7'
      rx='1'
      stroke='currentColor'
      strokeWidth='1.6'
    />
    <rect
      x='14'
      y='3'
      width='7'
      height='7'
      rx='1'
      stroke='currentColor'
      strokeWidth='1.6'
    />
    <rect
      x='3'
      y='14'
      width='7'
      height='7'
      rx='1'
      stroke='currentColor'
      strokeWidth='1.6'
    />
    <rect
      x='14'
      y='14'
      width='7'
      height='7'
      rx='1'
      stroke='currentColor'
      strokeWidth='1.6'
    />
  </svg>
)

const IconFilter = props => (
  <svg viewBox='0 0 24 24' fill='none' {...props}>
    <path
      d='M4 5H20L14 13V19L10 21V13L4 5Z'
      stroke='currentColor'
      strokeWidth='1.6'
      strokeLinejoin='round'
    />
  </svg>
)

const IconCloudRain = props => (
  <svg viewBox='0 0 24 24' fill='none' {...props}>
    <path
      d='M7 16C4.79 16 3 14.21 3 12C3 9.94 4.55 8.25 6.56 8.03C7.11 5.68 9.24 4 11.75 4C14.68 4 17.05 6.24 17.29 9.09C19.36 9.42 21 11.19 21 13.33C21 15.65 19.1 17.5 16.79 17.5H7Z'
      stroke='currentColor'
      strokeWidth='1.6'
      strokeLinejoin='round'
    />
    <path
      d='M9 19L8 21M13 19L12 21M17 19L16 21'
      stroke='currentColor'
      strokeWidth='1.6'
      strokeLinecap='round'
    />
  </svg>
)

const IconMapPin = props => (
  <svg viewBox='0 0 24 24' fill='none' {...props}>
    <path
      d='M12 21C12 21 19 14.5 19 9.5C19 5.36 15.64 2 12 2C8.36 2 5 5.36 5 9.5C5 14.5 12 21 12 21Z'
      stroke='currentColor'
      strokeWidth='1.6'
      strokeLinejoin='round'
    />
    <circle cx='12' cy='9.5' r='2.5' stroke='currentColor' strokeWidth='1.6' />
  </svg>
)

const IconCheck = props => (
  <svg viewBox='0 0 24 24' fill='none' {...props}>
    <path
      d='M5 12.5L10 17.5L19 7'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const IconChevron = props => (
  <svg viewBox='0 0 24 24' fill='none' {...props}>
    <path
      d='M6 9L12 15L18 9'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

/* ---------------------------------------------------------------------- */
/* data                                                                    */
/* ---------------------------------------------------------------------- */

const SERVICES = [
  {
    icon: IconRoof,
    title: 'Rooftop Rainwater Harvesting',
    body: (
      <>
        <p className='mb-3'>
          Rooftops can provide an excellent catchment area for collecting
          rainwater.
        </p>
        <p className='mb-3'>
          Our rooftop rainwater harvesting solutions collect water from building
          roofs and terraces and direct it through suitable conveyance and
          filtration arrangements.
        </p>
        <p className='mb-4'>
          Depending on the project, the filtered water can be directed toward
          storage or groundwater recharge.
        </p>
        <p className='text-sm font-semibold text-blue-950 mb-2'>
          These systems are suitable for:
        </p>
        <ul className='grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-slate-600'>
          {[
            'Residential buildings',
            'Housing societies',
            'Offices',
            'Commercial buildings',
            'Schools and colleges',
            'Hospitals',
            'Hotels',
            'Industrial facilities',
            'Warehouses'
          ].map(i => (
            <li key={i} className='flex items-center gap-2'>
              <IconCheck className='w-3.5 h-3.5 text-emerald-600 flex-none' />
              {i}
            </li>
          ))}
        </ul>
      </>
    )
  },
  {
    icon: IconLayers,
    title: 'Groundwater Recharge Systems',
    body: (
      <>
        <p className='mb-3'>
          Rainwater can be a valuable source for groundwater recharge when the
          site's geological and hydrogeological conditions are suitable.
        </p>
        <p className='mb-3'>
          We design recharge systems that help direct appropriately filtered
          rainwater into the ground in a controlled manner.
        </p>
        <p className='mb-4'>
          A recharge solution may involve suitable filtration, recharge
          structures and other components depending on the site's conditions.
        </p>
        <p className='mb-4'>
          Before recommending a recharge system, factors such as catchment area,
          soil characteristics, groundwater conditions, rainfall and site layout
          should be considered.
        </p>
        <p className='border-l-4 border-amber-400 bg-amber-50 pl-4 py-3 text-sm text-blue-950 font-medium'>
          The right recharge system is not simply the deepest or largest
          structure—it is the one designed appropriately for the site.
        </p>
      </>
    )
  },
  {
    icon: IconGrid,
    title: 'Modular Rainwater Harvesting Systems',
    body: (
      <>
        <p className='mb-3'>
          Limited land availability is a common challenge across Delhi-NCR.
        </p>
        <p className='mb-3'>
          Commercial developments, residential societies, industrial facilities
          and institutional campuses often need to manage large volumes of
          rainwater without sacrificing valuable surface space.
        </p>
        <p className='mb-3'>
          Our{' '}
          <strong className='font-semibold'>
            Modular Rainwater Harvesting Systems
          </strong>{' '}
          provide an underground solution for managing collected rainwater.
        </p>
        <p className='mb-4'>
          Engineered modules can be arranged to create a large underground void
          while allowing the surface area above to remain available for suitable
          uses.
        </p>
        <p className='text-sm font-semibold text-blue-950 mb-2'>
          Depending on the design, modular systems can be considered beneath:
        </p>
        <ul className='grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-slate-600 mb-4'>
          {[
            'Parking areas',
            'Driveways',
            'Landscaped spaces',
            'Open areas',
            'Industrial yards',
            'Commercial premises'
          ].map(i => (
            <li key={i} className='flex items-center gap-2'>
              <IconCheck className='w-3.5 h-3.5 text-emerald-600 flex-none' />
              {i}
            </li>
          ))}
        </ul>
        <p className='text-sm text-slate-500'>
          This makes modular systems particularly useful for projects where
          conventional surface-level water structures are difficult to
          accommodate.
        </p>
      </>
    )
  },
  {
    icon: IconCloudRain,
    title: 'Stormwater Management Solutions',
    body: (
      <>
        <p className='mb-3'>
          Rainwater harvesting and stormwater management often need to work
          together.
        </p>
        <p className='mb-4'>
          During intense rainfall, large rooftops, parking areas and paved
          surfaces can generate substantial runoff. If this water is not
          properly managed, it can contribute to local waterlogging and put
          additional pressure on drainage infrastructure.
        </p>
        <p className='text-sm font-semibold text-blue-950 mb-2'>
          We help projects develop solutions for collecting and managing
          stormwater through appropriate combinations of:
        </p>
        <ul className='grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-slate-600 mb-4'>
          {[
            'Collection networks',
            'Filtration systems',
            'Recharge structures',
            'Underground storage',
            'Modular systems',
            'Controlled discharge arrangements'
          ].map(i => (
            <li key={i} className='flex items-center gap-2'>
              <IconCheck className='w-3.5 h-3.5 text-emerald-600 flex-none' />
              {i}
            </li>
          ))}
        </ul>
        <p className='text-sm text-slate-500'>
          The objective is to manage rainwater efficiently within the project's
          overall drainage strategy.
        </p>
      </>
    )
  },
  {
    icon: IconFilter,
    title: 'Rainwater Filtration Systems',
    body: (
      <>
        <p className='mb-3'>
          Collected rainwater may contain leaves, dust, sediment and other
          particles, particularly when it comes from rooftops and paved areas.
        </p>
        <p className='mb-4'>
          An appropriate filtration system helps improve the quality of water
          before it enters a storage or recharge structure.
        </p>
        <p className='text-sm font-semibold text-blue-950 mb-2'>
          The filtration method depends on:
        </p>
        <ul className='grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-slate-600 mb-4'>
          {[
            'Source of rainwater',
            'Catchment characteristics',
            'Expected runoff',
            'Intended application',
            'Site conditions',
            'Recharge or storage requirements'
          ].map(i => (
            <li key={i} className='flex items-center gap-2'>
              <IconCheck className='w-3.5 h-3.5 text-emerald-600 flex-none' />
              {i}
            </li>
          ))}
        </ul>
        <p className='text-sm text-slate-500'>
          We select and design filtration arrangements according to the specific
          project rather than applying the same configuration everywhere.
        </p>
      </>
    )
  }
]

const STEPS = [
  {
    n: '01',
    title: 'Rainwater Collection',
    body: 'Rainwater is collected from rooftops, terraces, paved areas or other suitable catchment surfaces.'
  },
  {
    n: '02',
    title: 'Conveyance',
    body: 'The collected water is transported through properly planned pipes, drains or channels.'
  },
  {
    n: '03',
    title: 'Filtration',
    body: 'The water passes through an appropriate filtration system to remove unwanted debris and suspended particles.'
  },
  {
    n: '04',
    title: 'Storage or Recharge',
    body: "After filtration, water can be directed to a suitable storage system or groundwater recharge structure based on the project's requirements."
  },
  {
    n: '05',
    title: 'Reuse or Groundwater Recharge',
    body: 'Stored water can be used for suitable non-potable applications, while recharge systems allow water to move into appropriate underground formations.'
  }
]

const PROJECT_TYPES = [
  {
    title: 'Residential Societies',
    body: 'Large housing societies have extensive rooftops, parking areas and landscaped spaces that can generate significant runoff. Rainwater harvesting can help societies manage this runoff while supporting groundwater recharge and reducing dependence on external water sources.'
  },
  {
    title: 'Commercial Buildings',
    body: 'Offices, malls, hotels and business parks can integrate rainwater harvesting into their overall water-management infrastructure.'
  },
  {
    title: 'Industrial Facilities',
    body: 'Factories and manufacturing facilities often have large roof areas and paved yards. A well-designed system can help capture and manage substantial amounts of rainwater generated across the site.'
  },
  {
    title: 'Institutional Campuses',
    body: 'Schools, colleges, universities and other institutions can incorporate rainwater harvesting into their sustainability and water-conservation initiatives.'
  },
  {
    title: 'Hospitals',
    body: 'Large healthcare campuses require dependable water management infrastructure. Rainwater harvesting can complement their existing water and drainage systems for suitable applications.'
  },
  {
    title: 'Warehouses and Logistics Parks',
    body: 'Large warehouse roofs can act as effective catchment areas, making rainwater collection particularly practical for these facilities.'
  },
  {
    title: 'Infrastructure Projects',
    body: 'Large developments, public facilities, parking areas and other infrastructure projects can integrate rainwater management into their drainage and environmental planning.'
  }
]

const WHY_US = [
  {
    title: 'Site-Specific Design',
    body: "We consider your site's catchment area, drainage pattern, available space, rainfall conditions and other relevant factors before recommending a solution."
  },
  {
    title: 'Complete Water Management Approach',
    body: 'We look beyond simply installing a recharge pit or storage structure. Our approach considers collection, conveyance, filtration, storage, recharge and maintenance as connected parts of the system.'
  },
  {
    title: 'Modular Solutions',
    body: 'Where site conditions and project requirements make them suitable, modular systems can provide an efficient underground approach to managing larger volumes of rainwater.'
  },
  {
    title: 'Practical Engineering',
    body: 'Our objective is to develop systems that are practical to install, maintain and operate over the long term.'
  },
  {
    title: 'Solutions for Different Scales',
    body: 'From individual buildings to large industrial and commercial developments, systems can be planned according to project-specific requirements.'
  }
]

const NCR_LOCATIONS = [
  'Delhi',
  'Gurugram / Gurgaon',
  'Noida',
  'Greater Noida',
  'Ghaziabad',
  'Faridabad',
  'Manesar',
  'Bahadurgarh',
  'Sohna'
]

const QUESTIONS = [
  'Where does the rainwater come from?',
  'How much runoff does the site generate?',
  'Where does the water currently go?',
  'Can some of it be stored or reused?',
  'Is groundwater recharge suitable at the site?',
  'What filtration is required?',
  'How can the system be maintained over time?'
]

/* ---------------------------------------------------------------------- */
/* component                                                               */
/* ---------------------------------------------------------------------- */

export default function RainwaterHarvestingDelhiNCR () {
  const [openService, setOpenService] = useState(0)

  const data = {
    title:
      'Rainwater Harvesting Service Provider in Delhi NCR | InRain Construction',
    desc: 'InRain Construction provides reliable rainwater harvesting solutions across Delhi NCR, including groundwater recharge, modular systems, filtration and stormwater management.',
    keyword:
      'Rainwater harvesting company in Delhi NCR, Rainwater harvesting services Delhi, Rainwater harvesting in Gurgaon, Rainwater harvesting in Noida, rainwater harvesting system, rooftop rainwater harvesting, rainwater collection system, rainwater filtration system, groundwater recharge system, modular rainwater harvesting, commercial water management, water conservation, rainwater harvesting India',
    canonical:
      'https://www.inrainwaterharvesting.com/rainwater-harvesting-service-provider-in-delhi-ncr',
    ogTitle:
      'Rainwater Harvesting Service Provider in Delhi NCR | InRain Construction',
    ogDescription:
      'InRain Construction provides reliable rainwater harvesting solutions across Delhi NCR, including groundwater recharge, modular systems, filtration and stormwater management.',
    ogUrl:
      'https://www.inrainwaterharvesting.com/rainwater-harvesting-service-provider-in-delhi-ncr',
    twittertitle:
      'Rainwater Harvesting Service Provider in Delhi NCR | InRain Construction',
    twitterdescription:
      'InRain Construction provides reliable rainwater harvesting solutions across Delhi NCR, including groundwater recharge, modular systems, filtration and stormwater management.'
  }

  return (
    <>
      <StaticMetatag data={data} />
      <StaticSchema />
      <Navbar />
      <div className='bg-white text-slate-700 font-sans'>
        {/* ============================= HERO ============================= */}
        <section className='bg-blue-950'>
          <Image
            src='/service11.jpg'
            width={1200}
            height={400}
            alt="InRain Construction Pvt Ltd (ICPL) rainwater harvesting banner: illustration of a rooftop collecting rain into a storage tank, with the message 'Rainwater Harvesting — Do You Harvest Rainwater? If Not, Start Today!'"
            className='w-full h-68 block'
          />
          <div className='max-w-6xl mx-auto px-6 py-10'>
            <p className='text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3'>
              Reliable Rainwater Harvesting Solutions for a Water-Secure Future
            </p>
            <h1 className='text-3xl md:text-4xl font-bold text-white max-w-3xl leading-tight mb-5'>
              Rainwater Harvesting Service Provider in Delhi NCR
            </h1>
            <p className='text-blue-100/80 max-w-2xl mb-3'>
              Rain is a valuable natural resource, but in a rapidly developing
              region like Delhi-NCR, a large amount of rainwater can quickly
              turn into surface runoff. Roads, rooftops, parking areas and other
              built-up surfaces leave less space for water to naturally enter
              the ground.
            </p>
            <p className='text-blue-100/80 max-w-2xl mb-3'>
              A properly designed{' '}
              <strong className='text-white font-semibold'>
                <a className='underline' target='_blank' href='/'>
                  Rainwater Harvesting System
                </a>
              </strong>{' '}
              provides a practical way to collect, filter, store and recharge
              rainwater instead of allowing it to go to waste.
            </p>
            <p className='text-blue-100/80 max-w-2xl mb-3'>
              <strong className='text-white font-semibold'>
                InRain Construction
              </strong>{' '}
              provides customized rainwater harvesting solutions for
              residential, commercial, industrial, institutional and
              infrastructure projects across Delhi-NCR. Our focus is on
              designing systems that work with the actual conditions of your
              site, available space, rainfall, catchment area and
              water-management requirements.
            </p>
            <p className='text-blue-100/80 max-w-2xl mb-8'>
              From rooftop rainwater collection and filtration to groundwater
              recharge and modular underground systems, we help clients make
              better use of rainwater while supporting long-term water
              conservation.
            </p>
            <div className='flex flex-wrap gap-3'>
              <a
                href='/contact'
                className='bg-amber-400 hover:bg-amber-300 text-blue-950 font-semibold px-6 py-3 rounded-md transition-colors'
              >
                Get a Site Assessment
              </a>
              <a
                href='/contact'
                className='border border-white/30 hover:border-white text-white px-6 py-3 rounded-md transition-colors'
              >
                Talk to Our Experts
              </a>
            </div>
          </div>
        </section>

        {/* ==================== WHY IT MATTERS IN DELHI-NCR ==================== */}
        <section className='max-w-6xl mx-auto px-6 py-10'>
          <p className='text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3'>
            Local Context
          </p>
          <h2 className='text-2xl md:text-3xl font-bold text-blue-950 mb-6 max-w-2xl'>
            Why Rainwater Harvesting Matters in Delhi-NCR
          </h2>

          <div className='grid md:grid-cols-2 gap-10 mb-10'>
            <div>
              <p className='mb-4'>
                Delhi-NCR is a densely developed region with growing water
                requirements and increasing pressure on groundwater resources.
              </p>
              <p>
                The Delhi Jal Board identifies rainwater harvesting as an
                important part of Delhi's water security strategy, including
                groundwater recharge and conservation. Government resources also
                highlight the need to promote rainwater harvesting and
                artificial groundwater recharge in the NCR.
              </p>
            </div>
            <div>
              <p>
                At the same time, urban development has increased the amount of
                concrete and paved surfaces across the region. When heavy
                rainfall occurs, water can run off these surfaces rapidly
                instead of naturally infiltrating into the ground.
              </p>
            </div>
          </div>

          {/* signature split callout: two problems at once */}
          <div className='grid md:grid-cols-2 gap-px bg-blue-950/10 border border-blue-950/10 rounded-lg overflow-hidden mb-6'>
            <div className='bg-sky-50 p-7'>
              <div className='w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center mb-4'>
                <IconCloudRain className='w-5 h-5 text-sky-600' />
              </div>
              <p className='text-xs font-semibold uppercase tracking-widest text-sky-600 mb-2'>
                Too much, too fast
              </p>
              <p className='text-blue-950 font-medium'>
                Too much water in some places during heavy rainfall
              </p>
            </div>
            <div className='bg-amber-50 p-7'>
              <div className='w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-4'>
                <IconDrop className='w-5 h-5 text-amber-600' />
              </div>
              <p className='text-xs font-semibold uppercase tracking-widest text-amber-600 mb-2'>
                Too little, underground
              </p>
              <p className='text-blue-950 font-medium'>
                Too little water available underground over the longer term
              </p>
            </div>
          </div>
          <p className='text-slate-600'>
            Rainwater harvesting helps address both sides of this challenge by
            managing rainfall closer to where it falls.
          </p>
        </section>

        {/* ============================ SERVICES ============================ */}
        <section className='bg-slate-50'>
          <div className='max-w-6xl mx-auto px-6 py-10'>
            <p className='text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3'>
              What We Do
            </p>
            <h2 className='text-2xl md:text-3xl font-bold text-blue-950 mb-2'>
              Our Rainwater Harvesting Services
            </h2>
            <p className='text-slate-600 max-w-2xl mb-10'>
              At InRain Construction, we provide end-to-end rainwater harvesting
              solutions based on the requirements of each project.
            </p>

            <div className='space-y-3'>
              {SERVICES.map((service, i) => {
                const Icon = service.icon
                const isOpen = openService === i
                return (
                  <div
                    key={service.title}
                    className='bg-white border border-slate-200 rounded-lg overflow-hidden'
                  >
                    <button
                      type='button'
                      onClick={() => setOpenService(isOpen ? -1 : i)}
                      className='w-full flex items-center gap-4 px-5 py-4 text-left'
                    >
                      <span className='flex-none w-10 h-10 rounded-full bg-blue-950 text-white flex items-center justify-center'>
                        <Icon className='w-5 h-5' />
                      </span>
                      <span className='flex-1 font-semibold text-blue-950'>
                        {i + 1}. {service.title}
                      </span>
                      <IconChevron
                        className={
                          'w-5 h-5 flex-none text-slate-400 transition-transform ' +
                          (isOpen ? 'rotate-180' : '')
                        }
                      />
                    </button>
                    {isOpen && (
                      <div className='px-5 pb-6 pl-[4.25rem] text-sm leading-relaxed text-slate-600'>
                        {service.body}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============================ HOW IT WORKS ============================ */}
        <section className='max-w-6xl mx-auto px-6 py-10'>
          <p className='text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3'>
            The Process
          </p>
          <h2 className='text-2xl md:text-3xl font-bold text-blue-950 mb-2'>
            How Our Rainwater Harvesting System Works
          </h2>
          <p className='text-slate-600 max-w-2xl mb-12'>
            A typical rainwater harvesting system follows a simple process:
          </p>

          <ol className='grid sm:grid-cols-2 lg:grid-cols-5 gap-6'>
            {STEPS.map((step, i) => (
              <li key={step.n} className='relative'>
                <div className='flex items-center gap-3 mb-3'>
                  <span className='flex-none w-9 h-9 rounded-full bg-blue-950 text-amber-400 font-bold text-sm flex items-center justify-center'>
                    {step.n}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span className='hidden lg:block h-px flex-1 bg-slate-200' />
                  )}
                </div>
                <p className='text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1'>
                  Step {i + 1}
                </p>
                <h3 className='font-semibold text-blue-950 mb-1.5'>
                  {step.title}
                </h3>
                <p className='text-sm text-slate-600'>{step.body}</p>
              </li>
            ))}
          </ol>
          <p className='text-slate-500 text-sm mt-10 italic'>
            This simple process can turn rainfall into a useful resource instead
            of uncontrolled runoff.
          </p>
        </section>

        {/* ==================== SOLUTIONS FOR DIFFERENT PROJECTS ==================== */}
        <section className='bg-blue-950'>
          <div className='max-w-6xl mx-auto px-6 py-10'>
            <p className='text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3'>
              Who We Serve
            </p>
            <h2 className='text-2xl md:text-3xl font-bold text-white mb-2'>
              Rainwater Harvesting Solutions for Different Projects
            </h2>
            <p className='text-blue-100/70 max-w-2xl mb-10'>
              Every property has different water requirements. Our solutions can
              be designed for a wide range of applications.
            </p>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
              {PROJECT_TYPES.map(p => (
                <div
                  key={p.title}
                  className='bg-white/5 border border-white/10 rounded-lg p-6'
                >
                  <h3 className='font-semibold text-white mb-2'>{p.title}</h3>
                  <p className='text-sm text-blue-100/70'>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ WHY CHOOSE US ============================ */}
        <section className='max-w-6xl mx-auto px-6 py-10'>
          <p className='text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3'>
            The InRain Difference
          </p>
          <h2 className='text-2xl md:text-3xl font-bold text-blue-950 mb-2'>
            Why Choose InRain Construction?
          </h2>
          <p className='text-slate-600 max-w-2xl mb-10'>
            Choosing the right{' '}
            <a className='underline font-semibold' target='_blank' href='/'>
              rainwater harvesting service
            </a>{' '}
            provider is important because the performance of a system depends
            heavily on its design. At InRain Construction, we focus on
            developing solutions around the actual requirements of each project.
          </p>

          <div className='grid sm:grid-cols-2 lg:grid-cols-5 gap-6'>
            {WHY_US.map((item, i) => (
              <div
                key={item.title}
                className='border-t-2 border-amber-400 pt-4'
              >
                <span className='text-3xl font-bold text-slate-200'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className='font-semibold text-blue-950 mt-2 mb-1.5'>
                  {item.title}
                </h3>
                <p className='text-sm text-slate-600'>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================ SERVING DELHI-NCR ============================ */}
        <section className='bg-slate-50'>
          <div className='max-w-6xl mx-auto px-6 py-10'>
            <p className='text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3'>
              Coverage
            </p>
            <h2 className='text-2xl md:text-3xl font-bold text-blue-950 mb-2'>
              Serving Delhi-NCR
            </h2>
            <p className='text-slate-600 max-w-2xl mb-8'>
              We provide rainwater harvesting solutions for projects across the
              Delhi-NCR region, including:
            </p>

            <div className='flex flex-wrap gap-3 mb-8'>
              {NCR_LOCATIONS.map(loc => (
                <span
                  key={loc}
                  className='inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-blue-950'
                >
                  <IconMapPin className='w-4 h-4 text-emerald-600' />
                  {loc}
                </span>
              ))}
              <span className='inline-flex items-center gap-2 bg-white border border-dashed border-slate-300 rounded-full px-4 py-2 text-sm text-slate-500'>
                Other surrounding NCR locations
              </span>
            </div>

            <p className='text-slate-600 max-w-2xl'>
              The specific design of a rainwater harvesting system should always
              be based on local site conditions rather than assuming that one
              solution will work equally well everywhere.
            </p>
          </div>
        </section>

        {/* ==================== MORE THAN RAINWATER HARVESTING ==================== */}
        <section className='max-w-6xl mx-auto px-6 py-10'>
          <div className='grid md:grid-cols-2 gap-12'>
            <div>
              <p className='text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3'>
                Beyond Installation
              </p>
              <h2 className='text-2xl md:text-3xl font-bold text-blue-950 mb-4'>
                More Than Rainwater Harvesting — Better Water Management
              </h2>
              <p className='text-slate-600 mb-4'>
                A good rainwater harvesting system is not simply a collection of
                pipes and a recharge structure.
              </p>
              <p className='text-slate-600 mb-4'>
                It is part of a larger water-management strategy.
              </p>
              <p className='text-slate-600'>
                The goal is to answer important questions before the system is
                installed:
              </p>
            </div>
            <div className='space-y-0'>
              {QUESTIONS.map((q, i) => (
                <div
                  key={q}
                  className='flex items-baseline gap-4 py-4 border-b border-slate-200 first:pt-0'
                >
                  <span className='font-serif text-slate-300 text-2xl leading-none'>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className='font-medium text-blue-950'>{q}</p>
                </div>
              ))}
              <p className='text-slate-500 text-sm pt-5'>
                Answering these questions helps create a system that is better
                suited to the actual needs of the project.
              </p>
            </div>
          </div>
        </section>

        {/* ============================ FINAL CTA ============================ */}
        <section id='cta' className='bg-blue-950 relative overflow-hidden'>
          <div className='absolute -right-24 -top-24 w-72 h-72 rounded-full bg-sky-500/10' />
          <div className='absolute -left-16 bottom-0 w-56 h-56 rounded-full bg-amber-400/10' />
          <div className='relative max-w-6xl mx-auto px-6 py-16 md:py-20'>
            <p className='text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3'>
              Build a Smarter Rainwater Management System
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-5 max-w-2xl'>
              Let's Make Every Drop Count
            </h2>
            <p className='text-blue-100/75 max-w-2xl mb-3'>
              Delhi-NCR's growing population, expanding infrastructure and
              increasing water requirements make responsible water management
              more important than ever.
            </p>
            <p className='text-blue-100/75 max-w-2xl mb-3'>
              Rainwater harvesting provides an opportunity to make better use of
              rainfall while supporting groundwater recharge, reducing runoff
              and improving a project's overall water-management strategy.
            </p>
            <p className='text-blue-100/75 max-w-2xl mb-3'>
              At InRain Construction, we combine practical design with modern
              rainwater harvesting solutions to help residential, commercial,
              industrial and institutional projects manage water more
              responsibly.
            </p>
            <p className='text-blue-100/75 max-w-2xl mb-8'>
              Whether you need a rooftop rainwater harvesting system,
              groundwater recharge solution, modular rainwater harvesting
              system, rainwater filtration system or stormwater management
              solution, we can help you evaluate the right approach for your
              site.
            </p>
            <p className='text-white font-medium mb-6'>
              Looking for a Rainwater Harvesting Service Provider in Delhi-NCR?
              Talk to InRain Construction about your project requirements.
            </p>
            <div className='flex flex-wrap gap-3'>
              <Link
                href='/contact'
                className='bg-amber-400 hover:bg-amber-300 text-blue-950 font-semibold px-6 py-3 rounded-md transition-colors'
              >
                Get a Site Assessment
              </Link>
              <Link
                href='/contact'
                className='bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-md transition-colors border border-white/20'
              >
                Request a Rainwater Harvesting Solution
              </Link>
              <Link
                href='/contact'
                className='border border-white/30 hover:border-white text-white px-6 py-3 rounded-md transition-colors'
              >
                Talk to Our Experts
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
