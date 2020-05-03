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
        <title>ur friend has a message for u!</title>

        <meta 
          name="description"
          content="ur friend wants to send u a friendly message!"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:url" content="https://urstup.id" />
        <meta property="og:title" content="ur friend has a message for u!" />
        <meta
          property="og:description"
          content="ur friend wants to send u a friendly message!"
        />

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-125571056-5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-125571056-5');
          `
          }}
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