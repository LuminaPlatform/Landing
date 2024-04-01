import { Provider as ReduxProvider } from 'react-redux'
import { Web3ReactProvider } from '@web3-react/core'
import { ModalProvider } from 'styled-react-modal'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { ChakraProvider } from '@chakra-ui/react'

import Web3ReactManager from '../components/Web3ReactManager'
import ThemeProvider, { ThemedGlobalStyle } from '../theme'
import Popups from '../components/Popups'
import Layout from '../components/Layout'
import { ModalBackground } from '../components/Modal'
import { useAnalyticsReporter } from '../components/analytics'
import LiveChat from 'components/LiveChat'

import store from '../state'
import { getLibrary } from '../utils/library'
import { chakraTheme } from 'theme/chakraConfig'

const Updaters = dynamic(() => import('../state/updaters'), { ssr: false })
const Web3ProviderNetwork = dynamic(() => import('../components/Web3ProviderNetwork'), {
  ssr: false,
})

if (typeof window !== 'undefined' && !!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false
}

export default function MyApp({ Component, pageProps }: AppProps) {
  useAnalyticsReporter()
  return (
    <ReduxProvider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ProviderNetwork getLibrary={getLibrary}>
          <Web3ReactManager>
            <ThemeProvider>
              <ThemedGlobalStyle />
              <ModalProvider backgroundComponent={ModalBackground}>
                <Toaster position="bottom-center" />
                <LiveChat />
                <Popups />
                <Updaters />
                <ChakraProvider theme={chakraTheme}>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </ChakraProvider>
              </ModalProvider>
            </ThemeProvider>
          </Web3ReactManager>
        </Web3ProviderNetwork>
      </Web3ReactProvider>
    </ReduxProvider>
  )
}
