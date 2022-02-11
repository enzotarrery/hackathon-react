import React from "react";
import { Link } from "react-router-dom";

const Burger = ({ isOpen }) => {
  return (
    <nav
      className="burger"
      style={{
        display: isOpen ? "block" : "none",
        transform: isOpen ? "translateX(0)" : "translateX(200%)",
      }}
    >
      <Link to="/help">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        Aide
      </Link>
      <Link to="/courses">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Donner des cours
      </Link>
      <Link to="/register">
        <span role="img" aria-label="price">
          &#127774;
        </span>
        Inscription
      </Link>
      <Link to="/login">
        <span role="img" aria-label="price">
          🔒
        </span>
        Connexion
      </Link>
      <Link to="/contact">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </Link>
    </nav>
  );
};

export default Burger;
