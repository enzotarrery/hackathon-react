import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';

const Search = (props) => {

    /* States */
    const [ data, setData ] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ visible, setVisible ] = useState(false);

    /* Functions */
    const getData = () => {
        fetch('/api/' + props.type)
            .then((response) => response.json())
            .then((response) => setData(response))
            .catch((error) => console.warn(`ERROR (${error.code}) : ${error.message}.`));
    }

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleFocus = (event) => {
        setVisible(true);
    }

    const handleBlur = (event) => {
        setVisible(false);
    }

    /* Hooks */
    useEffect(() => {
        /* We get the data needed for the search */
        getData();
    }, []);

    /* Render */
    return (
        <section className='search'>
            <input
                type="text"
                className='search__bar'
                value={ search }
                onChange={ handleChange }
                onFocus={ handleFocus }
                onBlur={ handleBlur }
            />
            <ul className={ `dropdown search__list ${ !visible ? 'hidden' : '' }` }>
                {
                    data
                        .filter((item) => item.name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        )
                        .map((item) => <li
                            key={ item.id }
                        >
                            { item.name }
                        </li>
                    )
                }
            </ul>
        </section>
    );
}

export default Search;