import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_carl_blanc.svg'

const Footer = () => {
    return (
        <footer className='footer'>
          <section className='footer__content'>
            <img src={logo} alt="Carl logo" className='footer__logo' />
            <section className='footer__columns'>
              <h3 className='footer__colTitle'>Site</h3>
              <Link to='/help'> <p className='footer__link'>Aide</p> </Link>
              <Link to='/courses'> <p className='footer__link'>Donner des cours</p> </Link>
              <Link to='/register'> <p className='footer__link'>Inscription</p> </Link>

            </section>
            <section className='footer__columns'>
              <h3 className='footer__colTitle'>Contact</h3>
              <a className='footer__link' href='mailto:contact@carl.com'>contact@carl.com</a>
              <Link to='/contact'> <p className='footer__link'>Nous contacter</p> </Link>
            </section>
            <section className='footer__columns footer__columns--inRow'>
              <h3 className='footer__colTitle'>Réseau sociaux</h3>
            </section>
          </section>
          <div className='footer__separator'></div>
          <section className='footer__legals'>
            <Link to='/legals'><p className='footer__link footer__link--inRow'>Mentions légales</p></Link>
            <Link to='/privacy'><p className='footer__link footer__link--inRow'>Politique de Confidentialité</p></Link>
          </section>
        </footer>
    );
}

export default Footer;