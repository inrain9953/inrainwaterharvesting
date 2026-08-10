import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import StaticMetatag from '@/components/Schema/StaticMetatag'
import Image from 'next/image'
import Link from 'next/link'

const topCompanies = [
  {
    rank: 1,
    name: 'InRain Construction Private Limited',
    highlight: true,
    paragraphs: [
      'InRain Construction Private Limited is one of the prominent names in the rainwater harvesting sector, with a strong focus on practical and sustainable water management solutions.',
      'The company specializes in Modular Rainwater Harvesting Systems, offering solutions designed according to the site conditions, water requirement, available space, and groundwater recharge potential.',
      'What makes a modular rainwater harvesting system particularly useful is its ability to create an underground water management structure without requiring a large conventional concrete tank.'
    ]
  },
  {
    rank: 2,
    name: 'D&D Ecotech Service',
    paragraphs: [
      'D&D Ecotech Service is another name associated with environmental and water management solutions.'
    ]
  },
  {
    rank: 3,
    name: 'Retas Water Solution',
    paragraphs: [
      'Retas Water Solution operates in the water management sector and provides solutions aimed at improving water conservation and management.'
    ]
  },
  {
    rank: 4,
    name: 'Rainy Filters',
    paragraphs: [
      'Filtration is one of the most important stages of a rainwater harvesting system. Rainwater collected from rooftops and other catchment surfaces can contain dust, leaves, debris, and other impurities.'
    ]
  },
  {
    rank: 5,
    name: 'IMARC Group',
    paragraphs: [
      'In the rainwater harvesting sector, market research organizations can provide useful information about industry trends, technologies, market growth, and changing demand for water conservation solutions.'
    ]
  },
  {
    rank: 6,
    name: 'NS Associates',
    paragraphs: [
      'NS Associates is another company included in our list of rainwater harvesting solution providers in India.'
    ]
  },
  {
    rank: 7,
    name: 'Vardhman Envirotech',
    paragraphs: [
      'Vardhman Envirotech is associated with environmental and water-related solutions.'
    ]
  },
  {
    rank: 8,
    name: 'DV Water Harvesters',
    paragraphs: [
      'DV Water Harvesters focuses on water harvesting and conservation solutions.'
    ]
  },
  {
    rank: 9,
    name: 'Bana Envirotech',
    paragraphs: [
      'Bana Envirotech is another company included among rainwater harvesting and environmental solution providers.'
    ]
  },
  {
    rank: 10,
    name: 'Hydrostatics Watertech Consultant LLP',
    paragraphs: [
      'Hydrostatics Watertech Consultant LLP is included in this list for its association with water technology and consultancy services.'
    ]
  }
]

const keyFeatures = [
  'High Water Storage Capacity',
  'Space Optimization',
  'Scalability & Flexibility',
  'Faster Installation',
  'Long-Term Durability',
  'Low Maintenance'
]

const keyBenefitsList = [
  {
    title: 'Space Optimization',
    text: 'One of the biggest advantages of modular systems is underground installation. The land above the system can continue to be used for roads, parking areas, gardens, walkways, and other purposes. This is particularly valuable for urban projects where land is expensive and limited.'
  },
  {
    title: 'Scalable Capacity',
    text: 'A modular system can be designed for different capacities. Whether the requirement is for a relatively small residential development or a large industrial facility, the number and arrangement of modules can be planned according to the required capacity.'
  },
  {
    title: 'Reduced Dependence on Conventional Water Sources',
    text: 'Harvesting rainwater provides an additional source of water that can be used appropriately after treatment or directed toward groundwater recharge. This can help reduce pressure on municipal supplies and groundwater resources.'
  },
  {
    title: 'Groundwater Recharge',
    text: 'In suitable geological and soil conditions, harvested rainwater can be directed toward groundwater recharge. Instead of allowing rainwater to quickly run into stormwater drains, the system can help retain water within the project area and allow it to infiltrate gradually.'
  },
  {
    title: 'Reduced Runoff',
    text: 'Heavy rainfall can create substantial runoff from rooftops and paved areas. Capturing a portion of this runoff can help manage water more efficiently and potentially reduce pressure on conventional drainage infrastructure.'
  },
  {
    title: 'Flexible Installation',
    text: 'Modular systems can be configured according to the available underground space and project requirements. This flexibility makes them suitable for a wide range of applications.'
  }
]

