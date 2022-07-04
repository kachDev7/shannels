import '../styles/main.min.css'
import Layout from '../components/layout'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap")
  }, [])

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
