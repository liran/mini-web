import Head from 'next/head';
import React from 'react';
import 'styles/globals.css';

// https://stackoverflow.com/questions/58070996/how-to-fix-the-warning-uselayouteffect-does-nothing-on-the-server
React.useLayoutEffect = React.useEffect;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Next+Antd App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
