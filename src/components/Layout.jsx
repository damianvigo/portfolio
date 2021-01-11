import React from 'react';
/* import { Helmet } from 'react-helmet'; */

import Header from '../components/Header';
import Footer from '../components/Footer';
import Buttons from './Buttons';

const Layout = ({ children }) => {

  return (
    <>
      <div className='App'>
        <Header />
        <Buttons />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
