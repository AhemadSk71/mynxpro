import Head from 'next/head'
import Image from 'next/image'
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Physics from "./Physics/index.js";

export default function Home() {
  return (
  <>
      <Head>
        <title>Home | Physics.Sci</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Navbar/>
     <Physics/>
     <Footer/>
     
    </>
  )
}
