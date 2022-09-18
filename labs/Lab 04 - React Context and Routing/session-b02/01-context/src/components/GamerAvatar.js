import { useContext } from "react";
import { GAMER_STATUS_TYPES } from "types/GamerStatusTypes";
import { GamerContext } from "contexts/GamerContext";

export default function GamerAvatar() {
  const context = useContext(GamerContext);

  return (
    <>
      <div
        style={{
          borderRadius: "50%",
          marginBottom: "10px",
        }}
      >
        <img
          src={context.state.avatar}
          alt="user avatar"
          style={{
            borderRadius: "50%",
            border: "solid 10px black",
            borderColor:
              context.state.status === GAMER_STATUS_TYPES.ONLINE
                ? "green"
                : context.state.status === GAMER_STATUS_TYPES.GAMING
                ? "orange"
                : context.state.status === GAMER_STATUS_TYPES.AWAY
                ? "purple"
                : "gray",
          }}
        />
      </div>
    </>
  );
}
