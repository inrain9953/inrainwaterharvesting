import Script from 'next/script'

const DynamicSchema = ({ city, slug, heading, subheading, page }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',

    name: 'GeoTech Ecosystem',
    alternateName: 'GeoTech Ecosystem - Rainwater Harvesting System',
    description: `Professional ${heading} in ${city.city}. GeoTech Ecosystem provides ${subheading}, groundwater recharge systems, rainwater filtration, flood mitigation, storm water management and sustainable water conservation solutions in ${city.city}.`,
    url: `https://inrainwaterharvesting.com/${page}/${slug}`,
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.inrainwaterharvesting.com/logo.svg'
    },
    image: 'https://www.inrainwaterharvesting.com/logo.png',

    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '9910220794',
        email: 'sales@inrainwaterharvesting.com',
        contactType: 'customer enquiry'
      }
    ],

    address: {
      '@type': 'PostalAddress',
      addressLocality: city.city,
      postalCode: city.postal_code,
      addressRegion: 'IN'
    },

    areaServed: {
      '@type': 'Country',
      name: 'India'
    },

    parentOrganization: {
      '@type': 'Organization',
      name: 'InRain Construction Pvt. Ltd.',
      url: 'https://www.inrainconstruction.com/'
    },

    sameAs: [
      'https://www.facebook.com/inrainconstructionofficial',
      'https://x.com/InrainC',
      'https://www.instagram.com/inrainconstruction/',
      'https://in.pinterest.com/inrainc0212/'
    ],

    brand: {
      '@type': 'Brand',
      name: 'GeoTech Ecosystem'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      ratingCount: '2197'
    }
  }

  return (
    <Script
      id={`schema-${slug}`}
      type='application/ld+json'
      strategy='beforeInteractive'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}

export default DynamicSchema
