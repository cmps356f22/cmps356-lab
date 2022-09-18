import { createContext } from "react";
import { useReducer, useEffect } from "react";
import { GAMER_CONTEXT_ACTION_TYPES } from "types/GAMER_CONTEXT_ACTION_TYPES";

const GamerContext = createContext();

const GamerProvider = (props) => {
  const initialState = {
    status: props.status,
    username: props.username,
    age: props.age,
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

  async function fetchImage() {
    const url = `https://robohash.org/${state.username}`;
    const response = await fetch(url);
    const data = await response.blob();
    return URL.createObjectURL(data);
  }

  useEffect(() => {
    fetchImage()
      .then((avatar) =>
        dispatch({
          type: GAMER_CONTEXT_ACTION_TYPES.UPDATE_AVATAR,
          payload: avatar,
        })
      )
      .catch((error) => {});
  }, [state.username]);

  return (
    <GamerContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GamerContext.Provider>
  );
};

export { GamerContext, GamerProvider };
