import { GAMER_STATUS_TYPES } from "../types/GamerStatusTypes";

export default function GamerAvatar(props) {
  return (
    <>
      <div>
        <img
          src={props.avatar}
          alt="avatar"
          style={{
            borderRadius: "50%",
            border: "solid 10px black",
            borderColor:
              props.status === GAMER_STATUS_TYPES.ONLINE
                ? "green"
                : props.status === GAMER_STATUS_TYPES.GAMING
                ? "orange"
                : props.status === GAMER_STATUS_TYPES.AWAY
                ? "purple"
                : "gray",
          }}
        />
      </div>
    </>
  );
}
