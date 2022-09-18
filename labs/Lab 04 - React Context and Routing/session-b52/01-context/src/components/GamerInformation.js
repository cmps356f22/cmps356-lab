import { GamerAvatar } from "components/GamerAvatar";
import { GamerContext } from "contexts/GamerContext";
import { useContext } from "react";

const GamerInformation = () => {
  const context = useContext(GamerContext);

  return (
    <>
      <div
      // style={{
      //   backgroundColor: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
      // }}
      >
        <GamerAvatar />
        <div>Username: {context.state.username} </div>
        <div>Age: {context.state.age}</div>
        <div>Status: {context.state.status}</div>
      </div>
    </>
  );
};

export { GamerInformation };
