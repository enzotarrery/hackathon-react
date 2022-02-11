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
              <p>Elève 1</p>
              <span className="progression progression-1"></span>
              </div>
              <div className="dashboard-courses-bloc__students">
              <p>Elève 2</p>
              <span className="progression progression-1"></span>
              </div>
              <div className="dashboard-courses-bloc__students">
              <p>Elève 3</p>
              <span className="progression progression-1"></span>
              </div>
              <div className="dashboard-courses-bloc__students">
              <p>Elève 4</p>
              <span className="progression progression-1"></span>
              </div>
              <div className="dashboard-courses-bloc__students">
              <p>Elève 5</p>
              <span className="progression progression-1"></span>
              </div>
              <a className="dashboard-courses-bloc__button button button--tchat">voir tous les cours</a>
          </article>
          
      </section>
    );
  }
  
  export default CoursesIndex;