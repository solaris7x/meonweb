import "../styles/globals.css"
import "../styles/style.css"
import "../styles/swiper-bundle.min.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