const comparisonRows = [
  ['Installation', 'Modular and systematic', 'Conventional civil construction'],
  ['Underground space', 'Efficiently utilized', 'Depends on structure design'],
  ['Design flexibility', 'High', 'Comparatively limited'],
  [
    'Surface usage',
    'Can generally continue after installation',
    'Can also be restored, depending on construction'
  ],
  [
    'Installation process',
    'Can be comparatively faster',
    'Usually involves more civil work'
  ],
  [
    'Scalability',
    'Modules can be configured according to requirement',
    'Expansion may require additional construction'
  ],
  [
    'Application',
    'Storage/recharge solutions',
    'Storage/recharge depending on design'
  ]
]

const whereUsed = [
  {
    title: 'Residential Projects',
    text: 'Apartment complexes, housing societies, villas, and residential developments can use modular systems to manage rooftop rainwater and support groundwater recharge.'
  },
  {
    title: 'Industrial Facilities',
    text: 'Factories and industrial campuses often have large rooftop and paved areas that generate significant rainwater runoff. Modular systems can help manage this water effectively.'
  },
  {
    title: 'Commercial Buildings',
    text: 'Shopping complexes, office buildings, hotels, warehouses, and business parks can incorporate modular rainwater harvesting into their water management infrastructure.'
  },
  {
    title: 'Educational Institutions',
    text: 'Schools, colleges, universities, and campuses can use rainwater harvesting systems to conserve water while also demonstrating sustainable practices.'
  },
  {
    title: 'Government Infrastructure',
    text: 'Public buildings, government offices, roads, institutional campuses, and other infrastructure projects can benefit from planned rainwater management systems.'
  },
  {
    title: 'Large Developments',
    text: 'Townships, smart cities, industrial parks, and large construction projects can use modular systems because the technology can be configured for larger capacities.'
  }
]

const approachSteps = [
  {
    title: 'Catchment Area',
    text: 'How much rainwater can potentially be collected?'
  },
  {
    title: 'Rainfall Pattern',
    text: 'How much rainfall does the location typically receive?'
  },
  {
    title: 'Site Conditions',
    text: 'What are the soil and geological conditions?'
  },
  {
    title: 'Water Requirement',
    text: 'Is the objective storage, reuse, groundwater recharge, or a combination?'
  },
  { title: 'Available Space', text: 'Where can the system be installed?' },
  {
    title: 'Filtration Requirement',
    text: 'What filtration arrangement is appropriate?'
  },
  {
    title: 'System Capacity',
    text: 'How much water should the system handle?'
  },
  {
    title: 'Overflow Management',
    text: 'Where should excess water go during heavy rainfall?'
  },
  {
    title: 'Maintenance',
    text: 'How can the system remain effective over the long term?'
  }
]

const whyChoose = [
  {
    title: 'Modular Rainwater Harvesting Expertise',
    text: 'The company focuses on modern modular approaches to underground rainwater management.'
  },
  {
    title: 'Customized Solutions',
    text: 'Systems can be designed according to project-specific requirements rather than following a fixed configuration.'
  },
  {
    title: 'Suitable for Large Projects',
    text: 'Modular systems can be planned for commercial, industrial, institutional, and infrastructure applications.'
  },
  {
    title: 'Focus on Water Conservation',
    text: 'The approach emphasizes capturing and managing rainwater rather than allowing valuable rainfall to become uncontrolled runoff.'
  },
  {
    title: 'Efficient Underground Design',
    text: 'The underground structure allows the surface to remain available for other uses.'
  },
  {
    title: 'Complete Rainwater Management',
    text: 'From collection and filtration to underground storage or recharge, different components can be integrated into one solution.'
  }
]

