import { useEffect, useState } from "react";
import Head from "next/head";
import Router, {useRouter} from 'next/router';

import { Footer, MessageHero, MessageBody, CallToAction } from "../components";

function Message() {
  const { asPath } = useRouter();
  const slug = asPath.slice(1,asPath.length);

  const [message, setMessage] = useState({
    fromName: null,
    targetName: null,
    message: null,
  });

  useEffect(() => {
    if (slug) {
      async function getMessage() {
        const route = `/.netlify/functions/message?slug=${slug}`;
        const res = await fetch(route);
  
        if (res.status !== 200) {
          Router.push("/");
        } else {
          const data = await res.json();
          setMessage(data.message);
        }
      } 
      
      getMessage();
    }
  }, [slug]);

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

      <MessageHero targetName={message.targetName || "..."} fromName={message.fromName || "..."} />
      <MessageBody message={message.message || "..."} />
      <CallToAction fromName={message.fromName || "..."}>
        <Footer isDark/>
      </CallToAction>
    </>
  );
}

export default Message;