import React from 'react';
import '../assets/styles/components/HeroImage.scss';
import portrait from '../assets/static/img/seleccionada-yo-compress.jpg';

const HeroImage = () => (
  <section className='hero-image'>
    <div className='hero-image__transparent'>
      <div className='hero-image__perfil'>
        <h1 className='hero-image__title'>Hola, soy Damián Vigo</h1>
        <h2 className='hero-image__subtitle'>Desarrollador Web</h2>
        <figure className='hero-image__img-perfil'>
          <img
            className='hero-image__img-perfil--img'
            src={portrait}
            alt='imagen retrato de Damián Vigo'
            title='Retrato Damian Vigo'
          />
        </figure>
      </div>
    </div>
  </section>
);

export default HeroImage;
