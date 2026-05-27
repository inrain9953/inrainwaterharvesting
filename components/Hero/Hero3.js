import { Button } from "@mui/material";
import React from "react";
import Image from "next/image";

const Hero3 = () => {
  return (
    <section>
      <div className="py-5 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div>
              {/* Badge */}
              <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 px-4 py-2 text-sm font-semibold mb-5">
                InRain®
              </span>

              {/* Heading */}
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                Rooftop Rainwater
                <span className="text-sky-600"> Harvesting System</span>
              </h2>

              {/* Content */}
              <div className="space-y-3 text-gray-600 text-base md:text-md leading-7 text-justify">
                <p>
                  A Rooftop Rainwater Harvesting System in Delhi intended for
                  filtration, transitory maintenance and ensuing release. It is
                  utilized in waste channel application. It is developed
                  utilizing our restrictive plastic infusion shaped boards.We
                  provide all range of modules as per the requirements.
                </p>

                <p>
                  We take pride in our position as a leading Rooftop Rainwater
                  Harvesting System Service Provider in the industry, offering
                  superior solutions customized to meet individual needs. If you
                  are searching for the optimal rainwater harvesting system,
                  feel free to contact us to explore customized offers that
                  match your requirements.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-5">
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
              </div>
            </div>

            {/* RIGHT IMAGE GRID */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-5">
                <div className="overflow-hidden rounded-[28px] shadow-lg group">
                  <Image
                    src="/Filter/rain1.jpg"
                    alt="Rainwater Harvesting"
                    width={500}
                    height={500}
                    className="w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="overflow-hidden rounded-[28px] shadow-lg group mt-8">
                  <Image
                    src="/Filter/rain2.jpg"
                    alt="Rainwater Technology"
                    width={500}
                    height={500}
                    className="w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="overflow-hidden rounded-[28px] shadow-lg group -mt-4">
                  <Image
                    src="/Filter/rain3.png"
                    alt="Rainwater Harvesting"
                    width={500}
                    height={500}
                    className="w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="overflow-hidden rounded-[28px] shadow-lg group">
                  <Image
                    src="/Filter/rain4.png"
                    alt="Rainwater Technology"
                    width={500}
                    height={500}
                    className="w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Background Accent */}
              <div className="hidden lg:block absolute -z-10 -top-8 -right-8 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
