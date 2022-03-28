import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Aditya is Dev/Ops Engineer and Open-Source enthusiast."
        />
        <meta property="og:title" content="Aditya Patil" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Aditya Patil" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
