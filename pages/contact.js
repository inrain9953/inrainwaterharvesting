import ContactForm from "@/components/Contact/Form";
import Image from "next/image";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import Certification from "@/components/Certification/Certification";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import StaticMetatag from "@/components/Schema/StaticMetatag";
import StaticSchema from "@/components/Schema/StaticSchema";

const contact = () => {
  const data = {
    title: "Contact Us | InRain Construction Pvt. Ltd.",
    desc: "Contact us for a reliable Rainwater Harvesting System in India. InRain Construction Private Limited provide efficient solutions for sustainable water management. Contact Us.",
    keyword:
      "Contact Us, Contact us for Rainwater Harvesting System in India, Modular Rainwater Harvesting System Service Provider, Rainwater Harvesting System in Delhi, Polymer Type Rainwater Harvesting System in Delhi, Storm water Management in Delhi",
    canonical: "https://www.inrainwaterharvesting.com/contact",
    ogTitle: "Contact Us | InRain Construction Pvt. Ltd.",
    ogDescription:
      "Contact us for a reliable Rainwater Harvesting System in India? InRain Construction Private Limited provide efficient solutions for sustainable water management. Contact Us.",
    ogUrl: "https://www.inrainwaterharvesting.com/contact",
    twittertitle: "Contact Us | InRain Construction Pvt. Ltd.",
    twitterdescription:
      "Contact Us for a reliable Rainwater Harvesting System in India? InRain Construction Private Limited provide efficient solutions for sustainable water management. Contact Us.",
  };
  return (
    <>
      <StaticMetatag data={data} />
      <StaticSchema />
      <Navbar />
      <main className="bg-gradient-to-b from-sky-50 to-white">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden">
          <Image
            src="/service2.jpg"
            alt="contact"
            width={1920}
            height={500}
            className="object-cover w-full h-[140px] md:h-[300px]"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <span className="bg-sky-500 text-white px-5 py-2 rounded-full text-xs md:text-base font-semibold shadow-lg">
              InRain® Construction Pvt. Ltd.
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-white mt-1 drop-shadow-xl">
              Contact Us
            </h1>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 py-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* LEFT SIDE */}
            <div className="space-y-8">
              {/* Heading */}
              <div>
                <span className="uppercase tracking-[3px] text-sky-600 font-semibold text-sm">
                  Get In Touch
                </span>

                <h2 className="text-xl md:text-3xl font-bold text-slate-900 mt-1">
                  Let’s Talk About Sustainable Water Solutions
                </h2>

                <p className="text-slate-600 mt-2 leading-7 text-md">
                  If you are seeking advanced rainwater harvesting solutions,
                  look no further than InRain Construction Private Limited. Our
                  experienced team, in-house manufacturing capabilities, and
                  proven track record make us the ideal partner for your
                  rainwater harvesting needs. Contact us today to discuss your
                  requirements and embark on a sustainable water management
                  journey.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* PHONE */}
                <div className="flex items-start gap-5 bg-white rounded-[28px] p-6 shadow-lg border border-slate-100 hover:shadow-xl transition duration-300">
                  <div className="min-w-[65px] h-[65px] rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center shadow-inner">
                    <PhoneIcon fontSize="large" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Phone No.
                    </h2>

                    <div className="flex flex-col mt-2 gap-1">
                      <a
                        href="tel:+919910220794"
                        className="text-slate-600 hover:text-sky-600 transition"
                      >
                        +91-9910220794
                      </a>

                      <a
                        href="tel:011-35823511"
                        className="text-slate-600 hover:text-sky-600 transition"
                      >
                        011-35823511
                      </a>
                    </div>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-5 bg-white rounded-[28px] p-6 shadow-lg border border-slate-100 hover:shadow-xl transition duration-300">
                  <div className="min-w-[65px] h-[65px] rounded-2xl bg-green-100 text-green-600 flex items-center justify-center shadow-inner">
                    <LocationOnIcon fontSize="large" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Address
                    </h2>

                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.google.com/maps/place/InRain+Construction+Private+Limited+-+Rainwater+Harvesting+System+%26+Modular+Rainwater+Harvesting+System+in+Delhi/@28.4825431,77.1882093,21z/data=!4m6!3m5!1s0x390d1fba2e998a7f:0x85a5a7f6bfc4915d!8m2!3d28.4825683!4d77.188446!16s%2Fg%2F11n039z1_z?entry=tts&g_ep=EgoyMDI0MDcwOS4wKgBIAVAD"
                      className="text-slate-600 hover:text-sky-600 transition leading-7 mt-2 block"
                    >
                      Plot No 06, KH431, 1st floor, Main Road
                      Chattarpur-Satbari, Satbari, New Delhi 110074
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-5 bg-white rounded-[28px] p-6 shadow-lg border border-slate-100 hover:shadow-xl transition duration-300">
                  <div className="min-w-[65px] h-[65px] rounded-2xl bg-red-100 text-red-500 flex items-center justify-center shadow-inner">
                    <EmailIcon fontSize="large" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Email</h2>

                    <div className="flex flex-col mt-2 gap-1">
                      <a
                        href="mailto:inrainconstruction@gmail.com"
                        className="text-slate-600 hover:text-sky-600 transition break-all"
                      >
                        inrainconstruction@gmail.com
                      </a>

                      <a
                        href="mailto:sales@inrainwaterharvesting.com"
                        className="text-slate-600 hover:text-sky-600 transition break-all"
                      >
                        sales@inrainwaterharvesting.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="sticky top-36">
              <div className="p-3 md:p-5">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <Certification />
      </main>
      <Footer />
    </>
  );
};

export default contact;
