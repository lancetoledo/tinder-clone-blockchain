import '../styles/globals.css'
import { TinderProvider } from '../context/TinderContext' 
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
     serverUrl='https://ahi2xzvuhnxx.usemoralis.com:2053/server'
     appId='5jEWZhCifkfmRXV5Kbn5WIBlqN0v1iEJrBKEYVTs'
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>

  )
}

export default MyApp
