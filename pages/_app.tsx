import Head from 'next/head';
import React from 'react';
import { AppProps } from 'next/app';
import 'styles/global.css';

// https://stackoverflow.com/questions/58070996/how-to-fix-the-warning-uselayouteffect-does-nothing-on-the-server
React.useLayoutEffect = React.useEffect;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>mini Next + Antd + TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
