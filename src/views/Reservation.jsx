import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import Instructor from '../components/Instructor';
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
            
            <section className="reservation__content">
                <Instructor
                    data={ instructor }
                    buttons={ false }
                />

                <CourseForm instructorId={ params.id } />
            </section>
        </section>
    );
}

export default Reservation;