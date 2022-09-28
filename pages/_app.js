import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'

import * as ga from '../lib/google-analytics'

function MyApp({ Component, pageProps }) {

  // const router = useRouter()

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     ga.pageview(url)
  //   }
  //   router.events.on('routerChnageComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routerChnageComplete', handleRouteChange)
  //   }
  // }, [router.events])

  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      {/* <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} strategy='afterInteractive'></Script>
      <Script id='google-analytics-script' strategy='afterInteractive'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `}
      </Script> */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-G9K1637SCD`}
      />

      <Script strategy="lazyOnload" id='google-analytics-script'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G9K1637SCD', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
