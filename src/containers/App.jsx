import React from 'react';
/* Styles */
import '../assets/styles/App.scss';

/* Components */
import Header from '../components/Header';
import HeroImage from '../components/HeroImage';
import AboutMe from '../components/AboutMe';
import Buttons from '../components/Buttons';
import Cite from '../components/Cite';
import LastProyects from '../components/LastProyects';
import Footer from '../components/Footer';

const App = () => (
  <div className='App'>
    <Header />
    <Buttons />
    <HeroImage />
    <AboutMe />
    <Cite />
    <LastProyects />
    <Footer />
  </div>
);

export default App;
