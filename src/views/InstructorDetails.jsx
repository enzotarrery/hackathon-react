import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development';

const InstructorDetails = () => {

  /* Routes */
  const params = useParams();

  /* States */
  const [ instructor, setInstructor ] = useState({});

  /* Functions */
  const getData = () => {
    fetch('http://localhost:8080/api/users?id=' + params.id)
      .then((response) => response.json())
      .then((response) => setInstructor(response[0]))
      .catch((error) => console.warn(`ERROR (${error.code}) : ${error.message}.`));
  }

  /* Hooks */
  useEffect(() => {
    /* We fetch the data related to one instructor (by id) */
    getData();
  });

  /* Render */
  return (
    <section className='instructor-details'>
      <h2 className='title'>{ `${ instructor.lastName } ${ instructor.firstName }` }</h2>
    </section>
  );
}

export default InstructorDetails;