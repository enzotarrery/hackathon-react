import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../App'

const Profile = () => {
    const getPlaces = () => {
        fetch('http://localhost:8080/api/places')
            .then((response) => response.json())
            .then((response) => setPlaces(response))
            .catch((error) => console.warn(`ERROR (${error.code}) : ${error.message}.`));
    }

    //HOOKS

    const [state, actions] = useContext(AuthContext)

    let loggedUser = {}
    if (state.user) {
        loggedUser = state.user
    }
    else {
        loggedUser = {
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
    }


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
            }
            )
    }


    return (
        <section className={loggedUser.role === "student" ? "profile" : "profile profile--dark"}>
            <h1 className='profile__title'>Mon profil</h1>
            <main className="profile__main">
                <div className='profile__header'>
                    <img className='profile__profil-picture' src={loggedUser.picture ? loggedUser.picture : "/img/default_pp.jpg"} alt="" />
                    <button className='button profile__btn-photo'>Changer de photo</button>
                    <button className='button profile__btn-photo profile__btn-photo--disabled' disabled={!loggedUser.picture}>Supprimer la photo</button>
                </div>


                <form className={loggedUser.role === "student" ? "profile__form" : "profile__form profile__form--dark"} onSubmit={handleSubmit}>
                    <fieldset className='profile__form-group'>
                        <legend className='profile__subtitle'>Informations générales</legend>
                        <input className='profile__input' type="text" name='firstName' id='firstName' value={formState.firstName} onChange={handleFormChange} />
                        <input className='profile__input' type="text" name='lastName' id='lastName' value={formState.lastName} onChange={handleFormChange} />
                        <input className='profile__input' type="mail" name='email' id='email' value={formState.email} onChange={handleFormChange} />
                        <input className='profile__input' type="password" name='password' id='password' value={formState.password} onChange={handleFormChange} />
                    </fieldset>

                    <fieldset className='profile__form-group'>
                        <legend className='profile__subtitle'>Vos lieux favoris</legend>
                        <select className='profile__input profile__input--select' onChange={handlePlaceChange} name="place" id="place" multiple={true} value={formState.favoritePlacesId}>
                            {places.map(place => {
                                return (
                                    <option className='profile__options' key={place.id} value={place.id}>{place.name}</option>
                                )
                            })}
                        </select>
                        <button className={loggedUser.role === "student" ? "button profile__submit" : "button profile__submit profile__submit--dark"} type="submit">Valider</button>
                    </fieldset>
                </form>
            </main>
        </section>
    );
};


export default Profile;