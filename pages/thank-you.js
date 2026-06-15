import Script from 'next/script'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default function ThankYou () {
  return (
    <>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=AW-16650006765'
        strategy='beforeInteractive'
      />

      <Script id='google-tag' strategy='beforeInteractive'>
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', 'AW-16650006765');

      gtag('event', 'conversion', {
        send_to: 'AW-16650006765/xnCkCJyMy70cEO3hq4M-',
        value: 100000.0,
        currency: 'INR'
      });
    `}
      </Script>

      <Navbar />

      <div className='text-center min-h-68 flex-col flex items-center justify-center gap-4'>
        <h1 className='text-5xl font-bold'>Thank You</h1>
        <p className='text-2xl font-semibold'>
          Your message has been sent successfully.
        </p>
        <p className='text-lg font-semibold'>
          Our Team will get back to you soon !
        </p>
      </div>

      <Footer />
    </>
  )
}
