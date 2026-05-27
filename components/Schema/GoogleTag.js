import Script from "next/script";

const GoogleTag = () => {
  return (
    <>
      {/* Load Google Analytics library */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-BYLWCFZ8V6"
        strategy="afterInteractive"
      />

      {/* Initialize GA */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BYLWCFZ8V6');
        `}
      </Script>
    </>
  );
};

export default GoogleTag;
