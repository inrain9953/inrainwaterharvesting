import Script from "next/script";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function ThankYou() {
  return (
    <>
      <Script id="google-conversion" strategy="afterInteractive">
        {`
          if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
              send_to: 'AW-16650006765/gyk2CK3ox8gZEO3hq4M-',
              value: 100000.0,
              currency: 'INR'
            });
          }
        `}
      </Script>

      <Navbar />

      <div className="text-center min-h-68 flex-col flex items-center justify-center gap-4">
        <h1 className="text-5xl font-bold">Thank You</h1>
        <p className="text-2xl font-semibold">Your message has been sent successfully.</p>
      </div>

      <Footer />
    </>
  );
}