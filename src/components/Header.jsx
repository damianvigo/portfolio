import React from 'react';
import { Link } from '@reach/router';
import '../assets/styles/components/Header.scss';

const Header = () => {

  return (
    <header className='header'>
      <Link to='/' className='header__logo'>DV</Link>
      <nav className='haeder__menu'>
        <ul className='header__menu-ul'>
          <li className='header__menu-li'><Link className='header__menu-a' to='/proyectos'>Proyectos</Link></li>
          <li className='header__menu-li'><a className='header__menu-a' href='#sobre-mi'>Sobre Mi</a></li>
          <li className='header__menu-li'><Link className='header__menu-a' to='/pages/notas'>Notas</Link></li>
          <li className='header__menu-li'><Link className='header__menu-a' to='/contacto'>Hablemos</Link></li>
        </ul>
      </nav>
      <button className='switch' id='switch' type='button'>
        <span className='switch__span'><i className='fas fa-sun switch__icon--sun' /></span>
        <span className='switch__span'><i className='fas fa-moon switch__icon--moon' /></span>
      </button>
    </header>
  );
};

export default Header;
