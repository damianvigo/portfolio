import React, { useEffect } from 'react';

import '../assets/styles/components/Proyects.scss';

import batatabit from '../assets/static/img/batatabit.jpg';
import svelte from '../assets/static/img/svelte-pugstagram.jpg';
import tech from '../assets/static/img/tech.jpg';
import restaurante from '../assets/static/img/restaurante-ddv.jpg';
import manager from '../assets/static/img/app-manager.jpg';
import movieapp from '../assets/static/img/movieapp-ddv.jpg';
import petgram from '../assets/static/img/petgram.jpg';

import react from '../assets/static/img/proyecto-react.png';
import angular from '../assets/static/img/proyecto-angular.png';
import vue from '../assets/static/img/crear-articulo-vue.jpg';
import materialize from '../assets/static/img/materialize.jpg';
import netflix from '../assets/static/img/netflix.png';
import sitioGeekJohnWick from '../assets/static/img/sitio-geek-john-wick.jpg';
import sitioGeekSass from '../assets/static/img/sitio-geek-portal-sass.jpg';
import sitioGeekLess from '../assets/static/img/sitio-geek-less.jpg';
import materializeForm from '../assets/static/img/materialize-form.jpg';
import tiendaBoostrap from '../assets/static/img/tienda-bootstrap.jpg';
import sitioGeekStylus from '../assets/static/img/sitio-geek-busqueda-stylus.jpg';
import electronica from '../assets/static/img/musica-electronica.jpg';
import gatoLineasPlanos from '../assets/static/img/gato-lineas-planos.jpg';
import gatoPlanoBlancoYNegro from '../assets/static/img/gato-planos-blanco-negro.jpg';

import searchFilters from '../containers/searchFilter';

