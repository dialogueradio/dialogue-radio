import { useEffect, useReducer } from 'react'
import App from 'next/app'
import { useRouter } from 'next/router'
import { PlayerProvider, initialState, reducer } from "../context/AudioPlayer";
import AudioPlayer from "../components/audio-player";

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
  
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PlayerProvider value={{ state, dispatch }}>
      <Component {...pageProps} />
      <AudioPlayer />
    </PlayerProvider>
  )
}

export default MyApp
