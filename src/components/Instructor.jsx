import React from 'react'

const Instructor = (props) => {

    /* Render */
    return (
        <li className='instructors__list-item'>
            <figure className='instructor'>
                <img className='instructor__avatar' src="" alt="Instructor's avatar" />
                <figcaption className='instructor__info'>
                    <header className='instructor__header'>
                        <h2 className='title intructor__name'>{ `${ props.instructor.firstName } ${ props.instructor.lastName }` }</h2>
                        <h3 className='subtitle instructor__neighbourhood'>Mireuil</h3>
                    </header>
                    <section className='instructor__content'></section>
                </figcaption>
            </figure>
        </li>
    );
}

export default Instructor