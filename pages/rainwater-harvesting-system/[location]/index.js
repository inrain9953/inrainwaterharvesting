import Head from "next/head";
import { CityData } from "@/components/constant";
import Main1 from "@/components/Location/Main1";
import Main2 from "@/components/Location/Main2";
import Main3 from "@/components/Location/Main3";
import Main4 from "@/components/Location/Main4";
import Main5 from "@/components/Location/Main5";
import Main6 from "@/components/Location/Main6";
import Certification from "@/components/Certification/Certification";
import DynamicSchema from "@/components/Schema/DynamicSchema";
import DynamicMetatag from "@/components/Schema/DynamicMetatag";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function RainwaterHarvestingPage({ city, slug }) {
  const heading = "Rainwater Harvesting System";
  const subheading = "Modular Rainwater Harvesting Solution";
  const page = "rainwater-harvesting-system";
  const data = {
    title:
      `${heading} in ${city.city}` +
      " " +
      "|" +
      " " +
      "InRain Construction Pvt. Ltd.",
    desc: `Get the best ${heading} in ${city.city}. We have high-quality ${heading} for your requirement. Our ${heading} Service Provider in ${city.city} will help you & easy to install. Contact now`,
    keyword: `${heading} in ${city.city}, ${subheading} in ${city.city}, Rainwater Harvesting Tank in ${city.city}, Polymer Type Rainwater Harvesting System in ${city.city}, Storm water Management in ${city.city}`,
    canonical: `https://www.inrainwaterharvesting.com/${page}/${slug}`,
    ogTitle:
      `${heading} in ${city.city}` +
      " " +
      "|" +
      " " +
      "InRain Construction Pvt. Ltd.",
    ogDescription: `Get the best ${heading} in ${city.city}. We have high-quilt ${heading} for your need & requirement. Our ${heading} Service Provider in ${city.city} will help you & easy to install. Contact now`,
    ogUrl: `https://www.inrainwaterharvesting.com/${page}/${slug}`,
    twittertitle:
      `${heading} in ${city.city}` +
      " " +
      "|" +
      " " +
      "InRain Construction Pvt. Ltd.",
    twitterdescription: `Get the best ${heading} in ${city.city}. We have high-quilt ${heading} for your need & requirement. Our ${heading} Service Provider in ${city.city} will help you & easy to install. Contact now`,
  };
  return (
    <>
      <DynamicMetatag data={data} />
      <DynamicSchema
        city={city}
        slug={slug}
        heading={heading}
        subheading={subheading}
        page={page}
      />
      <Navbar />
      <main className="">
        {/* Hero Section */}
        <Main1
          img={"/banner2.jpg"}
          heading={heading}
          subheading={subheading}
          location={city.city}
        />
        <Main2 location={city.city} />
        <Main3 location={city.city} />
        <Main4 />
        <Main5 />
        <Main6 location={city.city} />
        <Certification />
      </main>
      <Footer />
    </>
  );
}

/* ---------------------------- */
/* Static Paths */
/* ---------------------------- */

export async function getStaticPaths() {
  const paths = CityData.map((city) => ({
    params: {
      location: city.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

/* ---------------------------- */
/* Static Props */
/* ---------------------------- */

export async function getStaticProps({ params }) {
  const slug = params.location;

  // FIXED: find city by slug
  const city = CityData.find((item) => item.slug === slug);

  // 404 page if city not found
  if (!city) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      city,
      slug,
    },

    // Rebuild every 24 hrs
    revalidate: 86400,
  };
}
