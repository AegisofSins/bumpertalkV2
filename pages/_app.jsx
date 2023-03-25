import Navbar from "../components/navbar";
import HamburgerMenu from "../components/hamburgerMenu";
import '../styles/globals.css'
import Head from "next/head";


function MyApp ({Component, pageProps}) {
    return(
      <>
      <Head>
        <title>BumperTalk</title>
        <link rel="icon" href="/ambulance.svg" type="image/x-icon" />
      </Head>
      <Navbar />
      <Component {...pageProps} />  
      </>
    )
}

export default MyApp;