export default function Top10RainwaterHarvestingCompanies () {
  const data = {
    title: '#1 in the Top 10 Rainwater Harvesting Companies in India',
    desc: 'Discover the top 10 rainwater harvesting companies in India. Learn about modular rainwater harvesting systems, their benefits, applications, and why InRain Construction is a trusted choice.',
    keyword:
      'top 10 rainwater harvesting companies in India, rainwater harvesting companies India, best rainwater harvesting companies, modular rainwater harvesting companies, rainwater harvesting solutions India, rainwater harvesting company, rainwater harvesting installation,',
    canonical:
      'https://www.inrainwaterharvesting.com/blogs/top-10-rainwater-harvesting-companies-in-india',
    ogTitle: '#1 in the Top 10 Rainwater Harvesting Companies in India',
    ogDescription:
      'Discover the top 10 rainwater harvesting companies in India. Learn about modular rainwater harvesting systems, their benefits, applications, and why InRain Construction is a trusted choice.',
    ogUrl:
      'https://www.inrainwaterharvesting.com/blogs/top-10-rainwater-harvesting-companies-in-india',
    twittertitle: '#1 in the Top 10 Rainwater Harvesting Companies in India',
    twitterdescription:
      'Discover the top 10 rainwater harvesting companies in India. Learn about modular rainwater harvesting systems, their benefits, applications, and why InRain Construction is a trusted choice.'
  }
  return (
    <>
      <StaticMetatag data={data} />
      <Navbar />
      <div className='bg-gray-50 min-h-screen'>
        {/* Hero Section */}
        <section className='relative'>
          <Image
            width={1920}
            height={500}
            src='/top-10-rainwater-harvesting-companies.jpeg'
            alt='Top 10 Rainwater Harvesting Companies in India'
            priority
            className='w-full h-[300px] md:h-[400px] object-cover'
          />

          <div className='absolute inset-0 bg-black/60 flex items-center justify-center'>
            <div className='max-w-5xl mx-auto px-6 text-center'>
              <span className='inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4'>
                Modular Rainwater Harvesting
              </span>

              <h1 className='text-xl md:text-4xl font-bold text-white leading-tight'>
                #1 in the Top 10 Rainwater Harvesting Companies in India
              </h1>

              <p className='mt-3 text-gray-200 text-xs md:text-sm max-w-3xl mx-auto'>
                A practical guide to the companies working in rainwater
                management, filtration, and modular rainwater harvesting
                solutions across India.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className='max-w-7xl mx-auto px-4 md:px-8 py-12'>
          <div className='grid lg:grid-cols-4 gap-12'>
            {/* Table of Contents */}
            <aside className='hidden lg:block'>
              <div className='sticky top-36 bg-white p-6 rounded-xl shadow-md border'>
                <h3 className='font-bold text-lg mb-4'>Table of Contents</h3>

                <ul className='space-y-3 text-gray-600 text-sm'>
                  <li>
                    <a href='#top-10'>Top 10 Companies</a>
                  </li>
                  <li>
                    <a href='#complete-approach'>
                      A Complete Approach to Rainwater Management
                    </a>
                  </li>
                  <li>
                    <a href='#why-popular'>Why Modular Systems Are Popular</a>
                  </li>
                  <li>
                    <a href='#features'>Key Features</a>
                  </li>
                  <li>
                    <a href='#benefits'>Key Benefits</a>
                  </li>
                  <li>
                    <a href='#comparison'>Modular vs. Conventional</a>
                  </li>
                  <li>
                    <a href='#where-used'>Where They Can Be Used</a>
                  </li>
                  <li>
                    <a href='#filtration'>Why Filtration Matters</a>
                  </li>
                  <li>
                    <a href='#approach'>InRain's Approach</a>
                  </li>
                  <li>
                    <a href='#why-choose'>Why Choose InRain</a>
                  </li>
                  <li>
                    <a href='#conclusion'>Final Thoughts</a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Main Content */}
            <article className='lg:col-span-3 bg-white rounded-2xl shadow-lg p-6 md:p-12'>
              <div className='prose prose-lg max-w-none'>
                {/* Introduction */}
                <p className='text-base text-gray-600 leading-relaxed border-l-4 border-blue-600 pl-5 italic'>
                  Water is one of the most important natural resources, but
                  increasing urbanization, population growth, groundwater
                  depletion, and irregular rainfall are creating serious water
                  challenges across India. As a result, rainwater harvesting has
                  become an increasingly practical solution for homes,
                  commercial buildings, industries, institutions, and large
                  infrastructure projects.
                  <br />
                  <br />
                  Among the different rainwater harvesting solutions available
                  today,{' '}
                  <Link
                    target='_blank'
                    href='https://www.inrainconstruction.com/modular-rainwater-harvesting'
                    className='text-blue-600 font-semibold hover:text-blue-700'
                  >
                    Modular Rainwater Harvesting Systems
                  </Link>{' '}
                  are gaining attention because they offer flexibility,
                  efficient use of underground space, easier installation, and
                  long-term durability.
                  <br />
                  <br />
                  A modular system uses specially designed underground modules
                  or crates to create a temporary storage or recharge structure.
                  These modules are installed below the ground and connected
                  with suitable filtration and drainage arrangements. Depending
                  on the project requirement, the system can be designed for
                  groundwater recharge, rainwater storage, or a combination of
                  both.
                  <br />
                  <br />
                  If you are planning to install a rainwater harvesting system
                  for a residential, commercial, industrial, or institutional
                  project, choosing the right company is important.
                  <br />
                  <br />
                  Here is our list of the{' '}
                  <strong>
                    Top 10 Rainwater Harvesting Companies in India
                  </strong>
                  , with a particular focus on companies working in rainwater
                  management and related solutions.
                </p>

                {/* Top 10 Companies */}
                <h2
                  id='top-10'
                  className='mt-12 text-3xl font-bold text-gray-900'
                >
                  Top 10 Rainwater Harvesting Companies
                </h2>

                <div className='mt-6 space-y-6'>
                  {topCompanies.map(company => (
                    <div
                      key={company.rank}
                      className={`rounded-xl p-6 border ${
                        company.highlight
                          ? 'bg-blue-50 border-blue-200'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className='flex gap-5 items-start'>
                        <div
                          className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-bold text-white ${
                            company.highlight ? 'bg-blue-600' : 'bg-gray-400'
                          }`}
                        >
                          {company.rank}
                        </div>
                        <div className='w-full'>
                          <h3 className='font-bold text-xl text-gray-900'>
                            {company.name}
                            {company.highlight && (
                              <span className='ml-2 inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full align-middle'>
                                Featured
                              </span>
                            )}
                          </h3>

                          {company.paragraphs.map((p, i) => (
                            <p key={i} className='text-gray-600 mt-3'>
                              {p}
                            </p>
                          ))}

                          {company.subsections?.map(sub => (
                            <div key={sub.heading} className='mt-4'>
                              <h4 className='font-semibold text-lg text-gray-900'>
                                {sub.heading}
                              </h4>
                              {sub.paragraphs.map((p, i) => (
                                <p key={i} className='text-gray-600 mt-2'>
                                  {p}
                                </p>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Benefits of InRain's Modular System (original numbered list) */}
                <h3 className='mt-10 text-2xl font-bold text-gray-900'>
                  Benefits of InRain's Modular Rainwater Harvesting System
                </h3>

                <div className='mt-6 space-y-6'>
                  <div>
                    <h4 className='font-semibold text-lg'>
                      1. Efficient Use of Underground Space
                    </h4>
                    <p className='text-gray-600 mt-2'>
                      Modular systems are installed underground, allowing the
                      surface area to continue being used for parking,
                      landscaping, roads, gardens, or other purposes.
                    </p>
                    <p className='text-gray-600 mt-2'>
                      This makes them particularly useful in cities where open
                      space is limited.
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold text-lg'>
                      2. High Water Storage Capacity
                    </h4>
                    <p className='text-gray-600 mt-2'>
                      Modular structures can create a large underground void for
                      temporarily storing rainwater. The capacity can be
                      increased or adjusted by changing the size and
                      configuration of the modular system.
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold text-lg'>
                      3. Suitable for Groundwater Recharge
                    </h4>
                    <p className='text-gray-600 mt-2'>
                      The system can be designed to allow collected rainwater to
                      gradually infiltrate into the surrounding soil, helping
                      replenish groundwater reserves where site conditions are
                      suitable.
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold text-lg'>
                      4. Flexible Design
                    </h4>
                    <p className='text-gray-600 mt-2'>
                      Every site has different requirements. Modular systems can
                      be designed according to available space, expected
                      rainfall, catchment area, soil conditions, and required
                      storage or recharge capacity.
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold text-lg'>
                      5. Faster Installation
                    </h4>
                    <p className='text-gray-600 mt-2'>
                      Compared with constructing large conventional underground
                      concrete structures, modular systems can simplify the
                      installation process and reduce construction-related work.
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold text-lg'>
                      6. Lightweight Construction
                    </h4>
                    <p className='text-gray-600 mt-2'>
                      Rainwater harvesting modules are designed to provide
                      structural support while creating an underground storage
                      or recharge void. Their lightweight nature can make
                      transportation and installation more convenient.
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold text-lg'>
                      7. Long-Term Solution
                    </h4>
                    <p className='text-gray-600 mt-2'>
                      When properly designed, installed, and maintained, modular
                      rainwater harvesting systems can provide a reliable
                      long-term approach to managing rainwater.
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold text-lg'>
                      8. Helps Reduce Surface Runoff
                    </h4>
                    <p className='text-gray-600 mt-2'>
                      During heavy rainfall, large volumes of water can flow
                      over roads, rooftops, and paved surfaces. A properly
                      designed rainwater harvesting system can capture a portion
                      of this runoff and direct it toward storage or recharge.
                    </p>
                  </div>
                </div>

                {/* A Complete Approach */}
                <h3
                  id='complete-approach'
                  className='mt-10 text-2xl font-bold text-gray-900'
                >
                  A Complete Approach to Rainwater Management
                </h3>

                <p className='mt-3'>
                  A modular system should not be viewed as only an underground
                  structure. Effective rainwater harvesting requires proper
                  planning of the entire water flow—from the catchment area and
                  rainwater pipes to filtration, collection, storage, and
                  recharge.
                </p>
                <p className='mt-3'>
                  InRain Construction focuses on this complete approach to
                  develop solutions according to individual project
                  requirements.
                </p>
                <p className='mt-3'>
                  For organizations looking for a{' '}
                  <Link
                    target='_blank'
                    href='https://www.inrainwaterharvesting.com/modular-rainwater-harvesting-system'
                    className='text-blue-600 font-semibold hover:text-blue-700'
                  >
                    Modular Rainwater Harvesting System in India
                  </Link>
                  , InRain Construction can be considered for projects requiring
                  customized and scalable rainwater management solutions.
                </p>

                {/* Why Popular */}
                <h2
                  id='why-popular'
                  className='mt-14 text-3xl font-bold text-gray-900'
                >
                  Why Are Modular Rainwater Harvesting Systems Becoming Popular?
                </h2>

                <p className='mt-3'>
                  Traditional rainwater harvesting structures often rely on
                  concrete tanks, recharge pits, or conventional underground
                  structures.
                </p>
                <p className='mt-3'>
                  Although these methods can be effective in suitable
                  situations, modern construction projects increasingly require
                  solutions that are space-efficient, flexible, faster to
                  install, and easier to integrate with existing infrastructure.
                </p>
                <p className='mt-3'>
                  This is where modular rainwater harvesting systems can provide
                  significant advantages.
                </p>
                <p className='mt-3'>
                  A modular system consists of interconnected underground
                  modules that create a large void beneath the ground. Depending
                  on the design, rainwater can either be temporarily stored or
                  gradually released into the surrounding ground for recharge.
                </p>
                <p className='mt-3'>
                  The system can be customized according to the project's
                  requirements.
                </p>

                {/* Key Features */}
                <h2
                  id='features'
                  className='mt-14 text-3xl font-bold text-gray-900'
                >
                  Key Features of Modular Rainwater Harvesting Systems
                </h2>

                <div className='grid md:grid-cols-2 gap-6 my-8'>
                  {keyFeatures.map(feature => (
                    <div
                      key={feature}
                      className='bg-sky-100 hover:bg-sky-200 border rounded-xl p-5 hover:shadow-lg transition'
                    >
                      <h4 className='font-semibold text-lg'>{feature}</h4>
                    </div>
                  ))}
                </div>

                {/* Key Benefits */}
                <h2
                  id='benefits'
                  className='mt-14 text-3xl font-bold text-gray-900'
                >
                  Key Benefits of Modular Rainwater Harvesting
                </h2>

                <div className='mt-6 space-y-6'>
                  {keyBenefitsList.map(benefit => (
                    <div key={benefit.title}>
                      <h4 className='font-semibold text-lg text-gray-900'>
                        {benefit.title}
                      </h4>
                      <p className='text-gray-600 mt-2'>{benefit.text}</p>
                    </div>
                  ))}
                </div>

                {/* Comparison Table */}
                <h2
                  id='comparison'
                  className='mt-14 text-3xl font-bold text-gray-900'
                >
                  Modular Rainwater Harvesting vs. Conventional Rainwater
                  Harvesting
                </h2>

                <div className='overflow-x-auto my-8 border rounded-xl'>
                  <table className='w-full text-sm text-left border-collapse'>
                    <thead>
                      <tr className='bg-blue-600 text-white'>
                        <th className='p-4 font-semibold'>Feature</th>
                        <th className='p-4 font-semibold'>
                          Modular Rainwater Harvesting
                        </th>
                        <th className='p-4 font-semibold'>
                          Conventional Rainwater Harvesting
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, i) => (
                        <tr
                          key={row[0]}
                          className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                        >
                          <td className='p-4 font-medium text-gray-900'>
                            {row[0]}
                          </td>
                          <td className='p-4 text-gray-600'>{row[1]}</td>
                          <td className='p-4 text-gray-600'>{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className='text-gray-600'>
                  The right choice ultimately depends on the project's site
                  conditions, engineering requirements, budget, and water
                  management objectives.
                </p>

                {/* Where Used */}
                <h2
                  id='where-used'
                  className='mt-14 text-3xl font-bold text-gray-900'
                >
                  Where Can Modular Rainwater Harvesting Systems Be Used?
                </h2>

                <p className='mt-3'>
                  Modular rainwater harvesting is suitable for many types of
                  properties and infrastructure.
                </p>

                <div className='bg-green-50 border border-green-200 rounded-xl p-8 my-8'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    {whereUsed.map(item => (
                      <div key={item.title}>
                        <h4 className='font-semibold text-xl text-green-700'>
                          {item.title}
                        </h4>
                        <p className='text-gray-600 mt-2'>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Filtration */}
                <h2
                  id='filtration'
                  className='mt-14 text-3xl font-bold text-gray-900'
                >
                  Why Proper Filtration Matters
                </h2>

                <p className='mt-3'>
                  Installing underground modules alone is not enough to create
                  an effective rainwater harvesting system.
                </p>
                <p className='mt-3'>
                  Rainwater should first pass through an appropriately designed
                  filtration arrangement.
                </p>
                <p className='mt-3'>Rooftop and surface runoff can contain:</p>

                <div className='bg-red-50 border border-red-200 rounded-xl p-6 my-8'>
                  <ul className='grid md:grid-cols-2 gap-3'>
                    <li>✓ Dust</li>
                    <li>✓ Leaves</li>
                    <li>✓ Sand</li>
                    <li>✓ Organic debris</li>
                    <li>✓ Suspended particles</li>
                    <li>✓ Other contaminants</li>
                  </ul>

                  <p className='mt-5 text-base text-gray-600 leading-6 italic'>
                    If these materials enter the underground structure without
                    suitable filtration, they can reduce system efficiency and
                    increase maintenance requirements.
                    <br />
                    <br />
                    Therefore, the filtration stage should be designed according
                    to the catchment area and expected water quality.
                    <br />
                    <br />A complete rainwater harvesting solution should
                    consider collection + filtration + storage/recharge +
                    overflow management + maintenance.
                  </p>
                </div>

                {/* InRain's Approach */}
                <h2
                  id='approach'
                  className='mt-14 text-3xl font-bold text-gray-900'
                >
                  How InRain Construction Approaches Modular Rainwater
                  Harvesting
                </h2>

                <p className='mt-3'>
                  At InRain Construction, the objective is not simply to install
                  modules underground.
                </p>
                <p className='mt-3'>
                  The system should work as part of a complete rainwater
                  management strategy.
                </p>
                <p className='mt-3'>
                  A typical project involves understanding:
                </p>

                <div className='bg-blue-50 rounded-xl p-6 border border-blue-100 my-8'>
                  <ol className='space-y-4'>
                    {approachSteps.map((step, i) => (
                      <li key={step.title} className='flex gap-4 items-start'>
                        <span className='w-8 h-8 shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm'>
                          {i + 1}
                        </span>
                        <span className='text-gray-700 text-sm md:text-base pt-1'>
                          <strong>{step.title}</strong> – {step.text}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <p className='mt-3'>
                  This project-specific approach is important because every
                  location is different.
                </p>

                {/* Why Choose InRain */}
                <h2
                  id='why-choose'
                  className='mt-14 text-3xl font-bold text-gray-900'
                >
                  Why Choose InRain Construction for a Modular Rainwater
                  Harvesting System?
                </h2>

                <p className='mt-3'>
                  When selecting a rainwater harvesting company, the lowest
                  initial cost should not be the only consideration.
                </p>
                <p className='mt-3'>
                  The quality of design, materials, filtration, installation,
                  site assessment, and long-term performance can have a
                  significant impact on the effectiveness of the system.
                </p>
                <p className='mt-3'>
                  InRain Construction focuses on providing practical rainwater
                  harvesting solutions based on project requirements.
                </p>

                <h4 className='mt-6 font-semibold text-lg text-gray-900'>
                  Some key reasons to consider InRain Construction include:
                </h4>

                <div className='grid md:grid-cols-2 gap-6 my-8'>
                  {whyChoose.map(item => (
                    <div
                      key={item.title}
                      className='bg-gray-50 border rounded-xl p-5 hover:shadow-lg transition'
                    >
                      <h4 className='font-semibold text-lg text-blue-700'>
                        ✔ {item.title}
                      </h4>
                      <p className='text-gray-600 mt-2 text-sm'>{item.text}</p>
                    </div>
                  ))}
                </div>

                {/* Conclusion */}
                <h2
                  id='conclusion'
                  className='mt-14 text-3xl font-bold text-gray-900'
                >
                  Final Thoughts
                </h2>

                <p className='mt-3'>
                  Rainwater harvesting is no longer simply an environmental
                  initiative. With increasing water demand and pressure on
                  groundwater resources, it is becoming an important part of
                  modern infrastructure planning.
                </p>
                <p className='mt-3'>
                  The development of{' '}
                  <strong>Modular Rainwater Harvesting Systems</strong> has made
                  it possible to create flexible underground water management
                  structures that can be adapted to different project
                  requirements.
                </p>
                <p className='mt-3'>
                  The companies mentioned in this list represent different areas
                  of the rainwater harvesting, water management, filtration,
                  environmental technology, and consultancy ecosystem.
                </p>
                <p className='mt-3'>
                  However, if your primary requirement is a{' '}
                  <strong>Modular Rainwater Harvesting System</strong>, it is
                  important to select a company with relevant technical
                  expertise, project experience, appropriate filtration
                  solutions, and the ability to customize the system according
                  to site conditions.
                </p>
                <p className='mt-3'>
                  <strong>InRain Construction Private Limited</strong> is a
                  strong option for organizations looking to implement modern
                  modular rainwater harvesting solutions across residential,
                  commercial, industrial, institutional, and infrastructure
                  projects.
                </p>
                <p className='mt-3'>
                  With the right design and installation, rainwater that would
                  otherwise become runoff can become a valuable resource for{' '}
                  <strong>
                    water conservation, groundwater recharge, and sustainable
                    water management
                  </strong>
                  .
                </p>

                <div className='bg-blue-50 border border-blue-200 rounded-xl p-8 my-8 text-center'>
                  <h4 className='font-semibold text-xl text-gray-900'>
                    Looking for a Modular Rainwater Harvesting System?
                  </h4>
                  <p className='text-gray-600 mt-3'>
                    If you are planning a new construction project or want to
                    upgrade the rainwater harvesting system at an existing
                    property, a properly designed modular solution can help you
                    make better use of available rainfall and underground space.
                  </p>
                  <p className='mt-4 font-semibold text-gray-900'>
                    Choose sustainable water management today and make every
                    drop of rain count.
                  </p>
                  <Link
                    href='https://www.inrainwaterharvesting.com/modular-rainwater-harvesting-system'
                    target='_blank'
                    className='inline-block mt-5 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition'
                  >
                    Explore Modular Rainwater Harvesting
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
