import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';
import Instructor from './Instructor';

const Instructors = () => {

    /* States */
    const [ instructors, setInstructors ] = useState([]);
    const [ tag, setTag ] = useState('all');

    /* Functions */
    const getData = () => {
        fetch('http://localhost:8080/api/users?role=instructor')
            .then((response) => response.json())
            .then((response) => setInstructors(response))
            .catch((error) => console.warn(`ERROR (${error.code}) : ${error.message}.`));
    }

    const handleClick = (event) => {
        console.log(event.target);
        setTag(event.target.id);
    }

    /* Hooks */
    useEffect(() => {
        /* We fetch the data related to the instructors */
        getData();
    }, []);

    /* Render */
    return (
        <section className='instructors'>
            <ul className="tags">
                <li id='all' className={ `tag ${tag === 'all' ? 'tag--active' : ''}` } onClick={ handleClick }>
                    Tous
                </li>
                <li id='availables' className={ `tag ${tag === 'availables' ? 'tag--active' : ''}` } onClick={ handleClick }>
                    Disponibles
                </li>
            </ul>
            <input type="text" className='searchbar' />
            <ul className='instructors__list'>
                {
                    tag === 'all' && instructors.map((instructor) =>
                        <Instructor
                            key={ instructor.id }
                            instructor={ instructor }
                        />
                    )
                }
                {
                    tag === 'availables' && instructors
                        .filter((instructor) => instructor.isAvailable)
                        .map((instructor) =>
                            <Instructor
                                key={ instructor.id }
                                instructor={ instructor }
                            />
                    )
                }
            </ul>
        </section>
    );
}

export default Instructors