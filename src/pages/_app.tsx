import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/default";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Openapps Website</title>

        <meta charSet="utf-8" />

        <meta name="description" content="Openapps Portfolio Website" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="icon"
          href="./openapps_logo.svg"
          type="image/svg+xml"
          sizes="any"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
