import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global';
import AppProvider from '../contexts/index';

// eslint-disable-next-line no-undef
const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : (
        <>
          <Head>
            <title>React Avançado - BoilerPlater</title>
            <link rel="shortcut icon" href="img/icon-512.png" />
            <link rel="apple-touch-icon" href="img/icon-192.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="description"
              content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
            />
          </Head>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
          <GlobalStyles />
        </>
      )}
    </div>
  );
};

export default App;
