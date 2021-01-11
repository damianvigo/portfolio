import React from 'react';
import '../assets/styles/components/Cite.scss';

const Cite = () => {
  return (
    <div className='cite-container'>
      <article className='cite-container__cite'>
        <h2 className='cite-container__davinci'>
          « La simplicidad es la máxima sofisticación »
          <cite>Leonardo Da Vinci</cite>
        </h2>
      </article>
    </div>
  );
};

export default Cite;
