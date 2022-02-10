import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import Course from './Course';

const Courses = () => {

    /* Variables */
    const today = new Date();

    /* Routes */
    const params = useParams();

    /* States */
    const [ courses, setCourses ] = useState([]);

    /* Functions */
    const getData = () => {
        fetch('/api/sessions?instructorUserId=' + params.id)
            .then((response) => response.json())
            .then((response) => setCourses(response))
            .catch((error) => console.warn(`ERROR (${error.code}) : ${error.message}.`));
    }

    /* Hooks */
    useEffect(() => {
        /* We fetch the data related to the events incoming */
        getData();
    }, []);

    /* Render */
    return (
        <section className='events'>
            <h3 className='title title--secondary'>Cours à venir</h3>
            <table className='table events__list'>
                <tbody className='table__content'>
                    {
                        courses
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
            <Link to='/courses/add' className='button button--events'>Ajouter un nouveau cours</Link>
        </section>
    );
}

export default Courses;