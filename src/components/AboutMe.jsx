import React from 'react';
import '../assets/styles/components/AboutMe.scss';
import react from '../assets/static/icon/react.svg';
import javascript from '../assets/static/icon/javascript.svg';
import css3 from '../assets/static/icon/css3.svg';
import html5 from '../assets/static/icon/html5.svg';
import visualstudiocode from '../assets/static/icon/visualstudiocode.svg';
import bootstrap from '../assets/static/icon/bootstrap.svg';
import php from '../assets/static/icon/php.svg';
import github from '../assets/static/icon/github.svg';
import mysql from '../assets/static/icon/mysql.svg';
import wordpress from '../assets/static/icon/wordpress.svg';

const AboutMe = () => (
  <section id='sobre-mi' className='perfil'>
    <h2 className='perfil__title-me'>¿Quién Soy?</h2>
    <article className='perfil__description-me'>
      <p className='perfil__text-me'>
        ¡Hola! 👋
        <br />
        <strong>Me llamo Damián Vigo y soy Frontend Developer de Buenos Aires Argentina.</strong>
        <br />
        Estoy especializado en el desarrollo web de tecnologías Javascript. estoy aquí para ayudarte a desarrollar tu idea ¿Te animas?
        ¡Contáctame ya mismo! Me encantará trabajar contigo.
      </p>
      <article className='perfil__icons'>
        <figure className='perfil__icons__figure'>
          <img className='perfil__icons__figure--svg' src={react} alt='icono de react' />
          <img className='perfil__icons__figure--svg' src={javascript} alt='icono de javascript' title='javascript' />
          <img className='perfil__icons__figure--svg' src={css3} alt='icono de css' title='css' />
          <img className='perfil__icons__figure--svg' src={html5} alt='icono de html' title='html' />
          <img className='perfil__icons__figure--svg' src={visualstudiocode} alt='icono de visual studio code' />
          <img className='perfil__icons__figure--svg' src={bootstrap} alt='icono de bootstrap' />
          <img className='perfil__icons__figure--svg' src={php} alt='icono de php' />
          <img className='perfil__icons__figure--svg' src={github} alt='icono de github' />
          <img className='perfil__icons__figure--svg' src={mysql} alt='icono de mysql' />
          <img className='perfil__icons__figure--svg' src={wordpress} alt='icono de wordpress' />
        </figure>
      </article>
    </article>
  </section>
);

export default AboutMe;
