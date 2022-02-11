import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__container">
        <li>
          <Link to="/dashboard" className="navigation__item">
            <img
              className="navigation__picto"
              src="/img/pictos/accueil.svg"
              alt=""
            />
            <span>Accueil</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/account" className="navigation__item">
            <img
              className="navigation__picto"
              src="/img/pictos/profile.svg"
              alt=""
            />
            <span>Profil</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/courses" className="navigation__item">
            <img
              className="navigation__picto"
              src="/img/pictos/planning.svg"
              alt=""
            />
            <span>Planning</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/tchat" className="navigation__item">
            <img
              className="navigation__picto"
              src="/img/pictos/message.svg"
              alt=""
            />
            <span>Messagerie</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
