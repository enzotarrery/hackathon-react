import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../App'
import '../assets/scss/modules/_profile.scss'




const Profile = () => {
    const loggedUser = {
        "id": 0,
        "firstName": "Brian",
        "lastName": "Bruneau",
        "email": "noemiebenoit@hotmail.com",
        "password": "2Charlotte90",
        "favoritePlacesId": [2, 6],
        "favoriteInstructorsId": [],
        "instructorInfos": {
            "car": "/img/ope.jpg"
        },
        "isAvailable": false,
        "role": "instructor"
    }

    const getPlaces = () => {
        fetch('http://localhost:8080/api/places')
            .then((response) => response.json())
            .then((response) => setPlaces(response))
            .catch((error) => console.warn(`ERROR (${error.code}) : ${error.message}.`));
    }

    const [state, actions] = useContext(AuthContext)
    const [places, setPlaces] = useState([])
    const [formState, setFormState] = useState(loggedUser)

    useEffect(() => {
        getPlaces()
    }, [])

    //HANDLERS


    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handlePlaceChange = (e) => {
        var options = e.target.options;
        var favoritePlaces = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                favoritePlaces.push(options[i].value);
            }
        }
        setFormState({
            ...formState,
            favoritePlacesId: favoritePlaces
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault()

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formState)
        };
        fetch('http://localhost:8080/api/users/' + formState.id, requestOptions)
            .then(res => {
                if (res.ok) {
                    console.log('Changed');
                }
                else {
                    console.log(res);
                }
            })
    }


    return (
        <section className='profile'>

            <div className='profile__header'>
                <h1>Mon profil</h1>
                <img style={{ borderRadius: "50%", height: "250px", width: "250px" }} src={loggedUser.picture ? loggedUser.picture : "/img/default_pp.jpg"} alt="" />
                <button>Changer de photo</button>
                <button disabled={!loggedUser.picture}>Supprimer la photo</button>
            </div>


            <form className='secondCol' onSubmit={handleSubmit}>
                <label htmlFor="firstName">Prénom</label>
                <input type="text" name='firstName' id='firstName' value={formState.firstName} onChange={handleFormChange} />
                <label htmlFor="lastName">Nom</label>
                <input type="text" name='lastName' id='lastName' value={formState.lastName} onChange={handleFormChange} />
                <label htmlFor="email">Email</label>
                <input type="mail" name='email' id='email' value={formState.email} onChange={handleFormChange} />
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name='password' id='password' value={formState.password} onChange={handleFormChange} />
                <select onChange={handlePlaceChange} name="place" id="place" multiple={true} value={formState.favoritePlacesId}>
                    {places.map(place => {
                        return (
                            <option key={place.id} value={place.id}>{place.name}</option>
                        )
                    })}
                </select>
                <button type="submit">Valider</button>
            </form>
        </section >
    );
};


export default Profile;