import { CityData } from '@/components/constant'

const BASE_URL = 'https://www.inrainwaterharvesting.com'

function generateSiteMap () {
  const staticPages = [
    '/',
    '/about',
    '/products',
    '/contact',
    '/services',
    '/blogs',
    '/business-network',
    '/rainwater-harvesting-system',
    '/rainwater-harvesting-tank',
    '/modular-rainwater-harvesting-system',
    '/rooftop-rainwater-harvesting',
    '/polymer-type-rainwater-harvesting-system',
    '/storm-water-management-company',
    'new-technology-of-rainwater-harvesting',
    '/ground-water-recharge-system',
    '/modular-rainwater-harvesting-tanks-supplier',
    '/new-generation-of-rainwater-harvesting',
    '/rainwater-harvesting-solution-for-industries',
    '/rainwater-harvesting-suppliers',
    '/rainwater-harvesting-for-flood-mitigation',
    '/prefabricated-rainwater-harvesting',
    '/water-harvesting-system',
    '/rainwater-harvesting-pit'
  ]

  // Static pages
  const staticUrls = staticPages
    .map(
      page => `
      <url>
        <loc>${BASE_URL}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
    )
    .join('')

  // Rainwater Harvesting System Location Dynamic pages
  const RainwaterHarvestingSystemLocation = CityData.map(
    city => `
      <url>
        <loc>
          ${BASE_URL}/rainwater-harvesting-system/${city.slug}
        </loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
  ).join('')

  // Rainwater Harvesting Tank Location Dynamic pages
  const RainwaterHarvestingTankLocation = CityData.map(
    city => `
      <url>
        <loc>
          ${BASE_URL}/rainwater-harvesting-tank/${city.slug}
        </loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
  ).join('')

  // Modular Rainwater Harvesting System Location Dynamic pages
  const ModularRWHSytemLocation = CityData.map(
    city => `
      <url>
        <loc>
          ${BASE_URL}/modular-rainwater-harvesting-system/${city.slug}
        </loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
  ).join('')

  // Rooftop Rainwater Harvesting Location Dynamic pages
  const RooftopRWH = CityData.map(
    city => `
      <url>
        <loc>
          ${BASE_URL}/rooftop-rainwater-harvesting/${city.slug}
        </loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
  ).join('')

  // Polymer Type Rainwater Harvesting System Location Dynamic pages
  const PolymerTypeRWHSystem = CityData.map(
    city => `
      <url>
        <loc>
          ${BASE_URL}/polymer-type-rainwater-harvesting-system/${city.slug}
        </loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
  ).join('')

  // Storm Water Management Company Location Dynamic pages
  const StormWaterManagementCompany = CityData.map(
    city => `
      <url>
        <loc>
          ${BASE_URL}/storm-water-management-company/${city.slug}
        </loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
  ).join('')

  // New Technology of Rainwater Harvesting Location Dynamic pages
  const NewTechnologyOfRWH = CityData.map(
    city => `
      <url>
        <loc>
          ${BASE_URL}/new-technology-of-rainwater-harvesting/${city.slug}
        </loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
  ).join('')

  // Ground Water Recharge System Location Dynamic pages
  const GroundWaterRechargeSystem = CityData.map(
    city => `
      <url>
        <loc>
          ${BASE_URL}/ground-water-recharge-system/${city.slug}
        </loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
  ).join('')

  // Modular Rainwater Harvesting Tanks Supplier Location Dynamic pages
  const ModularRWHTankSupplier = CityData.map(
    city => `
      <url>
        <loc>
          ${BASE_URL}/modular-rainwater-harvesting-tanks-supplier/${city.slug}
        </loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
  ).join('')

  // New Generation of Rainwater Harvesting Location Dynamic pages
  const NewGenerationOfRWH = CityData.map(
    city => `
      <url>
        <loc>
          ${BASE_URL}/new-generation-of-rainwater-harvesting/${city.slug}
        </loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
  ).join('')

  // Rainwater Harvesting Solution for Industries Location Dynamic pages
  const RWHSolutionForIndustries = CityData.map(
    city => `
      <url>
        <loc>
          ${BASE_URL}/rainwater-harvesting-solution-for-industries/${city.slug}
        </loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
  ).join('')

  // Rainwater Harvesting Supplier Location Dynamic pages
  const RWHSupplier = CityData.map(
    city => `
      <url>
        <loc>
          ${BASE_URL}/rainwater-harvesting-suppliers/${city.slug}
        </loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
  ).join('')

  // Rainwater Harvesting for Flood Mitigation Location Dynamic pages
  const RWHForFloodMitigation = CityData.map(
    city => `
      <url>
        <loc>
          ${BASE_URL}/rainwater-harvesting-for-flood-mitigation/${city.slug}
        </loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
  ).join('')

  // Prefabricated Rainwater Harvesting Location Dynamic pages
  const PrefabricatedRWH = CityData.map(
    city => `
      <url>
        <loc>
          ${BASE_URL}/prefabricated-rainwater-harvesting/${city.slug}
        </loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
  ).join('')

  // Water Harvesting System Location Dynamic pages
  const WHSystem = CityData.map(
    city => `
      <url>
        <loc>
          ${BASE_URL}/water-harvesting-system/${city.slug}
        </loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
  ).join('')

  // Rainwater Harvesting Pit Location Dynamic pages
  const RWHPit = CityData.map(
    city => `
      <url>
        <loc>
          ${BASE_URL}/rainwater-harvesting-pit/${city.slug}
        </loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
  ).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  >
    ${staticUrls}
    ${RainwaterHarvestingSystemLocation}
    ${RainwaterHarvestingTankLocation}
    ${ModularRWHSytemLocation}
    ${RooftopRWH}
    ${PolymerTypeRWHSystem}
    ${StormWaterManagementCompany}
    ${NewTechnologyOfRWH}
    ${GroundWaterRechargeSystem}
    ${ModularRWHTankSupplier}
    ${NewGenerationOfRWH}
    ${RWHSolutionForIndustries}
    ${RWHSupplier}
    ${RWHForFloodMitigation}
    ${PrefabricatedRWH}
    ${WHSystem}
    ${RWHPit}
  </urlset>`
}

export async function getServerSideProps ({ res }) {
  const sitemap = generateSiteMap()

  res.setHeader('Content-Type', 'text/xml')

  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default function Sitemap () {
  return null
}
