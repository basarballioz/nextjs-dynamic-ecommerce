import "@/styles/index.css";
import "typeface-montserrat";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Basar Ballioz - ECommerce</title>
        <meta
          name="Ecommerce Website"
          content="Randomly made ecommerce website"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
