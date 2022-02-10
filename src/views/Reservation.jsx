import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import CourseForm from './CourseForm';

const Reservation = () => {

    /* Routes */
    const params = useParams();

    /* States */
    const [ instructor, setInstructor ] = useState({});

    /* Functions */
    const getData = () => {
        fetch('/api/users?instructorUserId=' + params.id)
            .then((response) => response.json())
            .then((response) => setInstructor(response[0]))
            .catch((error) => console.warn(`ERROR (${error.code}) : ${error.message}.`));
    }

    /* Hooks */
    useEffect(() => {
        /* We fetch the data related to the instructor */
        getData();
    }, []);

    /* Render */
    return (
        <section className='reservation'>
            <h2 className='title reservation__title'>Réservation d'un cours avec { `${ instructor.firstName } ${ instructor.lastName }` }</h2>
            
            <figure className='instructor'>
                <img className='instructor__avatar' src="" alt="Instructor's avatar" />
                <figcaption className='instructor__info'>
                    <header className='instructor__header'>
                        <h2 className='title intructor__name'>{ `${ instructor.firstName } ${ instructor.lastName }` }</h2>
                        <h3 className='subtitle instructor__neighbourhood'>Quartier</h3>
                    </header>
                    <section className='instructor__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis pariatur adipisci ea, fugiat rem est exercitationem. Necessitatibus error quaerat autem iste quis quisquam facilis, temporibus itaque animi nisi. Excepturi, blanditiis.</section>
                </figcaption>
            </figure>

            <CourseForm instructorId={ params.id } />
        </section>
    );
}

export default Reservation;