import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import PageLayout from '../components/Layout/PageLayout'
import Cart from '../components/Cart/Cart'
import store from '../store/store'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PageLayout>
        <Component {...pageProps} />
        <Cart />
      </PageLayout>
    </Provider>
  )
}

export default MyApp
