import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero5 = () => {
  return (
    <section className="py-4 bg-gradient-to-b">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 px-4 py-2 text-sm font-semibold mb-2">
            InRain® Products
          </span>

          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Products
          </h3>

          <p className="text-gray-600 text-base md:text-md   leading-7">
            InRain is a renowned provider of cutting-edge water conservation s
            that aim to address the global water scarcity crisis. With a
            commitment to environmental sustainability and economic efficiency,
            InRain offers a range of innovative solutions to help individuals,
            communities, and businesses optimize their water usage and
            contribute to a more sustainable future.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-md border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <Image
                src="/polymer-type-rainwater-harvesting-system.jpg"
                alt="Module Image"
                width={500}
                height={350}
                className="w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <Link
                href="/polymer-type-rainwater-harvesting-system"
                className="text-lg font-semibold text-gray-900 hover:text-sky-600 transition"
              >
                Polymer Type Rainwater Harvesting System
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-md border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <Image
                src="/storm-water-management-companies.jpg"
                alt="Module Image"
                width={500}
                height={350}
                className="w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <Link
                href="/storm-water-management-companies"
                className="text-lg font-semibold text-gray-900 hover:text-sky-600 transition"
              >
                Storm Water Management Company
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-md border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <Image
                src="/new-technology-of-rainwater-harvesting.jpg"
                alt="Module Image"
                width={500}
                height={350}
                className="w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <Link
                href="/new-technology-of-rainwater-harvesting"
                className="text-lg font-semibold text-gray-900 hover:text-sky-600 transition"
              >
                New Technology of Rainwater Harvesting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero5;
