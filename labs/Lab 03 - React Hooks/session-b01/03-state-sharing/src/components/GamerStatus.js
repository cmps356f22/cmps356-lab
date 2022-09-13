import { GAMER_STATUS_TYPES } from "../types/GamerStatusTypes";

export default function GamerStatus(props) {
  function updateStatus(event) {
    props.onChange(event.target.value);
  }

  return (
    <>
      <select value={props.status} onChange={updateStatus}>
        {Object.keys(GAMER_STATUS_TYPES).map((status) => (
          <option key={status} value={GAMER_STATUS_TYPES[status]}>
            {GAMER_STATUS_TYPES[status]}
          </option>
        ))}
      </select>
    </>
  );
}
