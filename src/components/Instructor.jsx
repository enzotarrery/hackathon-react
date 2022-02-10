import React from 'react'
import instructor from '../assets/images/instructor.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';

const Instructor = (props) => {

    /* Render */
    return (
        <li className='instructors__list-item'>
            <figure className='instructor'>
                <img className='instructor__avatar' src={ instructor } alt="Instructor's avatar" />
                <figcaption className='instructor__info'>
                    <header className='instructor__header'>
                        <h2 className='instructor__name'>{ `${ props.data.firstName } ${ props.data.lastName }` }</h2>
                    </header>
                    <section className='instructor__content'>
                        <p className='instructor__line'>
                            <FontAwesomeIcon icon={ faLocationDot } />
                            Quartier : 
                        </p>
                        <p className='instructor__line'>
                            <FontAwesomeIcon icon={ faUserLarge } />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, velit beatae. Tempore dicta aliquid dolorem.
                        </p>
                    </section>
                </figcaption>
            </figure>
        </li>
    );
}

export default Instructor