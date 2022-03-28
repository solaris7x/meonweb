import Head from "next/head"

const CommonHeaders = () => {
  return (
    <Head>
      {/* <!-- TODO: Add appropriate meta headers --> */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Aditya is Dev/Ops Engineer and Open-Source enthusiast."
      />
      <meta property="og:title" content="Aditya Patil" />
      <meta
        property="og:description"
        content="Aditya is Dev/Ops Engineer and Open-Source enthusiast."
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Aditya Patil" />
      <title>Aditya Patil</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      {/* <script src="https://kit.fontawesome.com/4bf48f78b4.js" crossOrigin="anonymous"></script> */}
    </Head>
  )
}
export default CommonHeaders
