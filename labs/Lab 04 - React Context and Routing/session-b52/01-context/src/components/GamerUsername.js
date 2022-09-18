import { GamerContext } from "contexts/GamerContext";
import { useContext } from "react";
import { GAMER_CONTEXT_ACTION_TYPES } from "types/GAMER_CONTEXT_ACTION_TYPES";

const GamerUsername = () => {
  const context = useContext(GamerContext);

  return (
    <>
      <div
      // style={{
      //   backgroundColor: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
      // }}
      >
        Username:
        <input
          type="text"
          value={context.state.username}
          onChange={(e) => {
            context.dispatch({
              type: GAMER_CONTEXT_ACTION_TYPES.UPDATE_USERNAME,
              payload: e.target.value,
            });
          }}
        />
      </div>
    </>
  );
};

export { GamerUsername };
