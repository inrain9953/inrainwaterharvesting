import '@/styles/globals.css'
import Script from 'next/script'

export default function App ({ Component, pageProps }) {
  return (
    <>
      {/* Google Tag Manager Script */}
      <Script id='google-analytics' strategy='beforeInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1CFEW0CZTM');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
