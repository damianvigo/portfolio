import React from 'react';
/* import { Helmet } from 'react-helmet'; */

import Header from './Header';
import Footer from './Footer';
import Buttons from './Buttons';

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <Buttons />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
