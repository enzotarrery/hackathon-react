import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react/cjs/react.development';
import { AuthContext } from '../App';
import Course from './Course';
import Table from './Table';

const Courses = () => {

    /* Variables */
    const today = new Date();

    /* Context */
    const [ state, actions ] = useContext(AuthContext);

    /* States */
    const [ courses, setCourses ] = useState([]);

    /* Functions */
    const getData = () => {
        fetch(`/api/sessions?${ state.user.role }UserId=${ state.user.id }`)
            .then((response) => response.json())
            .then((response) => setCourses(response))
            .catch((error) => console.warn(`ERROR (${error.code}) : ${error.message}.`));
    }

    /* Hooks */
    useEffect(() => {
        /* We fetch the data related to the events incoming */
        if (!state.loading && state.user) getData();
    }, []);

    /* Render */
    return (
        <>
            <section className='events'>
                <h3 className='title events__title'>Cours à venir</h3>
                <table className='events__list'>
                    <tbody className='events__content'>
                        {
                            !state.loading && state.user && courses
                                .filter((course) => new Date(course.dateStart) >= today)
                                .map((course) =>
                                    <Course
                                        key={ course.id }
                                        data={ course }
                                    />
                                )
                        }
                    </tbody>
                </table>
                <Link to='/courses/add' className='button button--primary'>Ajouter un nouveau cours</Link>
            </section>

            <Table
                data='courses'
            />
        </>
    );
}

export default Courses;