import Head from "next/head";
import { Footer, Form, Hero } from "../components";

function HomePage() {
  return (
    <>
      <Head>
        <title>urstup.id - a friendly way to remind ur friends what they are</title>

        <meta 
          name="description"
          content="a revolutionary platform powered by blockchain, AI, ar/vr, sustainable tech, vc funds... ok jk this is just a friendly way to remind ur friends what they are"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:url" content="https://urstup.id" />
        <meta property="og:title" content="urstup.id - a friendly way to remind ur friends what they are" />
        <meta
          property="og:description"
          content="a revolutionary platform powered by blockchain, AI, ar/vr, sustainable tech, vc funds... ok jk this is just a friendly way to remind ur friends what they are"
        />
        
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      
      <Hero />
      <Form />
      <Footer />
    </>
  )
}

export default HomePage