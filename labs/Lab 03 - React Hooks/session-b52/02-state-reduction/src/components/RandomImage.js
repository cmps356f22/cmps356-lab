import { useReducer, useEffect } from "react";

import { RANDOM_IMAGE_ACTION_TYPES } from "../types/RandomImageActionTypes";

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
        };
      case RANDOM_IMAGE_ACTION_TYPES.FETCH_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case RANDOM_IMAGE_ACTION_TYPES.UPDATE_WIDTH:
        return {
          ...state,
          width: action.payload,
        };
      case RANDOM_IMAGE_ACTION_TYPES.UPDATE_HEIGHT:
        return {
          ...state,
          height: action.payload,
        };
      default:
        return state;
    }
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

  async function fetchImage() {
    dispatch({ type: RANDOM_IMAGE_ACTION_TYPES.FETCH_START });

    const url = `https://picsum.photos/${state.width}/${state.height}`;
    const response = await fetch(url);
    const data = await response.blob();
    return URL.createObjectURL(data);
  }

  function updateImage() {
    fetchImage()
      .then((image) => {
        dispatch({
          type: RANDOM_IMAGE_ACTION_TYPES.FETCH_SUCCESS,
          payload: image,
        });
      })
      .catch((error) => {
        dispatch({
          type: RANDOM_IMAGE_ACTION_TYPES.FETCH_ERROR,
          payload: error,
        });
      });
  }

  useEffect(updateImage, [state.width, state.height]);

  useEffect(updateImage, []);

  return (
    <>
      <button onClick={updateImage}>Fetch</button>
      <div>
        <input type="range" min="100" max="900" onChange={updateWidth} />
      </div>
      <div>
        <input type="range" min="100" max="900" onChange={updateHeight} />
      </div>
      {state.loading && (
        <div
          style={{
            color: "green",
          }}
        >
          <p>Loading...</p>
        </div>
      )}
      {state.image && (
        <div>
          <img src={state.image} alt="random picsum" />
        </div>
      )}
      {state.error && (
        <div
          style={{
            color: "red",
          }}
        >
          <p>{state.error.toString()}</p>
        </div>
      )}
    </>
  );
}
