import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../App'




const Profile = (props) => {

    //const [state, actions] = useContext(AuthContext)

    const getData = () => {
        fetch('http://localhost:8080/api/places')
            .then((response) => response.json())
            .then((response) => setPlaces(response))
            .catch((error) => console.warn(`ERROR (${error.code}) : ${error.message}.`));
    }

    //HOOKS
    const [firstName, setFirstName] = useState(props.loggedUser.firstName)
    const [lastName, setlastName] = useState(props.loggedUser.lastName)
    const [email, setEmail] = useState(props.loggedUser.email)
    const [password, setPassword] = useState(props.loggedUser.password)
    const [favoritePlaces, setFavoritePlaces] = useState(props.loggedUser.favoritePlacesId)
    const [places, setPlaces] = useState([])
    use

    useEffect(() => {
        getData()
    }, [])

    //HANDLERS

    const handlePlaceChange = (e) => {
        var options = e.target.options;
        var favoritePlaces = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                favoritePlaces.push(options[i].value);
            }
        }
        setFavoritePlaces(favoritePlaces)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        /*
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(e.target.value)
        };
        fetch('http://localhost:8080/api/', requestOptions)
            .then(res => {
                if (res.ok) {

                }
                else {

                }
            })
            */
    }

    return (
        <section style={{ display: "flex" }
        }>

            <div className='firstCol'>
                <h1>Mon profil</h1>
                <img style={{ borderRadius: "50%", height: "250px", width: "250px" }} src={props.loggedUser.picture ? props.loggedUser.picture : "/img/default_pp.jpg"} alt="" />
                <button>Changer de photo</button>
                <button disabled={!props.loggedUser.picture}>Supprimer la photo</button>
            </div>


            <form className='secondCol' onSubmit={handleSubmit}>
                <label htmlFor="firstName">Prénom</label>
                <input type="text" name='firstName' id='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} />
                <label htmlFor="lastName">Nom</label>
                <input type="text" name='lastName' id='lastName' value={lastName} onChange={e => setlastName(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input type="mail" name='email' id='email' value={email} onChange={e => setEmail(e.target.value)} />
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name='password' id='password' value={password} onChange={e => setPassword(e.target.value)} />
                <select onChange={handlePlaceChange} name="place" id="place" multiple={true} value={favoritePlaces}>
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