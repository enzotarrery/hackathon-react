import React from "react";

const Home = () => {
  return (
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
        <div className="home--card__body"></div>
        <p className="home--card__localisation">QUARTIER : Minimes</p>
        <p className="home--card__presentation">Hello, moi c’est Carl </p>
      </div>
    </div>
  );
};

export default Home;
