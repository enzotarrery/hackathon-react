import React, { useEffect, useState } from "react";
const { v4: uuidv4 } = require("uuid");

const TchatScreen = ({ messagesDisplay }) => {
  return (
    <div className="tchatscreen">
      {messagesDisplay &&
        messagesDisplay.map((message) => {
          const classMonitor =
            message.sender === "monitor"
              ? "messages__text--monitor"
              : "messages__text";
          return (
            <div className="messages" key={uuidv4()}>
              <span className="messages__sender">{message.sender}</span>
              <div className={classMonitor}>{message.messages}</div>
            </div>
          );
        })}
    </div>
  );
};

export default TchatScreen;
