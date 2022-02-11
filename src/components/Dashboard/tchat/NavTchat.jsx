import React, { useEffect, useState } from "react";
import Picto from "../../../assets/images/pictos/profile.svg";
import { Link } from "react-router-dom";
const { v4: uuidv4 } = require("uuid");

const NavTchat = ({ tchats, users, handleReadingFrom }) => {
  const getUserName = (id) => {
    if (users.length < 0) return undefined;
    const user = users.find((item) => item.id === id);
    return user.firstName;
  };

  return (
    <div className="navigation-tchat">
      <nav>
        {tchats && tchats.length > 0 ? (
          tchats.map((item) => {
            return (
              <div key={uuidv4()} className="navigation-tchat__picto">
                <img src={Picto} alt="profile picto" />
                <p
                  className="navigation-tchat__link"
                  onClick={() => handleReadingFrom(item.userId)}
                >
                  {users && getUserName(item.userId)}
                </p>
              </div>
            );
          })
        ) : (
          <div>Pas de messages</div>
        )}
      </nav>
    </div>
  );
};

export default NavTchat;
