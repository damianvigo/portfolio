import React from 'react';
import '../assets/styles/components/LastProyects.scss';
import petgram from '../assets/static/img/petgram.jpg';
import portfolioDv from '../assets/static/img/portfolio-dv.jpg';

const LastProyects = () => {
  return (
    <>
      <section className='last-proyects'>
        <h2 className='last-proyects__primary-title'>Ultimos Proyectos</h2>
        <section className='last-proyects-container'>
          <article className='last-proyects-container-fluid'>
            <h2 className='last-proyects-container-fluid__title'>React</h2>
            <p className='last-proyects-container-fluid__description'>Una progressive web app donde encontrarás fotos de
            animales muy bonitos. Desarrollado con React JS - reach router - react helmet - graphQL - react apollo</p>
          </article>
          <article className='last-proyects-container-fluid'>
            <a className='last-proyects-container-fluid-link' href='https://petgram.damianvigo.vercel.app' target='_blank'
              rel='noopener'>
              <figure className='last-proyects-container-fluid__figure'>
                <img
                  className='last-proyects-container-fluid__img'
                  src={petgram}
                  alt='Red social de animales llamada Petgram'
                  title='Petgram'
                  loading='lazy'
                />
              </figure>
            </a>
          </article>

          <article className='last-proyects-container-fluid flex-order'>
            <h2 className='last-proyects-container-fluid__title text-right'>Portfolio</h2>
            <p className='last-proyects-container-fluid__description text-right'>Diseño Responsive en HTML CSS y vanilla Javascript. Slider y modal hecho solo con CSS.</p>
          </article>
          <article className='last-proyects-container-fluid'>
            <a className='last-proyects-container-fluid-link' href='https://portfolio-dv.netlify.app' target='_blank'
              rel='noopener'>
              <figure className='last-proyects-container-fluid__figure'>
                <img
                  className='last-proyects-container-fluid__img'
                  src={portfolioDv}
                  alt='Portafolio cv'
                  title='Portfolio'
                  loading='lazy'
                />
              </figure>
            </a>
          </article>
        </section>
      </section>
      <button className='container-button' type='button'>
        <a href='./pages/proyectos.html' className='button'>
          No presionar
        </a>
      </button>
    </>
  );
};

export default LastProyects;
