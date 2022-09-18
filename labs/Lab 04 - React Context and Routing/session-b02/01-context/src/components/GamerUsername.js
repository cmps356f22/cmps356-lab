import { useContext } from "react";
import { GamerContext } from "contexts/GamerContext";
import { GAMER_CONTEXT_ACTION_TYPES } from "types/GamerContextActionTypes";

export default function GamerUsername() {
  const context = useContext(GamerContext);

  return (
    <>
      <div>
        Username:
        <input
          value={context.state.username}
          onChange={(e) =>
            context.dispatch({
              type: GAMER_CONTEXT_ACTION_TYPES.UPDATE_USERNAME,
              payload: e.target.value,
            })
          }
        />
      </div>
    </>
  );
}
