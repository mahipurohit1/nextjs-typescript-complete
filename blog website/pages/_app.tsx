import Layout from "@/component/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Blog Website</title>
      </Head>{" "}
      <Component {...pageProps} />{" "}
    </Layout>
  );
}
