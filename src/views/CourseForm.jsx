import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';

const CourseForm = (props) => {

    /* States */
    const [ courses, setCourses ] = useState([]);
    const [ formData, setFormData ] = useState({
        id: null,

    });

    /* Functions */
    const getData = () => {
        fetch('/api/sessions?studentUserId=none&instructorUserId=' + props.instructorId)
            .then((response) => response.json())
            .then((response) => setCourses(response))
            .catch((error) => console.warn(`ERROR (${error.code}) : ${error.message}.`));
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [ event.target.name ]: event.target.value,
        });
    }

    const handleSubmit = (event) => {
        /* To prevent a reload */
        event.preventDefault();

        /* We post the data */
        fetch('/api/sessions', {
            method: 'PUT',
            headers: '',
            body: formData,
        });
    }

    useEffect(() => {
        /* We fetch the data needed to choose a course available */
        getData();
    }, []);

    return (
        <form className='form course-form' onSubmit={ handleSubmit }>
            <select className='select' name="course">
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
            <input className='button button--primary' type="submit" value="Réserver mon cours" />
        </form>
    );
}

export default CourseForm;