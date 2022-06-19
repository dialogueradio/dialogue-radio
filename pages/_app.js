import { useEffect, useReducer } from 'react'
import { PlayerProvider, initialState, reducer } from "../context/AudioPlayer";
import TagManager from 'react-gtm-module';
import AudioPlayer from "../components/audio-player";
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  // Google Tag Manager
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-58CFTZG' })
  }, [])

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  // Audio player
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PlayerProvider value={{ state, dispatch }}>
      <Component {...pageProps} />
      <AudioPlayer />
    </PlayerProvider>
  )
}

export default MyApp
