import Head from "next/head"

export interface HomeHeadersProps {
  title?: string
  description?: string
}

const HomeHeaders = (props: HomeHeadersProps) => {
  return (
    <Head>
      <title>{props.title || "Me On Web"}</title>
      <meta
        property="og:description"
        content={props.description || "My Web portfolio"}
      />
    </Head>
  )
}
export default HomeHeaders
