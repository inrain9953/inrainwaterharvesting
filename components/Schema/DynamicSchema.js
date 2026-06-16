import Script from 'next/script'

const DynamicSchema = ({ city, slug, heading, subheading, page }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',

    name: 'InRain® Construction Pvt. Ltd.',
    alternateName: 'InRain® Construction Pvt. Ltd.',

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
        telephone: '9910220794',
        email: 'sales@inrainwaterharvesting.com',
        contactType: 'customer enquiry'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      ratingCount: '1943'
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