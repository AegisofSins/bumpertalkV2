import Navbar from "../components/navbar";
import '../styles/globals.css'
import Head from "next/head";
import { AuthContextProvider } from "@/context/AuthContext";


function MyApp ({Component, pageProps}) {
    return(
      <AuthContextProvider>
      <Head>
        <title>BumperTalk</title>
        <link rel="icon" href="/ambulance.svg" type="image/x-icon" />
      </Head>
      <Navbar />
      <Component {...pageProps} />    
      </AuthContextProvider>
    )
}

export default MyApp;