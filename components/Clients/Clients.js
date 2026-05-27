import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { clientSlider1, clientSlider2 } from "../constant";
import { useState, useEffect } from "react";

const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

const Clients = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent SSR mismatch
  if (!mounted) return null;
  return (
    <section>
      <div className="mt-10">
        <p className="text-center font-bold text-2xl md:text-4xl">
          Our Happy Clients
        </p>
        <div className="flex flex-col gap-3 mt-5 mb-8">
          <div className="w-full flex">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
              className="md:h-[230px] h-[200px]"
            >
              {clientSlider1.map((item, i) => (
                <div
                  key={i}
                  className="m-3 shadow-xl rounded-2xl md:h-[160px] h-[110px]"
                >
                  <Image
                    src={item.img}
                    width={200}
                    height={200}
                    alt={item.alt}
                    className="rounded-2xl border h-[100%] w-[100%]"
                  />
                  <p className="flex items-center justify-center text-center text-[15px] font-semibold mt-3">
                    {item.description}
                  </p>
                </div>
              ))}
            </Marquee>
          </div>

          <div className="w-full flex">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="right"
              className="md:h-[230px] h-[200px]"
            >
              {clientSlider2.map((item, i) => (
                <div
                  key={i}
                  className="m-3 shadow-xl rounded-2xl md:h-[160px] h-[110px]"
                >
                  <Image
                    src={item.img}
                    width={200}
                    height={200}
                    alt={item.alt}
                    className="rounded-2xl border h-[100%] w-[100%]"
                  />
                  <p className="flex items-center justify-center text-center text-[15px] mt-3 font-semibold">
                    {item.description}
                  </p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
