import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Header from "./Header";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Header></Header>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
