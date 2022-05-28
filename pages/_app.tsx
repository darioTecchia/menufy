import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import axios from 'axios';

axios.defaults.baseURL = 'https://api.airtable.com/v0/appWGMpWfG81Mwqss';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + process.env.AIRTABLE_API_KEY;

import '../styles/fonts/fonts.scss'
import '../styles/globals.scss'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <Component {...pageProps} />
  )
}