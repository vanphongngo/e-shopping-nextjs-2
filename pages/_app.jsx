import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <div className="root-app">
      <Head>
        <title></title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
