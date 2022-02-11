import React from "react";
import MonteurImg from "../assets/images/karl-platforme-moniteur.png";
import pubOne from "../assets/images/pub_1.png";
import pubTwo from "../assets/images/pub2.png";

const Home = () => {
  return (
    <div className="home-main">
      <div className="home">
        <div className="home__presentation">
          <h1 className="home__title">
            Trouve ton moniteur <br />
            près de chez toi
          </h1>
          <h3 className="home__subtitle">
            Accédez rapidement aux disponibilités de tous vos moniteurs, <br />{" "}
            fais ton choix parmi nos professionnel agréés !
          </h3>
          <ul>
            <li>
              <i class="fa-solid fa-user-secret"></i>
              <span className="home__pub">Paiement sécurisé</span>
            </li>
            <li>
              <i class="fa-solid fa-check"></i>
              <span className="home__pub">Super moniteurs</span>
            </li>
            <li>
              <i class="fa-solid fa-star"></i>
              <span className="home__pub home__pub-last-child">
                Cursus adapté
              </span>
            </li>
          </ul>
          <div className="home__search">
            <input type="text" className="home__input" />
            <button className="button button--primary">Rechercher</button>
          </div>
        </div>
        <div className="home--card">
          <h3 className="home--card__title">Carl Benz</h3>
          <span className="separate"></span>
          <div className="home--card__body">
            <img src={MonteurImg} alt="karl platforme moniteur" />
          </div>
          <div className="home--card__localisation">
            <i class="fa-solid fa-location-dot"></i>
            <span className="home--card__text">QUARTIER : Minimes</span>
          </div>
          <div className="home--card__presentation">
            <i class="fa-solid fa-user"></i>
            <span className="home--card__text">Hello, moi c’est Carl</span>
          </div>
        </div>
      </div>
      <div className="home__pubone">
        <img src={pubOne} alt="pub one" />
      </div>
      <div className="home__pubone">
        <img src={pubTwo} alt="pub Two" />
      </div>
    </div>
  );
};

export default Home;
