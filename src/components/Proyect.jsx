import React from 'react';

const Proyect = ({ link, img, title, alt, card_title, description, github, code }) => {

  return (
    <article className='card'>
      <a className='card__card-link' href={link} target='_blank' rel='noopener'>
        <figure className='card__card-figure'>
          <img loading='lazy' className='card__card-img' src={img} loading='lazy'
            alt={alt} title={title} />
        </figure>
      </a>
      <h2 className='card-title'>{card_title}</h2>
      <p className='card-description'>
        {description}
      </p>
      <a href={github} target='_blank' rel='noopener' title='github'
        className='card-code'>{code}</a>
    </article>
  );
};

export default Proyect;
