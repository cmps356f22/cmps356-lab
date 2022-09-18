import { useContext } from "react";
import { GamerContext } from "contexts/GamerContext";
import { GAMER_STATUS_TYPES } from "types/GamerStatusTypes";

export default function GamerAvatar(props) {
  const context = useContext(GamerContext);

  return (
    <>
      <div>
        <img
          src={context.state.avatar}
          alt="avatar"
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
