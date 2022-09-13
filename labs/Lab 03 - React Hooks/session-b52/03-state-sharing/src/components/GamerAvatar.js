import { GAMER_ONLINE_STATUS } from "../types/GamerOnlineStatus";

export default function GamerAvatar(props) {
  return (
    <>
      <div>
        <img
          src={props.avatar}
          alt="gamer avatar"
          style={{
            borderRadius: "50%",
            border: "solid 10px black",
            borderColor:
              props.status === GAMER_ONLINE_STATUS.ONLINE
                ? "green"
                : props.status === GAMER_ONLINE_STATUS.GAMING
                ? "orange"
                : props.status === GAMER_ONLINE_STATUS.AWAY
                ? "purple"
                : "gray",
          }}
        />
      </div>
    </>
  );
}
