import { useState, useEffect } from "react";

import GamerInformation from "./GamerInformation";
import GamerStatus from "./GamerStatus";
import GamerUsername from "./GamerUsername";
import { GAMER_STATUS_TYPES } from "../types/GamerStatusTypes";

export default function Gamer(props) {
  const [status, setStatus] = useState(GAMER_STATUS_TYPES.AWAY);
  const [username, setUsername] = useState("foo");
  const [age, setAge] = useState(18);
  const [avatar, setAvatar] = useState(null);

  function handleStatusUpdate(value) {
    setStatus(value);
  }

  function handleUsernameUpdate(value) {
    setUsername(value);
  }

  useEffect(() => {
    async function fetchImage(username) {
      const url = `https://robohash.org/${username}`;
      const response = await fetch(url);
      const data = await response.blob();
      return URL.createObjectURL(data);
    }

    fetchImage(username)
      .then((avatar) => setAvatar(avatar))
      .catch((error) => {});
  }, [username]);

  return (
    <>
      <GamerInformation
        username={username}
        age={age}
        status={status}
        avatar={avatar}
      />
      <GamerStatus status={status} onChange={handleStatusUpdate} />
      <GamerUsername username={username} onChange={handleUsernameUpdate} />
    </>
  );
}
