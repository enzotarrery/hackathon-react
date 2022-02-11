import React from "react";
import Picto from "../../../assets/images/pictos/profile.svg";
const { v4: uuidv4 } = require("uuid");

const TchatScreen = ({ messagesDisplay }) => {
  return (
    <div>
      <div className="tchatscreen">
        {messagesDisplay &&
          messagesDisplay.map((message) => {
            const classMonitor =
              message.sender === "monitor"
                ? "messages__text--monitor"
                : "messages__text";

            const imgRightOrLeft =
              message.sender === "monitor"
                ? "messages__sender--end"
                : "messages__sender";
            return (
              <div className="messages" key={uuidv4()}>
                <span className={imgRightOrLeft}>
                  <img src={Picto} alt="profile picto" />
                </span>
                <div className={classMonitor}>{message.messages}</div>
              </div>
            );
          })}
      </div>
      <div className="messages__tosend">
        <input type="messages" className="messages__input" />
        <button className="button button--tchat">Envoyer</button>
      </div>
    </div>
  );
};

export default TchatScreen;
