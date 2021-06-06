import { useEffect } from 'react'
import { useRouter } from 'next/router'

import '../styles/index.css'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    if (!gtag.existsGaId) {
      return
    }

    const handleRouteChange = (path) => {
      gtag.pageview(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
