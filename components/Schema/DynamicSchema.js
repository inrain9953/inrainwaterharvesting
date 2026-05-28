import Script from 'next/script'

const DynamicSchema = ({ city, slug, heading, subheading, page }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',

    name: 'InRain® Construction Pvt. Ltd.',
    alternateName: 'InRain®',

    description: `Professional ${heading} in ${city.city}. InRain Construction provides ${subheading}, groundwater recharge systems, rainwater filtration, flood mitigation, storm water management and sustainable water conservation solutions in ${city.city}.`,

    url: `https://inrainwaterharvesting.com/${page}/${slug}`,

    logo: 'https://inrainwaterharvesting.com/logo.png',

    address: {
      '@type': 'PostalAddress',
      addressLocality: city.city,
      addressRegion: 'India',
      postalCode: city.postal_code
    },

    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '011-35823511',
        email: 'sales@inrainwaterharvesting.com', // change if different
        contactType: 'customer enquiry'
      }
    ],

    sameAs: [
      'https://www.facebook.com/inrainconstructionofficial',
      'https://x.com/InrainC',
      'https://www.instagram.com/inrainconstruction_/',
      'https://in.pinterest.com/inrainc0212/'
    ],

    brand: {
      '@type': 'Brand',
      name: 'InRain® Construction Pvt. Ltd.'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.3',
      ratingCount: '1823'
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
