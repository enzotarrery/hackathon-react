import React from 'react'

const Course = (props) => {
    return (
        <tr className='event'>
            <td className='event__data'>
                Cours { props.data.id }
            </td>
            <td className='event__data'>
                { `${ new Date(props.data.dateStart).getHours() }h - ${ new Date(props.data.dateEnd).getHours() }h` }
            </td>
        </tr>
    );
}

export default Course;