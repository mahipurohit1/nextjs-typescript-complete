import Navbar from "@/component/Nav/Navbar";
import { NotificationContextProvider } from "@/store/Notification-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NotificationContextProvider>
        <Head>
          <title>Event App</title>
          <meta title="author" content="mahipal purohit" />
          <meta
            name="description"
            content="events app in typescript and next js"
          />
        </Head>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </NotificationContextProvider>
    </>
  );
}
