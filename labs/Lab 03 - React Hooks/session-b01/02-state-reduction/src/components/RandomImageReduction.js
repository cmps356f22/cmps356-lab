import { useState, useEffect, useReducer } from "react";
import { RANDOM_IMAGE_ACTION_TYPES } from "../types/RandomImageActionTypes";

export default function RandomImage(props) {
  const [timestamp, setTimeStamp] = useState(Date.now());

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

  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    image: null,
    error: null,
    width: 200,
    height: 200,
  });

  async function fetchImage(width, height) {
    dispatch({ type: RANDOM_IMAGE_ACTION_TYPES.FETCH_START });
    // const url = `https://picsum.photos/${width}/${height}`;
    const url = `https://random.imagecdn.app/${width}/${height}`;
    const response = await fetch(url);
    const data = await response.blob();
    return URL.createObjectURL(data);
  }

  function randomImage(width, height) {
    fetchImage(width, height)
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

  useEffect(() => {
    if (Date.now() - timestamp >= 1000) {
      randomImage(state.width, state.height);
      setTimeStamp(Date.now());
    }
  }, [state.width, state.height]);
  useEffect(() => {
    randomImage(state.width, state.height);
  }, []);

  return (
    <>
      <div>
        <button onClick={randomImage}>Random</button>
      </div>
      <datalist id="tickmarks">
        <option value="100" label="100px"></option>
        <option value="200"></option>
        <option value="300"></option>
        <option value="400"></option>
        <option value="500" label="500px"></option>
        <option value="600"></option>
        <option value="700"></option>
        <option value="800"></option>
        <option value="900" label="900px"></option>
      </datalist>
      <div>
        <input
          type="range"
          min="100"
          max="900"
          list="tickmarks"
          onChange={(e) =>
            dispatch({
              type: RANDOM_IMAGE_ACTION_TYPES.UPDATE_WIDTH,
              payload: e.target.value,
            })
          }
        />
        {state.width}px
      </div>
      <div>
        <input
          type="range"
          min="100"
          max="900"
          list="tickmarks"
          onChange={(e) =>
            dispatch({
              type: RANDOM_IMAGE_ACTION_TYPES.UPDATE_HEIGHT,
              payload: e.target.value,
            })
          }
        />
        {state.height}px
      </div>
      {state.loading && (
        <div
          style={{
            color: "green",
          }}
        >
          <p>loading...</p>
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
