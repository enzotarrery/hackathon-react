import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
          <Link to='/legals'>Mentions légales</Link>
          <Link to='/privacy'>Politique de Confidentialité</Link>
        </footer>
    );
}

export default Footer;