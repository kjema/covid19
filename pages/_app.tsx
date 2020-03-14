import React from 'react';
import { AppProps } from 'next/app';
import 'semantic-ui-css/semantic.min.css';
import Layout from './layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
