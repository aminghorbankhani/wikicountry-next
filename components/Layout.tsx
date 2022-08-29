import React from 'react';
import Nav from './Nav';

const Layout = ({ children } : {children: React.ReactNode}) => (
  <>
    <Nav />
    {children}
  </>
);

export default Layout;
