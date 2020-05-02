import Head from "next/head";
import { Footer, MessageHero, MessageBody, CallToAction } from "../components";

function Message({ targetName, fromName, message }) {
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

        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <MessageHero targetName={targetName} fromName={fromName} />
      <MessageBody message={message} />
      <CallToAction fromName={fromName}>
        <Footer isDark/>
      </CallToAction>
    </>
  )
}

Message.getInitialProps =  () => {
  return {
    targetName: "willie",
    fromNamme: "alex",
    message:  "because you just suck"
  };
}

export default Message