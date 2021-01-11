import React, { useEffect } from 'react';
import { Router } from '@reach/router';
/* import { Helmet } from 'react-helmet'; */

/* Styles */
import '../assets/styles/App.scss';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Proyects from '../pages/Proyects';

const App = () => {

  return (
    <Layout>
      <Router>
        <Home path='/' />
        <Proyects path='/proyectos' />
      </Router>
    </Layout>
  );
};

export default App;
