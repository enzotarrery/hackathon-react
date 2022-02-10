import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/help" className='button'>Aide</Link>
            <Link to="/logout" className='button button--primary'>Inscription</Link>
            <Link to="/login" className='button'>Connexion</Link>
        </header>
    );
}

export default Header;