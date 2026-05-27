import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";

const Hero6 = () => {
  return (
    <section className="py-10 bg-gradient-to-b overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        {/* TOP STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Card 1 */}
          <div className="bg-white rounded-[28px] border border-slate-200 shadow-md hover:shadow-xl transition duration-300 p-7 flex flex-col items-center text-center">
            <p className="text-base md:text-lg font-semibold bg-green-100 text-green-700 rounded-2xl px-5 py-3">
              Making The Planet Green
            </p>

            <div className="text-4xl md:text-5xl mt-6 font-bold text-sky-700">
              <CountUp
                duration={2}
                end={90}
                enableScrollSpy
                scrollSpyDelay={50}
              />
              %
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[28px] border border-slate-200 shadow-md hover:shadow-xl transition duration-300 p-7 flex flex-col items-center text-center">
            <p className="text-base md:text-lg font-semibold bg-green-100 text-green-700 rounded-2xl px-5 py-3">
              Recycling Rainwater for Future
            </p>

            <div className="text-4xl md:text-5xl mt-6 font-bold text-sky-700">
              <CountUp
                duration={2}
                end={100}
                enableScrollSpy
                scrollSpyDelay={50}
              />
              %
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[28px] border border-slate-200 shadow-md hover:shadow-xl transition duration-300 p-7 flex flex-col items-center text-center">
            <p className="text-base md:text-lg font-semibold bg-green-100 text-green-700 rounded-2xl px-5 py-3">
              Decreases The Demand For Water
            </p>

            <div className="text-4xl md:text-5xl mt-6 font-bold text-sky-700">
              <CountUp
                duration={2}
                end={41}
                enableScrollSpy
                scrollSpyDelay={50}
              />
              %
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-[28px] border border-slate-200 shadow-md hover:shadow-xl transition duration-300 p-7 flex flex-col items-center text-center">
            <p className="text-base md:text-lg font-semibold bg-green-100 text-green-700 rounded-2xl px-5 py-3">
              Reduces Stormwater Flow
            </p>

            <div className="text-4xl md:text-5xl mt-6 font-bold text-sky-700">
              <CountUp
                duration={2}
                end={70}
                enableScrollSpy
                scrollSpyDelay={50}
              />
              %
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 px-4 py-2 text-sm font-semibold mb-2">
              Sustainable Water Solutions
            </span>

            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
              Water Harvesting System
              <span className="text-sky-600"> in India</span>
            </h3>

            <div className="space-y-4 text-gray-600 text-base md:text-md leading-7 text-justify">
              <p>
                At InRain Construction, we have successfully executed over 4000+
                rainwater harvesting units for prestigious clients such as
                Hindustan Unilever Limited (HUL), PepsiCo, Sobha Developers,
                Central Public Works Department (CPWD), Public Works Department
                (PWD), Smart Cities, and the residences of Supreme Court Judges,
                among others. These projects have enabled us to gain
                unparalleled expertise in rainwater harvesting, making us a
                frontrunner in the industry. A Water Harvesting System in India
                helps collect and store rainwater, conserving resources,
                reducing dependency on groundwater, and supporting sustainable
                water management.
              </p>

              <p>
                Experienced Team: At InRain Construction, we take pride in our
                highly experienced team of professionals. With an average
                industry experience of over 30 years, our team possesses a deep
                understanding of sustainable construction methods and rainwater
                harvesting techniques. From conceptualization to execution, our
                experts provide comprehensive solutions tailored to each
                client's unique needs. Their expertise, coupled with our
                commitment to innovation and excellence, ensures that our
                clients receive the best possible rainwater harvesting systems.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-5">
              <Link href="/#">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "14px",
                    padding: "12px 28px",
                    fontWeight: 600,
                    fontSize: "16px",
                    textTransform: "none",
                    boxShadow: "0 10px 25px rgba(2,132,199,0.25)",
                  }}
                >
                  EXPLORE
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-[28px] shadow-md border border-slate-200 p-6 hover:shadow-xl transition">
              <h4 className="text-xl font-bold text-sky-700 mb-3">4000+</h4>

              <p className="text-gray-600 leading-7">
                Rainwater harvesting units successfully executed across India.
              </p>
            </div>

            <div className="bg-white rounded-[28px] shadow-md border border-slate-200 p-6 hover:shadow-xl transition">
              <h4 className="text-xl font-bold text-sky-700 mb-3">30+ Years</h4>

              <p className="text-gray-600 leading-7">
                Average industry expertise of our engineering professionals.
              </p>
            </div>

            <div className="bg-white rounded-[28px] shadow-md border border-slate-200 p-6 hover:shadow-xl transition sm:col-span-2">
              <h4 className="text-xl font-bold text-sky-700 mb-3">
                Trusted by Leading Brands
              </h4>

              <p className="text-gray-600 leading-7">
                HUL, PepsiCo, Sobha Developers, CPWD, PWD, Smart Cities, and
                Supreme Court Judges Bungalows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero6;
