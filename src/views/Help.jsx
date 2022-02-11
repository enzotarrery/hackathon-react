import React from 'react';

const Help = () => {
  return (
    <div className='content'>
      <h1 className="home__title--page">
        Comment ça marche CARL ?
      </h1>
      <section className="home">
        <div className="home__presentation">
          <h2 className="home__title--section">
            <span>Organisez</span> <br />
            tout votre travail sur une seule plateforme
          </h2>
          <h3 className="home__subtitle">
            1- Inscrivez-vous sur la plateforme en quelques clics,<br /> puis commencez votre recherche de cours dans toute <br />La Rochelle.
          </h3>
        </div>
        <div className="home--card">
          <img className="home--card__img" src="/img/permis.png" alt='fakeImg' />
        </div>
      </section>

      <section className="home revert">
        <div className="home--card ">
          <span className="separate"></span>
          <div className="home--card__body">
            <img className="home--card__img" src="/img/instruct.jpg" alt='fakeImg' />
          </div>
        </div>
        <div className="home__presentation revert">
          <h2 className="home__title--section">
            <span>Gagnez</span><br />
            Du temps en obtenant un rendez-vous en quelques clics
          </h2>
          <h3 className="home__subtitle">
            2-  Une fois que vous avez trouvé un moniteur d’auto-école inscrivez-vous directement sur leur planning puis valider votre horaire
          </h3>
        </div>
      </section>
      <section className="home">
        <div className="home__presentation">
          <h2 className="home__title--section">
            <span>Organisez</span> <br />
            tout votre travail sur une seule plateforme
          </h2>
          <h3 className="home__subtitle">
            3- Puis rendez-vous sur le lieu de votre cours pour une leçon de conduite. Une fois  terminé vous pouvez directement prendre un rendez-vous sur la plateforme ou essayer un autre moniteur d’auto école
          </h3>
        </div>
        <div className="home--card">
          <span className="separate"></span>
          <div className="home--card__body">
            <img className="home--card__img" src="/img/ope.jpg" alt='fakeImg' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;