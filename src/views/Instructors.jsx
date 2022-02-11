import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';
import Instructor from '../components/Instructor';
import Search from '../components/Search';

const Instructors = () => {

    /* States */
    const [ instructors, setInstructors ] = useState([]);
    const [ tag, setTag ] = useState('all');
    const [ district, setDistrict ] = useState('');

    /* Functions */
    const getData = () => {
        fetch('/api/users?role=instructor')
            .then((response) => response.json())
            .then((response) => setInstructors(response))
            .catch((error) => console.warn(`ERROR (${error.code}) : ${error.message}.`));
    }

    const handleClick = (event) => {
        setTag(event.target.id);
    }

    const updateDistrict = (district) => {
        setDistrict(district);
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
            <Search
                type='places'
                onChange={ updateDistrict }
            />
            <ul className='instructors__list'>
                {
                    tag === 'all' && instructors
                        .filter((instructor) =>  district === '' ? true : instructor.district.toLowerCase().includes(district.toLowerCase()))
                        .map((instructor) =>
                            <li className='instructors__list-item'>
                                <Instructor
                                    key={ instructor.id }
                                    data={ instructor }
                                    buttons={ true }
                                />
                            </li>
                        )
                }
                {
                    tag === 'availables' && instructors
                        .filter((instructor) => (district === '' ? true : instructor.district.toLowerCase().includes(district.toLowerCase())) && instructor.isAvailable)
                        .map((instructor) =>
                            <li className='instructors__list-item'>
                                <Instructor
                                    key={ instructor.id }
                                    data={ instructor }
                                    buttons={ true }
                                />
                            </li>
                        )
                }
            </ul>
        </section>
    );
}

export default Instructors;