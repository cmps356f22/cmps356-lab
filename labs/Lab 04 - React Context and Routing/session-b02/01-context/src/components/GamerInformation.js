import GamerAvatar from "components/GamerAvatar";
import { useContext } from "react";
import { GamerContext } from "contexts/GamerContext";

export default function GamerInformation() {
  const context = useContext(GamerContext);

  return (
    <>
      <GamerAvatar />
      <div>Username: {context.state.username}</div>
      <div>Age: {context.state.age}</div>
      <div>Status: {context.state.status}</div>
    </>
  );
}
