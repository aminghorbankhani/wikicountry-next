import Head from 'next/head';
import React from 'react';
import Nav from './Nav';

const Layout = ({ children } : {children: React.ReactNode}) => (
  <>
    <Head>
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="manifest" href="/fav/site.webmanifest" />
      <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="180x180" href="/fav/favicon-180x180.png" />
    </Head>
    <Nav />
    {children}
  </>
);

export default Layout;
