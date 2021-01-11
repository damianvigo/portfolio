import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <a href='../../index.html' className='header__logo'>DV</a>
    <nav className='haeder__menu'>
      <ul className='header__menu-ul'>
        <li className='header__menu-li'><a className='header__menu-a' href='./pages/proyectos.html'>Proyectos</a></li>
        <li className='header__menu-li'><a className='header__menu-a' href='#sobre-mi'>Sobre Mi</a></li>
        <li className='header__menu-li'><a className='header__menu-a' href='./pages/notas.html'>Notas</a></li>
        <li className='header__menu-li'><a className='header__menu-a' href='./pages/contacto.html'>Hablemos</a></li>
      </ul>
    </nav>
    <button className='switch' id='switch' type='button'>
      <span className='switch__span'><i className='fas fa-sun switch__icon--sun' /></span>
      <span className='switch__span'><i className='fas fa-moon switch__icon--moon' /></span>
    </button>
  </header>
);

export default Header;
