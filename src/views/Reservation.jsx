import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react/cjs/react.development';
import { AuthContext } from '../App';
import Instructor from '../components/Instructor';
import CourseForm from './CourseForm';

const Reservation = () => {

    /* Context */
    const [ state, actions ] = useContext(AuthContext);

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
        <>
            {
                state.loading && !state.user && <Navigate to='/login' />
            }
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
        </>
    );
}

export default Reservation;