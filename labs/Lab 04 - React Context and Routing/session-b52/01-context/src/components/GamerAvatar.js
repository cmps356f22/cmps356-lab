import { GAMER_ONLINE_STATUS } from "types/GamerOnlineStatus";
import { GamerContext } from "contexts/GamerContext";
import { useContext } from "react";

const GamerAvatar = () => {
  const context = useContext(GamerContext);

  return (
    <>
      <div
      // style={{
      //   backgroundColor: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
      // }}
      >
        <img
          src={context.state.avatar}
          alt="gamer avatar"
          style={{
            borderRadius: "50%",
            border: "solid 10px black",
            borderColor:
              context.state.status === GAMER_ONLINE_STATUS.ONLINE
                ? "green"
                : context.state.status === GAMER_ONLINE_STATUS.GAMING
                ? "orange"
                : context.state.status === GAMER_ONLINE_STATUS.AWAY
                ? "purple"
                : "gray",
          }}
        />
      </div>
    </>
  );
};

export { GamerAvatar };
