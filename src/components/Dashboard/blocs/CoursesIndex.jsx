import { Link } from "react-router-dom";

const CoursesIndex = () => {
  return (
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
          to="/courses"
          className="dashboard-courses-bloc__button button button--tchat"
        >
          Tous les cours
        </Link>
      </article>
    </section>
  );
};

export default CoursesIndex;
