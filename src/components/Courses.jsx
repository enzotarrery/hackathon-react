import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import Course from './Course';

const Courses = () => {

    /* States */
    const [ courses, setCourses ] = useState([]);

    /* Functions */
    const getData = () => {
        fetch('http://localhost:8080/api/courses')
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
            <h3 className='title title--secondary'>Evènements à venir</h3>
            <table className='table events__list'>
                <tbody className='table__content'>
                    {
                        courses.map((event) =>
                            <Course
                                key={ event.id }
                                data={ event }
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