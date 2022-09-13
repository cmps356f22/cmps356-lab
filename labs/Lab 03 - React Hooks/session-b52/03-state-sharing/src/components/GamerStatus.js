import { GAMER_ONLINE_STATUS } from "../types/GamerOnlineStatus";

export default function GamerStatus(props) {
  return (
    <>
      <div>
        Status:
        <select
          value={props.status}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
        >
          {Object.keys(GAMER_ONLINE_STATUS).map((status) => (
            <option key={status} value={GAMER_ONLINE_STATUS[status]}>
              {GAMER_ONLINE_STATUS[status]}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
