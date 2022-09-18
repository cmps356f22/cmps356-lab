import { useContext } from "react";
import { GAMER_STATUS_TYPES } from "types/GamerStatusTypes";
import { GAMER_CONTEXT_ACTION_TYPES } from "types/GamerContextActionTypes";
import { GamerContext } from "contexts/GamerContext";

export default function GamerStatus() {
  const context = useContext(GamerContext);

  return (
    <>
      Status:
      <select
        value={context.state.status}
        onChange={(e) =>
          context.dispatch({
            type: GAMER_CONTEXT_ACTION_TYPES.UPDATE_STATUS,
            payload: e.target.value,
          })
        }
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
