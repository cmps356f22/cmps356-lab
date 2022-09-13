import GamerInformation from "./GamerInformation";
import GamerStatus from "./GamerStatus";
import GamerUsername from "./GamerUsername";

import { useState } from "react";

export default function Gamer(props) {
  const [status, setStatus] = useState(props.status);
  const [username, setUsername] = useState(props.username);

  function updateStatus(status) {
    setStatus(status);
  }

  function updateUsername(username) {
    setUsername(username);
  }

  return (
    <>
      <GamerInformation username={username} age={props.age} status={status} />
      <GamerStatus status={status} onChange={updateStatus} />
      <GamerUsername username={username} onChange={updateUsername} />
    </>
  );
}
