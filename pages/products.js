import Image from "next/image";
import React from "react";
import { serviceData } from "@/components/constant";
import { Link } from "@mui/material";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import StaticMetatag from "@/components/Schema/StaticMetatag";
import StaticSchema from "@/components/Schema/StaticSchema";

const Products = () => {
  const data = {
    title: "Our Products | InRain Construction Pvt. Ltd.",
    desc: "Looking for a reliable Rainwater Harvesting Products in India? InRain Construction Private Limited provide efficient solutions for sustainable water management and get Rooftop Rainwater Harvesting System in India.",
    keyword:
      "Our Products, Rainwater Harvesting Filtration in India, Modular Rainwater Harvesting System Service Provider, Rainwater Harvesting System in Delhi, Polymer Type Rainwater Harvesting System in Delhi, Storm water Management in Delhi",
    canonical: "https://www.inrainwaterharvesting.com/products",
    ogTitle: "Our Products | InRain Construction Pvt. Ltd.",
    ogDescription:
      "Looking for a reliable Rainwater Harvesting Products in India? InRain Construction Private Limited provide efficient solutions for sustainable water management and get Rooftop Rainwater Harvesting System in India",
    ogUrl: "https://www.inrainwaterharvesting.com/about",
    twittertitle: "Our Products | InRain Construction Pvt. Ltd.",
    twitterdescription:
      "Looking for a reliable Rainwater Harvesting Products in India? InRain Construction Private Limited provide efficient solutions for sustainable water management and get Rooftop Rainwater Harvesting System in India",
  };
  return (
    <>
      <StaticMetatag data={data} />
      <StaticSchema />
      <Navbar />
      <main className="bg-gradient-to-b from-sky-50 via-white to-slate-50">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden">
          <Image
            src="/service6.jpg"
            alt="Product Image"
            width={1300}
            height={300}
            priority
            className="w-full h-[200px] md:h-[300px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <span className="bg-sky-500 text-white px-5 py-2 rounded-full text-xs md:text-md font-semibold shadow-lg">
              InRain® Construction Pvt. Ltd.
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 drop-shadow-xl">
              Our Products
            </h1>
          </div>
        </section>

        {/* INTRO CONTENT */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 py-10">
          <div className="max-w-5xl mx-auto text-center">
            <span className="uppercase tracking-[4px] text-sky-600 font-semibold text-sm">
              Water Conservation Solutions
            </span>

            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-2">
              Innovative Products for Sustainable Water Management
            </h2>

            <div className="mt-4 space-y-3 text-slate-600 text-[16px] md:text-md leading-7">
              <p>
                InRain is a renowned provider of cutting-edge water conservation
                that aim to address the global water scarcity crisis. With a
                commitment to environmental sustainability and economic
                efficiency, InRain offers a range of innovative solutions to
                help individuals, communities, and businesses optimize their
                water usage and contribute to a more sustainable future.
              </p>

              <p>
                InRain offers a selection of water-efficient fixtures and
                appliances designed to minimize water consumption without
                compromising functionality. From low-flow faucets and
                showerheads to high-efficiency washing machines and dishwashers,
                these s help save water and reduce utility costs.
              </p>
            </div>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-7">
            {serviceData.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="group cursor-pointer"
              >
                <div
                  className="
              relative overflow-hidden
              bg-white rounded-[32px]
              border border-slate-100
              shadow-lg hover:shadow-2xl
              transition-all duration-500
              hover:-translate-y-2
              p-7 h-full
            "
                >
                  {/* Background Hover Glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition duration-500" />

                  {/* Icon */}
                  <div className="z-10 rounded-3xl bg-sky-100 flex items-center justify-center shadow-inner group-hover:scale-110 transition duration-300">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full p-5 rounded-3xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-6">
                    <h3
                      className="
                  text-xl font-bold text-slate-900
                  group-hover:text-sky-600
                  transition duration-300
                  leading-8
                "
                    >
                      {item.title}
                    </h3>

                    {/* Read More */}
                    <div className="flex items-center gap-2 mt-5 text-sky-600 font-semibold">
                      <span>Explore Services</span>

                      <span className="group-hover:translate-x-2 transition duration-300">
                        →
                      </span>
                    </div>
                  </div>

                  {/* Decorative Bottom Border */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-sky-500 group-hover:w-full transition-all duration-500" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
