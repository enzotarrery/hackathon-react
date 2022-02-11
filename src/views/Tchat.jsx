import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../App";
import NavTchat from "../components/Dashboard/tchat/NavTchat";
import TchatScreen from "../components/Dashboard/tchat/TchatScreen";

const Tchat = ({ isUser = false }) => {
  const [tchats, setTchats] = useState(null);
  const [users, setUsers] = useState(null);
  const [messagesDisplay, setMessagesDisplay] = useState([]);
  const [state, actions] = useContext(AuthContext);

  const [whoami, setWhoami] = useState({ quality: "student", id: 13 });

  useEffect(() => {
    const fetcher = async () => {
      // tchats
      let filteredTchat;

      const responseTchat = await fetch("http://localhost:8080/api/tchats");
      const jsonTchat = await responseTchat.json();
      filteredTchat = jsonTchat.filter((item) => {
        if (whoami.quality === "student") {
          return item.userId === whoami.id;
        } else if (whoami.quality === "instructor") {
          return item.instructorId === whoami.id;
        }
        return false;
      });

      // pas de données on stop
      if (filteredTchat.length > 0) {
        setTchats(filteredTchat);
        // je prends la première conversation dans la liste des tchats
        setMessagesDisplay(filteredTchat[0].conversations);
        // users
        const responseUsers = await fetch("http://localhost:8080/api/users");
        const jsonUsers = await responseUsers.json();
        setUsers(jsonUsers);
      }
    };
    fetcher();
  }, [state]);

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
