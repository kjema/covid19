import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import Layout from './layout';
import useDarkMode from 'use-dark-mode';
import { lightTheme, darkTheme } from '../theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = React.useState(false);
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {/* <button onClick={darkMode.enable}>DARK MODE</button>
        <button onClick={darkMode.disable}>LIGHT MODE</button> */}
        {isMounted && <Component {...pageProps} />}
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
