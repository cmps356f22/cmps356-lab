import { GAMER_STATUS_TYPES } from "types/GamerStatusTypes";
import { useContext } from "react";
import { GamerContext } from "contexts/GamerContext";
import { GAMER_CONTEXT_ACTION_TYPES } from "types/GamerContextActionTypes";

export default function GamerStatus(props) {
  const context = useContext(GamerContext);

  function updateStatus(event) {
    context.dispatch({
      type: GAMER_CONTEXT_ACTION_TYPES.UPDATE_STATUS,
      payload: event.target.value,
    });
  }

  return (
    <>
      <select value={context.state.status} onChange={updateStatus}>
        {Object.keys(GAMER_STATUS_TYPES).map((status) => (
          <option key={status} value={GAMER_STATUS_TYPES[status]}>
            {GAMER_STATUS_TYPES[status]}
          </option>
        ))}
      </select>
    </>
  );
}
