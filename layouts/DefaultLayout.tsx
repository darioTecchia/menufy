import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from '../components/header/Header'

interface Props {
  children?: ReactNode;
  title?: string;
}

const DefaultLayout = ({ children, title = 'Madamé' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.svg" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
  </div>
)

export default DefaultLayout