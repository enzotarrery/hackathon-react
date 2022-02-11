import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import Logo from "../assets/images/logo_carl.svg";
import { AuthContext } from "../App";

const Header = () => {

  const [state, action] = useContext(AuthContext);

  const [displayDesk, setDisplayDesk] = useState(false);
  const [displayMob, setDisplayMob] = useState(false);

  const classButton = displayMob
    ? "fa-solid fa-bars button__mobile burger__icon white"
    : "fa-solid fa-bars burger__icon button__mobile";
  return (
    <header className="header">
      <div className="header__logo">
        <Link  to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <nav className="header__nav">
        <Link to="/help" className="button">
          Aide
        </Link>
        <Link to="/" className="button">
          Donner des cours
        </Link>
        {
          (!state.loading && !state.user)
          ? (
            <>
              <Link to="/register" className="button">
                Inscription
              </Link>
              <Link to="/login" className="button button--primary">
                Connexion
              </Link>
            </>
          )
          : (
            <>
              <Link to="/logout" className="button">
                Se déconnecter
              </Link>
              <Link to="/dashboard" className="button button--primary">
                Dashboard
              </Link>
            </>
          )
          
        }
      </nav>
      <i onClick={() => setDisplayMob(!displayMob)} className={classButton}></i>
      <Burger isOpen={displayMob} />
    </header>
  );
};

export default Header;
