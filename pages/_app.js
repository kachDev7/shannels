import '../styles/main.min.css'
import Layout from '../components/layout'
import Head from 'next/head'
import Script from 'next/script'



function MyApp({ Component, pageProps }) {

  return (
    <>
    
  <Head>
  <link 
  rel="stylesheet" 
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
  </Head>
  
  <Layout>
    <Component {...pageProps}/>
  </Layout>

    </>
  )
}

export default MyApp
