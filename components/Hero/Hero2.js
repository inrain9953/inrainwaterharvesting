import React from "react";
import Image from "next/image";

const Hero2 = () => {
  return (
    <section className="pb-10">
      <div className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <div className="">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                Rainwater Harvesting System –
                <span className="text-sky-600"> Our Advanced Technology</span>
              </h2>

              <div className="space-y-3 text-gray-600 leading-7 text-base md:text-md">
                <p>
                  At <span className="font-semibold">InRain®</span>, We are
                  Engaged In Making
                  <span className="font-semibold">
                    {" "}
                    Rainwater Harvesting (RWH) Pits in Delhi
                  </span>{" "}
                  Based on the technology adopted from Germany. It is indeed
                  entirely different from conventional rain water system.
                  InRain® is Fully equipped with In house Make and Manufacturing
                  process, ensuring its best in class – quality. We share our
                  contribution to Nation being proud partner of “Make in India
                  Movement”
                </p>
              </div>

              {/* Trust Points */}
              <div className="grid grid-cols-2 gap-4 mt-5">
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                  <h3 className="text-2xl font-bold text-sky-600">
                    German Tech
                  </h3>
                  <p className="text-gray-500 text-sm">Advanced Technology</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                  <h3 className="text-2xl font-bold text-green-600">
                    In-House
                  </h3>
                  <p className="text-gray-500 text-sm">Manufacturing Process</p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE LAYOUT */}
            <div className="space-y-2 mt-5">
              {/* TOP - 2 IMAGES */}
              <div className="md:grid md:grid-cols-2 flex flex-col gap-2">
                <div className="overflow-hidden rounded-[15px] shadow-lg shadow-sky-200 group">
                  <Image
                    src="/Services/main1.jpg"
                    alt="Rainwater Harvesting"
                    width={500}
                    height={350}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-102"
                  />
                </div>

                <div className="overflow-hidden rounded-[15px] shadow-lg shadow-sky-200 group">
                  <Image
                    src="/Services/main2.jpeg"
                    alt="Rainwater Technology"
                    width={500}
                    height={350}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-102"
                  />
                </div>
              </div>

              {/* BOTTOM - 3 IMAGES */}
              <div className="md:grid md:grid-cols-3 flex flex-col gap-2">
                <div className="overflow-hidden rounded-[15px] shadow-lg shadow-sky-200 group">
                  <Image
                    src="/Services/main3.jpg"
                    alt="Harvesting Site"
                    width={400}
                    height={500}
                    className="w-full object-cover transition duration-500 group-hover:scale-102"
                  />
                </div>

                <div className="overflow-hidden rounded-[15px] shadow-lg shadow-sky-200 group">
                  <Image
                    src="/Services/main4.jpg"
                    alt="Rainwater System"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-102"
                  />
                </div>

                <div className="overflow-hidden rounded-[15px] shadow-lg shadow-sky-200 group">
                  <Image
                    src="/Services/main5.jpg"
                    alt="RWH Pit"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-102"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
