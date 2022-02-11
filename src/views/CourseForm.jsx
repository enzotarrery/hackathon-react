import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react/cjs/react.development';
import { AuthContext } from '../App'

const CourseForm = (props) => {

    /* Context */
    const [ state, actions ] = useContext(AuthContext);

    /* Routes */
    const navigate = useNavigate();

    /* States */
    const [ courses, setCourses ] = useState([]);
    const [ data, setData ] = useState(null);

    /* Functions */
    const getData = () => {
        fetch('/api/sessions?studentUserId=none&instructorUserId=' + props.instructorId)
            .then((response) => response.json())
            .then((response) => setCourses(response))
            .catch((error) => console.warn(`ERROR (${error.code}) : ${error.message}.`));
    }

    const handleChange = (event) => {
        let course = courses.find((course) => course.id === Number(event.target.value));
        course.studentUserId = state.user.id;
        console.log(course);
        setData(course);
    }

    const handleSubmit = (event) => {
        /* To prevent a reload */
        event.preventDefault();

        /* We post the data */
        fetch(`http://localhost:8080/api/sessions/${ data.id }`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        });

        /* We go to homepage */
        navigate('/');

    }

    useEffect(() => {
        /* We fetch the data needed to choose a course available */
        getData();
    }, []);

    return (
        <form className='form course-form' onSubmit={ handleSubmit }>
            <select className='select course-form__select' name="course" onChange={ handleChange }>
                <option value="">-- Veuillez choisir un cours disponible --</option>
                {
                    courses.map((course) => <option
                            key={ course.id }
                            value={ course.id }
                        >
                            { `Le ${ new Date(course.dateStart).toLocaleDateString('fr') }, de ${ new Date(course.dateStart).toLocaleTimeString('fr') } à ${ new Date(course.dateEnd).toLocaleTimeString('fr') }` }
                        </option>
                    )
                }
            </select>
            <input className='button button--outline course-form__button' type="submit" value="Réserver mon cours" />
        </form>
    );
}

export default CourseForm;