import React from 'react';
import image from '../assets/images/photo-equipe.jpg'

const About = () => {

  return (<section className='about'>
    <figure className='about__imageContainer'>
      <img className='about__image' src={image} alt="l'équipe de Carl" />
    </figure>
    <section className='about__description'>
      <h1 className='about__title title title--little'>Qui sommes-nous ?</h1>
      <h2 className='about__title title title--big'>L'équipe</h2>
      <p className='about__content'>Nous sommes sept étudiants aux parcours différents, qui nous sommes retrouvés sur les bancs de la fac. </p>
      <p className='about__content about__content--grey'>Quatre développeurs et trois webdesigners travaillant ensemble, dans la joie et la bonne humeur !</p>
    </section>
  </section>
  );
}

export default About
