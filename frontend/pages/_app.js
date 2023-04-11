import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Head from "next/head";

import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          H3lios.in | Ecommerce for FullStack Web Apps | Trusted by 100+ Fiverr
          Clients
        </title>
        <meta
          name="description"
          content="H3lios.in | Your Trusted Source for FullStack Web Applications - Build Modern Websites and Mobile Apps Quickly and Affordably | Contact Us"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
