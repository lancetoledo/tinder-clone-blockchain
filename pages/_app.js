import '../styles/globals.css'
import { TinderProvider } from '../context/TinderContext' 

function MyApp({ Component, pageProps }) {
  return (
  <TinderProvider>
      <Component {...pageProps} />
  </TinderProvider>
  )
}

export default MyApp
