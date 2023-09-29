import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/default";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Openapps Website</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
