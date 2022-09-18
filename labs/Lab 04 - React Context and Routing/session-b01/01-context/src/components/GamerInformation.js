import GamerAvatar from "components/GamerAvatar";
import { useContext } from "react";
import { GamerContext } from "contexts/GamerContext";

export default function GamerInformation(props) {
  const context = useContext(GamerContext);

  return (
    <>
      <GamerAvatar
        avatar={context.state.avatar}
        status={context.state.status}
      />
      <div>Username: {context.state.username}</div>
      <div>Age: {context.state.age}</div>
      <div>Status: {context.state.status}</div>
    </>
  );
}
