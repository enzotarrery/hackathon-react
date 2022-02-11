import React, { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import Logo from "../assets/images/logo_carl.svg";

const Header = () => {
  const [displayDesk, setDisplayDesk] = useState(false);
  const [displayMob, setDisplayMob] = useState(false);

  const classButton = displayMob
    ? "fa-solid fa-bars button__mobile burger__icon white"
    : "fa-solid fa-bars burger__icon button__mobile";
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="header__nav">
        <Link to="/help" className="button">
          Aide
        </Link>
        <Link to="/" className="button">
          Donner des cours
        </Link>
        <Link to="/register" className="button">
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
