import React, { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";

const Header = () => {
  const [displayDesk, setDisplayDesk] = useState(false);
  const [displayMob, setDisplayMob] = useState(false);

  const classButton = displayMob
    ? "fa-solid fa-bars button__mobile white"
    : "fa-solid fa-bars button__mobile";
  return (
    <header className="header">
      <div className="header__logo">LOGO</div>
      <nav style={{ display: displayDesk ? "block" : "none" }}>
        <Link to="/help" className="button">
          Aide
        </Link>
        <Link to="/logout" className="button">
          Donner des cours
        </Link>
        <Link to="/logout" className="button">
          Inscription
        </Link>
        <Link to="/login" className="button button--primary">
          Connexion
        </Link>
      </nav>
      <i onClick={() => setDisplayMob(!displayMob)} className={classButton}></i>
      <Burger isOpen={displayMob} />
    </header>
  );
};

export default Header;
