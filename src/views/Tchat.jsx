import React, { useEffect, useState } from "react";
import NavTchat from "../components/Dashboard/tchat/NavTchat";
import TchatScreen from "../components/Dashboard/tchat/TchatScreen";

const Tchat = ({ isUser = false }) => {
  const [tchats, setTchats] = useState(null);
  const [users, setUsers] = useState(null);
  const [messagesDisplay, setMessagesDisplay] = useState([]);

  const whoami = {
    quality: isUser ? "user" : "monitor",
    id: isUser ? 11 : 9,
  };
  useEffect(() => {
    const fetcher = async () => {
      // tchats
      const responseTchat = await fetch("http://localhost:8080/api/tchats");
      const jsonTchat = await responseTchat.json();
      const filteredTchat = jsonTchat.filter((item) => {
        if (whoami.quality === "user") {
          return item.userId === whoami.id;
        } else if (whoami.quality === "monitor") {
          return item.instructorId === whoami.id;
        }
        return false;
      });
      console.log(filteredTchat, "filteredTchat");

      setTchats(filteredTchat);

      // je prends la première conversation dans la liste des tchats
      setMessagesDisplay(filteredTchat[0].conversations);

      // users
      const responseUsers = await fetch("http://localhost:8080/api/users");
      const jsonUsers = await responseUsers.json();
      setUsers(jsonUsers);
    };
    fetcher();
  }, []);

  const handleReadingFrom = (id) => {
    const newMessagesToDisplay = tchats.find((item) => item.userId === id);
    setMessagesDisplay(newMessagesToDisplay.conversations);
  };
  return (
    <div className="tchat">
      <NavTchat
        tchats={tchats}
        users={users}
        handleReadingFrom={handleReadingFrom}
      />
      <TchatScreen messagesDisplay={messagesDisplay} />
    </div>
  );
};

export default Tchat;
