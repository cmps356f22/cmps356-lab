import { useEffect, useReducer } from "react";
import { RANDOM_IMAGE_ACTION_TYPES } from "../types/RandomImageActionType";

export default function RandomImage(props) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    image: null,
    error: null,
    width: 200,
    height: 200,
  });

  function reducer(state, action) {
    switch (action.type) {
      case RANDOM_IMAGE_ACTION_TYPES.FETCH_START:
        return {
          ...state,
          loading: true,
          image: null,
          error: null,
        };
      case RANDOM_IMAGE_ACTION_TYPES.FETCH_SUCCESS:
        return {
          ...state,
          loading: false,
          image: action.payload,
          error: null,
        };
      case RANDOM_IMAGE_ACTION_TYPES.FETCH_ERROR:
        return {
          ...state,
          loading: false,
          image: null,
          error: action.payload,
        };
      case RANDOM_IMAGE_ACTION_TYPES.UPDATE_WIDTH:
        return { ...state, width: action.payload };
      case RANDOM_IMAGE_ACTION_TYPES.UPDATE_HEIGHT:
        return { ...state, height: action.payload };
      default:
        return state;
    }
  }

  async function fetchImage(width, height) {
    dispatch({ type: "FETCH_START" });

    const url = `https://picsum.photos/${width}/${height}`;
    const response = await fetch(url);
    const data = await response.blob();
    return URL.createObjectURL(data);
  }

  function updateImage() {
    fetchImage(state.width, state.height)
      .then((image) => {
        dispatch({ type: "FETCH_SUCCESS", payload: image });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error });
      });
  }

  function updateWidth(event) {
    dispatch({
      type: RANDOM_IMAGE_ACTION_TYPES.UPDATE_WIDTH,
      payload: event.target.value,
    });
  }

  function updateHeight(event) {
    dispatch({
      type: RANDOM_IMAGE_ACTION_TYPES.UPDATE_HEIGHT,
      payload: event.target.value,
    });
  }

  useEffect(() => {
    updateImage();
  }, [state.width, state.height]);

  useEffect(() => {
    updateImage();
  }, []);

  return (
    <>
      <div>
        <div>
          <button
            onClick={() => updateImage(state.width, state.height)}
            style={{
              padding: "10px",
            }}
          >
            Fetch
          </button>
        </div>
        <div>
          <input
            type="range"
            min="100"
            max="900"
            // value={state.width}
            onChange={updateWidth}
          />
          {state.width}px
        </div>
        <div>
          <input
            type="range"
            min="100"
            max="900"
            // value={state.height}
            onChange={updateHeight}
          />
          {state.height}px
        </div>
        {state.loading && (
          <div style={{ color: "green" }}>
            <p>loading...</p>
          </div>
        )}
        {state.image && <img src={state.image} alt="random picsum" />}
        {state.error && (
          <div
            style={{
              color: "red",
            }}
          >
            <p>{state.error.toString()}</p>
          </div>
        )}
      </div>
    </>
  );
}
