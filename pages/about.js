import Certification from "@/components/Certification/Certification";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import StaticMetatag from "@/components/Schema/StaticMetatag";
import Image from "next/image";
import React from "react";
import StaticSchema from "@/components/Schema/StaticSchema";

const About = () => {
  const data = {
    title: "About Us | InRain Construction Pvt. Ltd.",
    desc: "Looking for a reliable Rainwater Harvesting System in India? InRain Construction Private Limited provide efficient solutions for sustainable water management and get Rooftop Rainwater Harvesting System in India",
    keyword:
      "About Us, Rainwater Harvesting System in India, Modular Rainwater Harvesting System Service Provider, Rainwater Harvesting System in Delhi, Polymer Type Rainwater Harvesting System in Delhi, Storm water Management in Delhi",
    canonical: "https://www.inrainwaterharvesting.com/about",
    ogTitle: "About Us | InRain Construction Pvt. Ltd.",
    ogDescription:
      "Looking for a reliable Rainwater Harvesting System in India? InRain Construction Private Limited provide efficient solutions for sustainable water management and get Rooftop Rainwater Harvesting System in India",
    ogUrl: "https://www.inrainwaterharvesting.com/about",
    twittertitle: "About Us | InRain Construction Pvt. Ltd.",
    twitterdescription:
      "Looking for a reliable Rainwater Harvesting System in India? InRain Construction Private Limited provide efficient solutions for sustainable water management and get Rooftop Rainwater Harvesting System in India",
  };
  return (
    <>
      <StaticMetatag data={data} />
      <StaticSchema />
      <Navbar />
      <main className="bg-gradient-to-b from-sky-50 to-white">
        {/* HERO SECTION */}
        <section className="relative h-[200px] md:h-[300px] overflow-hidden">
          <Image
            src="/service4.jpg"
            alt="about"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <span className="bg-sky-500/90 px-5 py-2 rounded-full text-sm md:text-base font-semibold shadow-lg">
              Company Profile
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-3 drop-shadow-lg">
              About Us
            </h1>
          </div>
        </section>

        {/* ABOUT COMPANY */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 py-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* IMAGE */}
            <div className="relative">
              <div className="absolute inset-0 bg-sky-200 rounded-[40px] blur-3xl opacity-30"></div>

              <Image
                src="/rwh-pits-suppliers.jpg"
                alt="about"
                width={500}
                height={500}
                className="relative rounded-[32px] shadow-2xl object-cover w-full h-full"
              />
            </div>

            {/* CONTENT */}
            <div>
              <span className="text-sky-600 uppercase tracking-widest font-semibold text-xs">
                About Company
              </span>

              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-1 leading-tight">
                InRain® Construction Pvt. Ltd.
              </h2>

              <div className="space-y-5 mt-3 text-slate-600 leading-7 text-md">
                <p>
                  InRain Construction Private Limited is a leading company
                  specializing in advanced rainwater harvesting solutions. With
                  a strong track record of success, we have executed over 4000+
                  Rainwater Harvesting (RWH) units for esteemed clients such as
                  HUL, PepsiCo, Sobha Developers, CPWD, PWD, Smart Cities, and
                  Supreme Court Judges Bungalows, among others. Our commitment
                  to innovation, quality, and sustainability has made us a
                  trusted partner in the industry.
                </p>

                <p>
                  At InRain Construction, we offer comprehensive rainwater
                  harvesting solutions that help our clients optimize water
                  resources and promote environmental conservation. With our
                  in-house manufacturing capabilities, we design and produce
                  rainwater harvesting modular structures and filters, ensuring
                  consistent quality and timely delivery.
                </p>

                <p>
                  Our team comprises highly experienced professionals who have
                  accumulated over 30 years of expertise in sustainable
                  construction methods. We are dedicated to delivering
                  exceptional results and providing personalized services
                  tailored to meet each client's unique requirements. Our
                  holistic approach to rainwater harvesting encompasses design,
                  implementation, maintenance, and monitoring, ensuring the
                  long-term effectiveness of our solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="max-w-7xl mx-auto px-2 md:px-10 py-5">
          <div className="bg-white rounded-[40px] shadow-2xl border border-slate-100 p-3 md:p-12">
            <div className="text-center mb-10">
              <span className="text-sky-600 uppercase tracking-widest font-semibold text-sm">
                Why Choose Us
              </span>

              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-1">
                Why Choose InRain Construction Private Limited?
              </h2>
            </div>

            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Expertise: With our vast experience in rainwater harvesting, we possess the knowledge and skills to develop customized solutions that suit various applications and environments. Our team stays updated with the latest advancements in the field to deliver cutting-edge solutions.",

                "High-profile Clientele: Our successful collaborations with prestigious organizations such as HUL, PepsiCo, and Sobha Developers reflect our ability to meet the highest standards of quality and reliability. We take pride in our strong client relationships and strive to exceed expectations.",

                "In-house Manufacturing: By having our own manufacturing facilities for rainwater harvesting modular structures and filters, we maintain control over the production process, ensuring superior quality, cost-effectiveness, and timely delivery.",

                "Sustainability Focus: We understand the critical role of sustainable practices in mitigating water scarcity and preserving the environment. Our solutions not only help conserve water but also contribute to the overall ecological balance and reduce reliance on external water sources.",

                "Comprehensive Services: From initial project assessment to installation and ongoing maintenance, InRain Construction offers end-to-end services to ensure the optimal functioning of rainwater harvesting systems. Our dedicated team provides technical support and monitoring services for continued performance and efficiency.",

                "InRain Construction Private Limited is committed to revolutionizing the way we manage water resources through advanced rainwater harvesting techniques. With our industry expertise, quality manufacturing capabilities, and sustainability-driven approach, we aim to create a greener and more water-efficient future for our clients and communities.",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex gap-4 bg-sky-50 hover:bg-sky-100 transition rounded-3xl p-4 shadow-sm"
                >
                  <div className="min-w-[25px] h-[25px] rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </div>

                  <p className="text-slate-700 leading-7 text-sm">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FEATURES */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 py-15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                image: "/renewable-energy.png",
                title: "Clean Energy",
              },
              {
                image: "/search.png",
                title: "Action Research",
              },
              {
                image: "/renewable-energy.png",
                title: "Project Assistance",
              },
              {
                image: "/marketing-strategy.png",
                title: "Long-term Planning",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] p-6 shadow-xl border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-sky-50 shadow-inner">
                  <Image
                    src={item.image}
                    alt="about"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>

                <span className="mt-5 text-lg font-semibold text-slate-800">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        <Certification />
      </main>
      <Footer />
    </>
  );
};

export default About;
