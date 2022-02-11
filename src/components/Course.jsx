import React from 'react'

const Course = (props) => {
    return (
        <tr className='event table__row'>
            <td className='event__data table__cell'>
                Cours { props.data.id }
            </td>
            <td className='event__data table__cell'>
                { `${ new Date(props.data.dateStart).getHours() }h - ${ new Date(props.data.dateEnd).getHours() }h` }
            </td>
        </tr>
    );
}

export default Course;