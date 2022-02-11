import React from 'react';

const Help = () => {
  return (
    <>
      <h1 className="home__title--page">
        Le titre h1
      </h1>
      <section className="home">
        <div className="home__presentation">
          <h2 className="home__title--section">
            Le titre de partie
          </h2>
          <h3 className="home__subtitle">
            Texte descriptif
          </h3>
        </div>
        <div className="home--card">
          <h3 className="home--card__title">My Card Title</h3>
          <span className="separate"></span>
          <div className="home--card__body">
            <img src="https://fakeimg.pl/300/" alt='fakeImg' />
          </div>
        </div>
      </section>

      <section className="home revert">
        <div className="home--card ">
          <h3 className="home--card__title">My Card Title</h3>
          <span className="separate"></span>
          <div className="home--card__body">
            <img src="https://fakeimg.pl/300/" alt='fakeImg' />
          </div>
        </div>
        <div className="home__presentation revert">
          <h2 className="home__title--section">
            Le titre de partie
          </h2>
          <h3 className="home__subtitle">
            Texte descriptif
          </h3>
        </div>
      </section>
      <section className="home">
        <div className="home__presentation">
          <h2 className="home__title--section">
            Le titre de partie
          </h2>
          <h3 className="home__subtitle">
            Texte descriptif
          </h3>
        </div>
        <div className="home--card">
          <h3 className="home--card__title">My Card Title</h3>
          <span className="separate"></span>
          <div className="home--card__body">
            <img src="https://fakeimg.pl/300/" alt='fakeImg' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Help;