import { GAMER_ONLINE_STATUS } from "types/GamerOnlineStatus";
import { GamerContext } from "contexts/GamerContext";
import { useContext } from "react";
import { GAMER_CONTEXT_ACTION_TYPES } from "types/GAMER_CONTEXT_ACTION_TYPES";

const GamerStatus = () => {
  const context = useContext(GamerContext);

  return (
    <>
      <div
      // style={{
      //   backgroundColor: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
      // }}
      >
        Status:
        <select
          value={context.state.status}
          onChange={(e) => {
            context.dispatch({
              type: GAMER_CONTEXT_ACTION_TYPES.UPDATE_STATUS,
              payload: e.target.value,
            });
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
};

export { GamerStatus };
