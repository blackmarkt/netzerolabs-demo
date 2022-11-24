import Head from 'next/head'
import { useRouter } from "next/router";

const Meta = ({ title, keywords, description, url }) => {
  const router = useRouter();

  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <meta name="google" content="notranslate" />
      <meta property="og:URL" content={url} />
      <meta property="og:type" content="website" />
      <meta http-equiv="Content-Language" content="en" />
      <link rel='icon' href='/favicon.ico' />
      {router.asPath != "/" ? (<title>{title} | {router.asPath.split("/").at(-1).replace('-', ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</title>) 
      : (<title>{title} | On Chain Carbon Accounting</title>)}
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Net0Labs ',
  keywords: 'crypto climate, carbon accounting, crypto, environment, netzero, net zero, climate',
  description: 'On-Chain Carbon Accounting',
  url: 'https://www.net0labs.io',
}

export default Meta