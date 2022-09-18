import { useContext } from "react";
import { GamerContext } from "contexts/GamerContext";
import { GAMER_CONTEXT_ACTION_TYPES } from "types/GamerContextActionTypes";

export default function GamerUsername(props) {
  const context = useContext(GamerContext);

  function updateUsername(event) {
    context.dispatch({
      type: GAMER_CONTEXT_ACTION_TYPES.UPDATE_USERNAME,
      payload: event.target.value,
    });
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={context.state.username}
          onChange={updateUsername}
        />
      </div>
    </>
  );
}
