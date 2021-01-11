import React, { Fragment } from 'react';

/* Components */
/* import Layout from '../components/Layout'; */
import HeroImage from '../components/HeroImage';
import AboutMe from '../components/AboutMe';
import Cite from '../components/Cite';
import LastProyects from '../components/LastProyects';

const Home = () => {

  return (
    <>
      <HeroImage />
      <AboutMe />
      <Cite />
      <LastProyects />
    </>
  );
};

export default Home;
