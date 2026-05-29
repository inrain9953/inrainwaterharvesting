import Certification from "@/components/Certification/Certification";
import Footer from "@/components/Footer/Footer";
import Hero1 from "@/components/Hero/Hero1";
import Hero2 from "@/components/Hero/Hero2";
import Hero3 from "@/components/Hero/Hero3";
import Hero4 from "@/components/Hero/Hero4";
import Hero5 from "@/components/Hero/Hero5";
import Hero6 from "@/components/Hero/Hero6";
import Navbar from "@/components/Navbar/Navbar";
import StaticMetatag from "@/components/Schema/StaticMetatag";
import LocalSchema from "@/components/Schema/StaticSchema";

export default function Home() {
  const data = {
    title:
      "Rainwater Harvesting System in Delhi | Modular Rainwater Harvesting",
    desc: "Find a Rainwater Harvesting System in Delhi. We are the best Modular Rainwater Harvesting System Service Provider in Delhi. Get & Install a Rainwater Harvesting System at the best price. ",
    keyword:
      "Rooftop Rainwater Harvesting System in Delhi, Modular Rainwater Harvesting in Delhi, Rainwater Harvesting Tank in Delhi, Polymer Type Rainwater Harvesting System in Delhi, Storm water Management in Delhi",
    canonical: "https://www.inrainwaterharvesting.com/",
    ogTitle:
      "Rainwater Harvesting System in Delhi | Modular Rainwater Harvesting",
    ogDescription:
      "Find a Rainwater Harvesting System in Delhi. We are the best Modular Rainwater Harvesting System Service Provider in Delhi. Get & Install a Rainwater Harvesting System at the best price.",
    ogUrl: "https://www.inrainwaterharvesting.com/",
    twittertitle:
      "Rainwater Harvesting System in Delhi | Modular Rainwater Harvesting",
    twitterdescription:
      "Find a Rainwater Harvesting System in Delhi. We are the best Modular Rainwater Harvesting System Service Provider in Delhi. Get & Install a Rainwater Harvesting System at the best price.",
  };
  return (
    <>
      <StaticMetatag data={data} />
      <LocalSchema />
      <Navbar />
      <main>
        <Hero1 />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />
        <Hero6 />
        <Certification />
      </main>
      <Footer />
    </>
  );
}
