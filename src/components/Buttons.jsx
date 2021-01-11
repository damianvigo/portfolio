import React, { useEffect } from 'react';
import '../assets/styles/components/Buttons.scss';

import darkMode from '../containers/darkMode';
import hamburguerMenu from '../containers/hamburguerMenu';
import scrollTopButton from '../containers/scrollTopButton';
import stickyFooter from '../containers/stickyFooter';

const Buttons = () => {

  useEffect(() => {
    darkMode('#switch');
    stickyFooter('.header');
    hamburguerMenu('.panel-btn', '.panel', '.panel__menu-a');
    scrollTopButton('.scroll-top-btn');
  }, []);

  return (
    <>
      <aside className='panel'>
        <nav className='panel__menu'>
          <a className='panel__menu-a' href='../pages/proyectos.html'>Proyectos</a>
          <a className='panel__menu-a' href='#sobre-mi'>Sobre Mi</a>
          <a className='panel__menu-a' href='../pages/contacto.html'>Hablemos</a>
        </nav>
      </aside>

      <button className='panel-btn hamburger hamburger--vortex' type='button'>
        <span className='hamburger-box'>
          <span className='hamburger-inner'></span>
        </span>
      </button>

      <button className='scroll-top-btn hidden' type='button'><i className='far fa-hand-pointer'></i></button>

      <section className='overlay' id='overlay'>
        <div className='overlay__container-img'>
          <button id='btn-cerrar-popup' type='button'><i className='fas fa-times'></i></button>
          <img className='overlay__img' src='' alt='overlay' />
        </div>
        <p className='overlay__description' />
      </section>
    </>
  );
};

export default Buttons;