const ProyectsComponent = () => {

  useEffect(() => {
    const d = document;
    const overlay = document.getElementById('overlay');
    d.querySelectorAll('.cards-filter__img').forEach((el) => {
      el.addEventListener('click', () => {
        const rute = el.getAttribute('src');
        const description = el.parentNode.dataset.description;
        overlay.classList.add('active');
        d.querySelector('.overlay__img').src = rute;
        d.querySelector('.overlay__description').innerHTML = description;
      });
    });

    d.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
      overlay.classList.remove('active');
    }, []);

    overlay.addEventListener('click', (e) => {
      // overlay.classList.remove('active');
      e.target.id === 'overlay' ? overlay.classList.remove('active') : '';
    });

    searchFilters('.card-filter-input', '.cards-filter__card');
  });

  return (
    <>
      <div className='fix-sticky'></div>
      <div className='proyects-title'>
        <h1 className='proyects-title__h1'>Proyectos</h1>
      </div>
      <div className='wrapped-card'>
        <section className='container-card grid-fluid'>
          <article className='card'>
            <a className='card__card-link' href='https://damian-vigo-batatabit.vercel.app' target='_blank' rel='noopener'>
              <figure className='card__card-figure'>
                <img loading='lazy' className='card__card-img' src={batatabit} loading='lazy'
                  alt='pagina web batatabit' title='batatabit' />
              </figure>
            </a>
            <h2 className='card-title'>Maquetación</h2>
            <p className='card-description'>
              El 50% del tráfico en internet se realiza
              desde dispositivos móviles, convirtiendo una prioridad desarrollar para smartphones, tablets y laptops.
          Desde el wireframe a mobile first con buenas prácticas. </p>
            <a href='https://github.com/damianvigo/batatabit' target='_blank' rel='noopener' title='github'
              className='card-code'>Código del proyecto</a>
          </article>
          <article className='card'>
            <a className='card__card-link' href='https://pugstagram-damian-vigo.netlify.app' target='_blank' rel='noopener'>
              <figure className='card__card-figure'>
                <img loading='lazy' className='card__card-img' src={svelte} loading='lazy'
                  alt='Una red social hecha en Svelte' title='pugstagram' />
              </figure>
            </a>
            <h2 className='card-title'>Svelte</h2>
            <p className='card-description'>
              Web app construida con el framework de javascript Svelte</p>
            <a href='https://github.com/damianvigo/svelte' target='_blank' rel='noopener' title='github'
              className='card-code'>Código del proyecto</a>
          </article>
          <article className='card'>
            <a className='card__card-link' href='https://tech-news-damian-vigo.web.app' target='_blank' rel='noopener'>
              <figure className='card__card-figure'>
                <img loading='lazy' className='card__card-img' src={tech} loading='lazy' title='tech-news'
                  alt='Un portal de noticias de tecnología hecho con HTML5, CSS3 y JavaScript' />
              </figure>
            </a>
            <h2 className='card-title'>Portal de noticias geek</h2>
            <p className='card-description'>Diseño Responsive. Construido con HTML, CSS(SASS) y vanilla Javascript</p>
            <a href='https://github.com/damianvigo/tech-news' className='card-code' title='github' target='_blank'
              rel='noopener'>Código del proyecto</a>
          </article>
          <article className='card'>
            <a className='card__card-link' href='https://cafe-damian-vigo.netlify.app' target='_blank' rel='noopener'>
              <figure className='card__card-figure'>
                <img loading='lazy' className='card__card-img' src={restaurante}
                  alt='Un sitio web de un Restaurante creado con html, css y javascript' title='restaurante' />
              </figure>
            </a>
            <h2 className='card-title'>Restaurante</h2>
            <p className='card-description'>Diseño Responsive. Construido con HTML
          CSS(SASS) Javascript y JQuery</p>
            <a href='https://github.com/damianvigo/restaurante-sitio-web' title='github' target='_blank' rel='noopener'
              className='card-code'>Código del proyecto</a>
          </article>
          <article className='card'>
            <a className='card__card-link' href='https://app-manager-ddv.herokuapp.com' target='_blank' rel='noopener'>
              <figure className='card__card-figure'>
                <img loading='lazy' className='card__card-img' src={manager}
                  alt='Una app en react para situar jugadores en una cancha de futbol' title='app-manager' />
              </figure>
            </a>
            <h2 className='card-title'>App Manager</h2>
            <p className='card-description'>Web app en react con Redux</p>
            <a href='https://github.com/damianvigo/javascript/tree/master/otros/app-manager' title='github' target='_blank'
              rel='noopener' className='card-code'>Código del proyecto</a>
          </article>
          <article className='card'>
            <a className='card__card-link' target='_blank' rel='noopener' href='https://movies-react-omdb.netlify.app'>
              <figure className='card__card-figure'>
                <img loading='lazy' className='card__card-img' src={movieapp}
                  alt='Buscador de peliculas online' title='movie-app' />
              </figure>
            </a>
            <h2 className='card-title'>Movie App</h2>
            <p className='card-description'>Web app en react con la API de OMDb (The Open Movie Database)</p>
            <a href='https://github.com/damianvigo/movie-app' title='github' target='_blank' rel='noopener'
              className='card-code'>Código del proyecto</a>
          </article>
          <article className='card'>
            <a target='_blank' rel='noopener' className='card__card-link' href='https://petgram.damianvigo.vercel.app'>
              <figure className='card__card-figure'>
                <img title='petgram' loading='lazy' className='card__card-img' src={petgram}
                  alt='Red social de animales llamada Petgram' />
              </figure>
            </a>
            <h2 className='card-title'>Pets App</h2>
            <p className='card-description'>Web app con react</p>
            <a href='https://github.com/damianvigo/javascript/tree/master/react-avanzado/react-avanzado' title='github'
              target='_blank' rel='noopener' className='card-code'>Código del proyecto</a>
          </article>
        </section>
      </div>

      <section className='container-filter'>
        <article className='search-container'>
          <h2 className='filter-title'>Filtro de búsqueda</h2>
          <input type='search' id='buscar' placeholder='Buscar por ej: React' className='card-filter-input' />
        </article>
        <article className='cards-filter grid-fluid'>
          <figure className='cards-filter__card' data-description='CRUD de Artículos en React'>
            <img className='cards-filter__img' src={react} loading='lazy' title='Blog en React'
              alt='Un blog hecho en React' />
            <figcaption className='cards-filter__figcaption'>React</figcaption>
            <div className='cards-filter__container-icon'>
              <a href='https://github.com/damianvigo/Proyecto-con-React' target='_blank' rel='noopener'><i
                className='fab fa-github cards-filter__container-icon--icon'></i></a>
            </div>
          </figure>
          <figure className='cards-filter__card' data-description='CRUD de artículos en Angular'>
            <img className='cards-filter__img' src={angular} loading='lazy' title='Blog en Angular'
              alt='Un blog hecho en Angular' />
            <figcaption className='cards-filter__figcaption'>Angular</figcaption>
            <div className='cards-filter__container-icon'>
              <a href='https://github.com/damianvigo/Proyecto-en-Angular' target='_blank' rel='noopener'><i
                className='fab fa-github cards-filter__container-icon--icon'></i></a>
            </div>
          </figure>
          <figure className='cards-filter__card' data-description='CRUD de Artículos en Vue'>
            <img className='cards-filter__img' src={vue} loading='lazy' title='Blog en Vue'
              alt='Un blog hecho en Vue' />
            <figcaption className='cards-filter__figcaption'>Vue</figcaption>
            <div className='cards-filter__container-icon'>
              <a href='https://github.com/damianvigo/Proyecto-con-Vue' target='_blank' rel='noopener'><i
                className='fab fa-github cards-filter__container-icon--icon'></i></a>
            </div>
          </figure>
          <figure className='cards-filter__card' data-description='Blog - HTML5 - CSS3(Materialize)'>
            <img className='cards-filter__img' src={materialize} loading='lazy' title='Blog'
              alt='Maquetado web de un blog con el framework Materialize' />
            <figcaption className='cards-filter__figcaption'>Materialize</figcaption>
            <div className='cards-filter__container-icon'>
              <a href='https://github.com/damianvigo/Blog-materialize' target='_blank' rel='noopener'><i
                className='fab fa-github cards-filter__container-icon--icon'></i></a>
            </div>
          </figure>
          <figure className='cards-filter__card' data-description='Página de inicio HTML5 - CSS3 - Vanilla JS'>
            <img className='cards-filter__img' src={netflix} loading='lazy' title='Netflix'
              alt='Maquetación web de la plataforma Netflix' />
            <figcaption className='cards-filter__figcaption'>Maquetación</figcaption>
            <div className='cards-filter__container-icon'>
              <a target='_blank' rel='noopener' href='https://github.com/damianvigo/sitio-netflix'><i
                className='fab fa-github cards-filter__container-icon--icon'></i></a>
            </div>
          </figure>
          <figure className='cards-filter__card' data-description='Perfil de usuario - HTML5(PUG) - CSS3'>
            <img className='cards-filter__img' src={sitioGeekJohnWick} loading='lazy'
              title='Perfil de usuario' alt='Maquetado web de un perfil de usuario' />
            <figcaption className='cards-filter__figcaption'>Maquetación</figcaption>
            <div className='cards-filter__container-icon'>
              <a target='_blank' rel='noopener' href='https://github.com/damianvigo/web-noticias'><i
                className='fab fa-github cards-filter__container-icon--icon'></i></a>
            </div>
          </figure>
          <figure className='cards-filter__card' data-description='Portal de noticas geek HTML5(PUG) - CSS3(Sass)'>
            <img className='cards-filter__img' src={sitioGeekSass} loading='lazy' title='Portal'
              alt='Maquetación web de Portal Geek de noticias' />
            <figcaption className='cards-filter__figcaption'>Maquetación</figcaption>
            <div className='cards-filter__container-icon'>
              <a href='https://github.com/damianvigo/web-noticias' target='_blank' rel='noopener'><i
                className='fab fa-github cards-filter__container-icon--icon'></i></a>
            </div>
          </figure>
          <figure className='cards-filter__card' data-description='Blog Post - HTML5(PUG) - CSS3(Less)'>
            <img className='cards-filter__img' src={sitioGeekLess} loading='lazy' title='Blog Post'
              alt='Maquetado de un blog geek informativo' />
            <figcaption className='cards-filter__figcaption'>Maquetación</figcaption>
            <div className='cards-filter__container-icon'>
              <a href=''><i className='fab fa-github cards-filter__container-icon--icon'></i></a>
            </div>
          </figure>
          <figure className='cards-filter__card' data-description='Formulario en Materialize CSS'>
            <img className='cards-filter__img' src={materializeForm} loading='lazy' title='Formulario'
              alt='Formulario en Materialize' />
            <figcaption className='cards-filter__figcaption'>Maquetación</figcaption>
            <div className='cards-filter__container-icon'>
              <a target='_blank' rel='noopener' href='https://github.com/damianvigo/blog-materialize'><i
                className='fab fa-github cards-filter__container-icon--icon'></i></a>
            </div>
          </figure>
          <figure className='cards-filter__card' data-description='E-commerce - HTML5 - CSS3(Bootstrap)'>
            <img className='cards-filter__img' src={tiendaBoostrap} loading='lazy' title='E-commerce'
              alt='Maquetación web de una tienda online' />
            <figcaption className='cards-filter__figcaption'>Maquetación</figcaption>
            <div className='cards-filter__container-icon'>
              <a target='_blank' rel='noopener' href='https://github.com/damianvigo/Tienda-Bootstrap'><i
                className='fab fa-github cards-filter__container-icon--icon'></i></a>
            </div>
          </figure>
          <figure className='cards-filter__card' data-description='Búsqueda - HTML5(PUG) - CSS3(Stylus)'>
            <img className='cards-filter__img' src={sitioGeekStylus} loading='lazy'
              title='Búsqueda' alt='Maquetado web de un resultado de búsqueda de una web de tecnología' />
            <figcaption className='cards-filter__figcaption'>Maquetación</figcaption>
            <div className='cards-filter__container-icon'>
              <a target='_blank' rel='noopener' href='https://github.com/damianvigo/web-stylus'><i
                className='fab fa-github cards-filter__container-icon--icon'></i></a>
            </div>
          </figure>
          <figure className='cards-filter__card' data-description='Diseño de una web en construcción, realizado en photoshop'>
            <img className='cards-filter__img' src={electronica} loading='lazy'
              title='Web en construcción' alt='Web con temática de música electrónica en construcción' />
            <figcaption className='cards-filter__figcaption'>Diseño</figcaption>
          </figure>
          <figure className='cards-filter__card'
            data-description='Dibujo realizado en photoshop, utilizando las respectivas leyes de Gestalt'>
            <img className='cards-filter__img' src={gatoLineasPlanos} loading='lazy' title='Dibujo'
              alt='Boceto de un gato siamés dibujado en photoshop solo con lineas y planos' />
            <figcaption className='cards-filter__figcaption'>Diseño</figcaption>
          </figure>
          <figure className='cards-filter__card'
            data-description='Dibujo realizado en photoshop, utilizando las respectivas leyes de Gestalt'>
            <img className='cards-filter__img' src={gatoPlanoBlancoYNegro} loading='lazy' title='Dibujo'
              alt='Boceto de un gato siamés dibujado en photoshop solo con lineas y planos' />
            <figcaption className='cards-filter__figcaption'>Diseño</figcaption>
          </figure>
        </article>
      </section>
    </>
  );

};

export default ProyectsComponent;
