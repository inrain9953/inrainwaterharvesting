import Head from "next/head";

const StaticMetatag = ({ data }) => {
  return (
    <Head>
      <title>{data.title}</title>
      <meta charSet="UTF-8" />
      <meta name="language" content="en" />
      <meta name="author" content="InRain® Construction Pvt. Ltd." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="description" content={data.desc} />
      <meta name="keywords" content={data.keyword} />
      <meta name="canonical" content={data.canonical} />
      <meta property="og:title" content={data.ogTitle} />
      <meta
        property="og:image"
        content="https://inrainwaterharvesting.com/banner2.jpg"
      />
      <meta property="og:description" content={data.ogDescription} />
      <meta property="og:url" content={data.ogUrl} />
      <meta name="twitter:title" content={data.twittertitle} />
      <meta name="twitter:description" content={data.twitterdescription} />
      <meta property="og:site_name" content="InRain® Construction Pvt. Ltd." />
      <meta
        name="google-site-verification"
        content="PbDVyrzTtY0TXIc1bKpuhHLByOKSJEhYPGZ95GZtMyk"
      />
    </Head>
  );
};

export default StaticMetatag;
