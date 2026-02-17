import SmoothScroll from "@/components/Portuguese/Lenis";
import "@/styles/globals.scss";
import "animate.css/animate.compat.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryParamsProvider } from "@/context/QueryContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>O Rei dos Sites</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <SmoothScroll />
      <QueryParamsProvider>
        <Component {...pageProps} />
      </QueryParamsProvider>
    </>
  );
}
