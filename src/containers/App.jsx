import React from 'react';
import { Router } from '@reach/router';
/* import { Helmet } from 'react-helmet'; */

/* Styles */
import '../assets/styles/App.scss';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Proyects from '../pages/Proyects';
import Contact from '../pages/Contact';

const App = () => {

  return (
    <Layout>
      <Router>
        <Home path='/' />
        <Proyects path='/proyectos' />
        <Contact path='/contacto' />
      </Router>
    </Layout>
  );
};

export default App;
