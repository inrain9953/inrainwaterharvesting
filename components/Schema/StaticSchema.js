import Script from "next/script";

const LocalSchema = () => {
  return (
    // Local Business Schema
    <Script
      id="localbusiness-jsonld"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "InRain® Construction Pvt. Ltd.",
        image: "https://www.inrainwaterharvesting.com/logo.png",
        description:
          "Best Modular Rainwater Harvesting System Service Provider in India",
        url: "https://www.inrainwaterharvesting.com/",
        telephone: "011-35823511",

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Plot No 06, khasra No-431, 1st floor, above Union Bank of India, Satbari - Chattarpur Main Road",
          addressLocality: "New Delhi",
          postalCode: "110074",
          addressCountry: "IN",
        },

        sameAs: [
          "https://www.facebook.com/inrainconstructionofficial",
          "https://x.com/InrainC",
          "https://www.instagram.com/inrainconstruction_/",
          "https://in.pinterest.com/inrainc0212/",
        ],

        brand: {
          "@type": "Brand",
          name: "InRain Construction Pvt Ltd",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.5",
          ratingCount: "2183",
        },
      })}
    </Script>
  );
};

export default LocalSchema;
