import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/404.svg';

const NotFound = () => {

  return (<section className='notFound'>
    <img className='notFound__image' src={image} alt="404 image" />
    <Link to="/">
      <p className='notFound__link button button--outline'>Retour à l'accueil</p>
    </Link>
  </section>
  );
}

export default NotFound
