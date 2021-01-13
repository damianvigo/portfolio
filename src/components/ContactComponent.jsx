import React, { useEffect } from 'react';
import '../assets/styles/components/Contact.scss';

import ball from '../assets/static/icon/ball-triangle.svg';

import contactForm from '../containers/contactForm';

const ContactComponent = () => {

  useEffect(() => {
    contactForm();
  });

  return (
    <>
      <div className='fix-sticky'></div>
      <section className='contact'>
        <article className='contact__container-title'>
          <h2 className='contact__title'>Contacto</h2>
        </article>
        <div className='form-background'>
          <div className='form-background__transparent'>
            <form className='contact-form'>
              <input type='text' name='name' title='El nombre sólo acepta letras y espacios en blanco'
                className='contact-form__text' placeholder='Tu nombre' autoFocus required
                pattern='^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$' />
              <input type='email' name='email' title='Email incorrecto' required className='contact-form__text'
                placeholder='Tu email' pattern='^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$' />
              <input type='text' name='subject' required title='El Asunto es requerido' className='contact-form__text'
                placeholder='Asunto' />
              <textarea name='comments' cols='50' rows='10' className='contact-form__text contact-form__textarea'
                placeholder='Tu comentario' title='Tu comentario no debe exceder los 255 caracteres'
                data-pattern='^.{1,255}$' required></textarea>
              <input type='submit' className='contact-form__btn' value='Envíar' />
              <div className='contact-form__loader none'>
                <img src={ball} alt='Cargando' />
              </div>
              <div className='contact-form__response none'>
                <p>¡Gracias por comunicarte! A la brevedad me estaré contactando contigo 👨‍💻</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactComponent;
