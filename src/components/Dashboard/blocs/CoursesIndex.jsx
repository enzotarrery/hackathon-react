import { Link } from "react-router-dom";

const CoursesIndex = () => {
  return (
    <div className="dashboard-courses">
      <section className="dashboard-courses-bloc">
        <h2 className="dashboard-courses-bloc__title">Cours à venir</h2>
        <article className="dashboard-courses-bloc__card">
          <div className="dashboard-courses-bloc__titles">
            <h2>Elèves</h2>
            <h2>Progression</h2>
          </div>
          <span className="division"></span>
          <div className="dashboard-courses-bloc__students">
            <p>Franck</p>
            <div
              className="w3-grey"
              style={{
                height: "24px",
                width: "20%",
                textAlign: "center",
                padding: ".5rem",
              }}
            >
              20%
            </div>
          </div>
          <div className="dashboard-courses-bloc__students">
            <p>Charles</p>
            <div
              className="w3-grey"
              style={{
                height: "24px",
                width: "40%",
                textAlign: "center",
                padding: ".5rem",
              }}
            >
              40%
            </div>
          </div>
          <div className="dashboard-courses-bloc__students">
            <p>Aline</p>
            <div
              className="w3-grey"
              style={{
                height: "24px",
                width: "40%",
                textAlign: "center",
                padding: ".5rem",
              }}
            >
              30%
            </div>
          </div>
          <div className="dashboard-courses-bloc__students">
            <p>Steve</p>
            <div
              className="w3-grey"
              style={{
                height: "24px",
                width: "40%",
                textAlign: "center",
                padding: ".5rem",
              }}
            >
              10%
            </div>
          </div>
          <div className="dashboard-courses-bloc__students">
            <p>Stan</p>
            <div
              className="w3-grey"
              style={{
                height: "24px",
                width: "40%",
                textAlign: "center",
                padding: ".5rem",
              }}
            >
              40%
            </div>
          </div>
          <Link
            to="courses"
            className="dashboard-courses-bloc__button button button--tchat"
          >
            Tous les cours
          </Link>
        </article>
      </section>
      <div className="dashboard-courses-bloc__side-blocs">
        <section className="dashboard-courses-bloc">
          <h2 className="dashboard-courses-bloc__title">Total paiement du jour</h2>
          <article className="dashboard-courses-bloc__card">
            <div className="dashboard-courses-bloc__titles dashboard-courses-bloc__titles--paiement">
              <h2 className="dashboard-courses-bloc__paiement">256€</h2>
            </div>
            <img className="dashboard-courses-bloc__arrow" src="/img/pictos/arrow.svg" alt="" />
            <div
              className="w3-grey--paiement"
              style={{
                height: "16px",
                textAlign: "center",
                padding: ".5rem",
              }}
            >
            </div>
            <h2 className="dashboard-courses-bloc__paiement" style={{ textAlign: "right", paddingRight: "25px" }}>400€</h2>
          </article>
        </section>
        <section className="dashboard-courses-bloc">
          <h2 className="dashboard-courses-bloc__title">Historique des paiements</h2>
          <article className="dashboard-courses-bloc__card">
            <div className="dashboard-courses-bloc__titles dashboard-courses-bloc__titles--paiement">
              <div className="dashboard-courses-bloc__students" style={{ width: "100%" }}>
                <p>Franck <span className="dashboard-courses-bloc__date">03 SEPTEMBRE 2021</span></p>
                <h2 className="dashboard-courses-bloc__paiement">80€</h2>
              </div>
            </div>
            <div className="dashboard-courses-bloc__titles dashboard-courses-bloc__titles--paiement">
              <div className="dashboard-courses-bloc__students" style={{ width: "100%" }}>
                <p>Charles <span className="dashboard-courses-bloc__date">04 SEPTEMBRE 2021</span></p>
                <h2 className="dashboard-courses-bloc__paiement">40€</h2>
              </div>
            </div>
            <div className="dashboard-courses-bloc__titles dashboard-courses-bloc__titles--paiement">
              <div className="dashboard-courses-bloc__students" style={{ width: "100%" }}>
                <p>Aline <span className="dashboard-courses-bloc__date">05 SEPTEMBRE 2021</span></p>
                <h2 className="dashboard-courses-bloc__paiement">120€</h2>
              </div>
            </div>
            <Link
              to="courses"
              className="dashboard-courses-bloc__button button button--tchat"
            >Tous les paiements</Link>
          </article>
        </section>
      </div>
    </div >
  );
};

export default CoursesIndex;
