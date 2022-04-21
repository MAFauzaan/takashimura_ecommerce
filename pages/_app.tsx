import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import PageLayout from '../components/Layout/PageLayout'
import Cart from '../components/Cart/Cart'
import store from '../store/store'
import { theme } from '../theme/theme';

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PageLayout>
          <Component {...pageProps} />
          <Cart />
        </PageLayout>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp;
