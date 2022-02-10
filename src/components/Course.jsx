import React from 'react'

const Course = (props) => {
    return (
        <tr className='table__row'>
            <td className='table__cell'>
                Cours { props.data.id }
            </td>
            <td className='table__cell'>
                { props.data.dateStart }
            </td>
        </tr>
    );
}

export default Course;