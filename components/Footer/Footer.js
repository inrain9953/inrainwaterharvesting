import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import dynamic from "next/dynamic";
const Clients = dynamic(() => import("../Clients/Clients"), {
  ssr: false,
});
import { serviceData } from "../constant";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "BLogs", href: "/blogs" },
    { name: "Business Network", href: "/business-network" },
  ];

  const socialLinks = [
    {
      icon: <FacebookIcon />,
      href: "https://www.facebook.com/inrainconstructionofficial",
    },
    {
      icon: <YouTubeIcon />,
      href: "https://www.youtube.com/@inrainharvesting",
    },
    {
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/inrainconstruction/",
    },
    {
      icon: <XIcon />,
      href: "https://x.com/InrainC",
    },
    {
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/company/35590476/admin/dashboard/",
    },
  ];

  return (
    <div>
      <Clients />
      <footer className="bg-green-700 text-white">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Social Links */}
            <div>
              <h3 className="text-3xl font-bold mb-5">Social Links</h3>

              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((item, index) => (
                  <Link
                    target="_blank"
                    key={index}
                    href={item.href}
                    className="w-10 h-10 rounded-full bg-sky-200 text-black flex items-center justify-center text-lg hover:scale-110 hover:bg-white transition duration-300"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-3xl font-bold mb-5">Quick Links</h2>

              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-sm hover:text-sky-500 transition"
                    >
                      <ArrowForwardIosIcon fontSize="small" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold mb-5">Services</h2>

              <ul className="space-y-2">
                {serviceData.map((product) => (
                  <li key={product.title}>
                    <Link
                      href={product.link}
                      className="flex items-center justify-start gap-1 text-xs hover:text-sky-200 transition"
                    >
                      <ArrowForwardIosIcon  sx={{ fontSize: 10 }} />
                      <span>{product.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office */}
            <div>
              <h2 className="text-3xl font-bold mb-5">Our Office</h2>

              <div className="space-y-2">
                {/* Corporate Office */}
                <div>
                  <div className="flex items-start gap-1">
                    <LocationOnIcon />
                    <a
                      target="_blank"
                      href="https://maps.app.goo.gl/QSZoYkgd8GufagvC6"
                    >
                      <p className="font-medium text-base text-white hover:text-sky-200">
                        Plot No 06, KH431, 1st floor, Main Road
                        Chattarpur-Satbari, Satbari, New delhi 110074
                      </p>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <a
                    href="tel:+919953070003"
                    className="flex items-center gap-3 text-sm hover:text-sky-400 transition"
                  >
                    <LocalPhoneIcon />
                    +91-9953070003
                  </a>

                  <a
                    href="tel:+919910220794"
                    className="flex items-center gap-3 text-sm hover:text-sky-400 transition"
                  >
                    <LocalPhoneIcon />
                    +91-9910220794
                  </a>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <a
                    href="mailto:inrainconstruction@gmail.com"
                    className="flex items-center gap-1 text-sm hover:text-sky-200 transition break-all"
                  >
                    <EmailIcon />
                    inrainconstruction@gmail.com
                  </a>

                  <a
                    href="mailto:sales@inrainwaterharvesting.com"
                    className="flex items-center gap-1 text-sm hover:text-sky-200 transition break-all"
                  >
                    <EmailIcon />
                    sales@inrainwaterharvesting.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-green-900 border-t border-white/20">
          <div className="max-w-7xl mx-auto px-6 py-2 text-center">
            <span className="text-xs">
              © 2026 InRain Construction Pvt Ltd. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
