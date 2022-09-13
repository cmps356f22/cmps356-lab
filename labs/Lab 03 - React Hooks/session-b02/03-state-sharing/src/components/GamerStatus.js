import { GAMER_STATUS_TYPES } from "../types/GamerStatusTypes";

export default function GamerStatus(props) {
  return (
    <>
      Status:
      <select
        value={props.status}
        onChange={(e) => props.onChange(e.target.value)}
      >
        {Object.keys(GAMER_STATUS_TYPES).map((status) => (
          <option key={status} value={GAMER_STATUS_TYPES[status]}>
            {GAMER_STATUS_TYPES[status]}
          </option>
        ))}
      </select>
    </>
  );
}
