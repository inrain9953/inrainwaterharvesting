import Script from 'next/script'

const LocalSchema = () => {
  return (
    // Local Business Schema
    <Script
      id='localbusiness-jsonld'
      type='application/ld+json'
      strategy='beforeInteractive'
    >
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'GeoTech Ecosystem',
        description:
          'GeoTech Ecosystem - A Unit of InRain Construction Pvt. Ltd., provides rainwater harvesting, groundwater recharge, stormwater management and water conservation solutions in India.',
        url: 'https://www.inrainwaterharvesting.com/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.inrainwaterharvesting.com/logo.svg'
        },
        image: 'https://www.inrainwaterharvesting.com/logo.png',
        telephone: '011-35823511',

        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Plot No 06, khasra No-431, Chattarpur',
          addressLocality: 'New Delhi',
          postalCode: '110074',
          addressCountry: 'IN'
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
      })}
    </Script>
  )
}

export default LocalSchema
