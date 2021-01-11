import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer__social-network'>
        <div className='footer__container-icon'>
          <a href='https://www.facebook.com/ddamianvigo' target='_blank' rel='noopener' className='footer__fb'>
            <i className='fab fa-facebook footer__icon'></i>
          </a>
        </div>
        <div className='footer__container-icon'>
          <a href='https://platzi.com/@Damian' target='_blank' rel='noopener' className='footer__platzi'>
            <i className='fas fa-graduation-cap footer__icon'></i>
          </a>
        </div>
        <div className='footer__container-icon'>
          <a href='https://github.com/damianvigo' target='_blank' rel='noopener' className='footer__github'>
            <i className='fab fa-github footer__icon'></i>
          </a>
        </div>
      </section>
      <div className='footer__author'>
        <p>Damián Vigo &copy; 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
