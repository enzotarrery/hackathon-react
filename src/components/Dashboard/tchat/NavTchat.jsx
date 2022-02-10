import React, { useEffect, useState } from "react";
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
              <p
                className="navigation-tchat__link"
                onClick={() => handleReadingFrom(item.userId)}
                key={uuidv4()}
              >
                {users && getUserName(item.userId)}
              </p>
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
