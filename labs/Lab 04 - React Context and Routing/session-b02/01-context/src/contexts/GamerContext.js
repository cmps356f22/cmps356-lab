import { createContext, useReducer, useEffect } from "react";
import { GAMER_STATUS_TYPES } from "types/GamerStatusTypes";
import { GAMER_CONTEXT_ACTION_TYPES } from "types/GamerContextActionTypes";

const GamerContext = createContext();

const GamerProvider = ({ children }) => {
  const initialState = {
    status: GAMER_STATUS_TYPES.OFFLINE,
    username: "foo",
    age: 18,
    avatar: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case GAMER_CONTEXT_ACTION_TYPES.UPDATE_AGE:
        return { ...state, age: action.payload };
      case GAMER_CONTEXT_ACTION_TYPES.UPDATE_AVATAR:
        return { ...state, avatar: action.payload };
      case GAMER_CONTEXT_ACTION_TYPES.UPDATE_STATUS:
        return { ...state, status: action.payload };
      case GAMER_CONTEXT_ACTION_TYPES.UPDATE_USERNAME:
        return { ...state, username: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function updateAvatar() {
    async function fetchImage(username) {
      const url = `https://robohash.org/${state.username}`;
      const response = await fetch(url);
      const data = await response.blob();
      return URL.createObjectURL(data);
    }

    fetchImage(state.username).then((avatar) =>
      dispatch({
        type: GAMER_CONTEXT_ACTION_TYPES.UPDATE_AVATAR,
        payload: avatar,
      })
    );
  }

  useEffect(updateAvatar, []);
  useEffect(updateAvatar, [state.username]);

  return (
    <GamerContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GamerContext.Provider>
  );
};

export { GamerContext, GamerProvider };
