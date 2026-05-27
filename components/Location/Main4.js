import React from "react";
import Image from "next/image";

const Main4 = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        {/* TOP SECTION */}
        <div className="md:flex md:justify-center items-center gap-14">
          {/* LEFT IMAGE SECTION */}
          <div className="relative">
            <div className="flex md:flex-col items-center gap-5">
              <div className="overflow-hidden w-62.5 rounded-[28px] shadow-xl group">
                <Image
                  src="/Module/pic1.jpg"
                  alt="Module Image"
                  width={250}
                  height={250}
                  className="w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="overflow-hidden w-62.5 rounded-[28px] shadow-xl group">
                <Image
                  src="/Module/pic2.jpg"
                  alt="Module Image"
                  width={250}
                  height={250}
                  className="w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Decorative background blur */}
            <div className="hidden lg:block absolute -z-10 top-20 -left-12 w-48 h-48 bg-sky-100 rounded-full blur-3xl opacity-40" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="mt-10 md:mt-0">
            <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 px-4 py-2 text-sm font-semibold mb-2">
              InRain®
            </span>

            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-2">
              Water Conservation & Management Company.
            </h2>

            <span className="block text-lg md:text-2xl italic text-green-700 font-medium mb-4">
              “Water is life, and conservation is the future.”
            </span>

            <div className="space-y-5 text-gray-600 text-base md:text-md leading-7 text-justify">
              <p>
                70% of our earth is water, however, the potable water which is
                required for most of the human needs, is very less. The growing
                urbanization and global development have also led to a sharp
                decline in groundwater. Climate change with global warming is
                not making things easier for humans. Water conservation and
                management techniques are vital for sustainable development. It
                helps in managing the increasing demand for water with growing
                industrialization and increasing population.
              </p>

              <p>
                At InRain, we provide water conservation & management techniques
                leveraging modern technology. Conservation methods and solutions
                offered by InRain are not only environment friendly but
                economical as well.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURES SECTION */}
        <div className="mt-10">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-[28px] shadow-md border border-slate-200 p-6 hover:shadow-xl transition duration-300">
              <h3 className="font-bold text-xl text-sky-700 mb-3">
                The Technology We Offer
              </h3>

              <p className="text-gray-600 leading-7 text-justify">
                At InRain, we are using Modular Rainwater Harvesting System in
                Delhi. This advanced German technology helps us to reduce costs
                and improves the longevity of the rainwater harvesting system.
                It helps in overcoming the major challenge of space-saving,
                which is a prime concern in urban planning and development.
              </p>
            </div>

            <div className="bg-white rounded-[28px] shadow-md border border-slate-200 p-6 hover:shadow-xl transition duration-300">
              <h3 className="font-bold text-xl text-sky-700 mb-3">
                The Quality We Offer
              </h3>

              <p className="text-gray-600 leading-7 text-justify">
                We provide high-quality products as our products go through a
                stringent quality check. Our in-house manufacturing ensures the
                quality of products and our quality assurance system ensures
                consistent quality.
              </p>
            </div>

            <div className="bg-white rounded-[28px] shadow-md border border-slate-200 p-6 hover:shadow-xl transition duration-300">
              <h3 className="font-bold text-xl text-sky-700 mb-3">
                Water Conservation Vision
              </h3>

              <p className="text-gray-600 leading-7 text-justify">
                InRain firmly believes that the future of urban planning and
                development is through the practice of water conservation and
                management. We are fortunate Modular Rainwater Harvesting System
                Service Provider to be blessed with the ability to contribute to
                save the environment movement, while we help others to
                incorporate water conservation methods and practices in life.
                And we are also a proud partner in the make in India movement as
                we manufacture all our parts in India.
              </p>
            </div>

            <div className="bg-white rounded-[28px] shadow-md border border-slate-200 p-6 hover:shadow-xl transition duration-300">
              <h3 className="font-bold text-xl text-sky-700 mb-3">
                Sustainable Development
              </h3>

              <p className="text-gray-600 leading-7 text-justify">
                At InRain, we help organizations, housing societies and
                individuals to integrate water conservation and management into
                their development plans. We aim to provide sustainability in
                water conservation practices.
              </p>
            </div>

            <div className="bg-white rounded-[28px] shadow-md border border-slate-200 p-6 hover:shadow-xl transition duration-300 md:col-span-2">
              <h3 className="font-bold text-xl text-sky-700 mb-3">
                Commitment to Sustainability
              </h3>

              <p className="text-gray-600 leading-7 text-justify">
                As an advanced rainwater harvesting company, we are deeply
                committed to sustainable practices and environmental
                stewardship. We recognize the importance of conserving water
                resources and reducing reliance on conventional sources. By
                implementing our rainwater harvesting systems, we help our
                clients optimize water management, reduce their carbon
                footprint, and contribute to a more sustainable future.
              </p>
            </div>

            <div className="bg-white rounded-[28px] shadow-md border border-slate-200 p-6 hover:shadow-xl transition duration-300 md:col-span-2">
              <h3 className="font-bold text-xl text-sky-700 mb-3">
                Client Satisfaction
              </h3>

              <p className="text-gray-600 leading-7 text-justify">
                Our success is measured by the satisfaction of our clients, and
                we strive to exceed their expectations in every project we
                undertake. We prioritize open communication, transparent project
                management, and timely execution to ensure a seamless experience
                for our clients. Our commitment to quality, reliability, and
                customer-centric approach has earned us a strong reputation in
                the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main4;
