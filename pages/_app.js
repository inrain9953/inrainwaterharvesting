import GoogleTag from "@/components/Schema/GoogleTag";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleTag />
      <Component {...pageProps} />
    </>
  );
}
