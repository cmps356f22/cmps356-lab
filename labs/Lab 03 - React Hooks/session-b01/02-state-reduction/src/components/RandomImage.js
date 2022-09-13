import { useState, useEffect } from "react";

export default function RandomImage(props) {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  async function fetchImage() {
    // fetch start
    setLoading(true);
    setImage(null);
    setError(null);
    const url = "https://picsum.photos/200/200";
    const response = await fetch(url);
    const data = await response.blob();
    return URL.createObjectURL(data);
  }

  function randomImage() {
    fetchImage()
      .then((image) => {
        // fetch success
        setImage(image);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        // fetch error
        setImage(null);
        setError(error);
        setLoading(false);
      });
  }

  useEffect(randomImage, []);

  return (
    <>
      <button onClick={randomImage}>Random</button>
      {loading && (
        <div
          style={{
            color: "green",
          }}
        >
          <p>loading...</p>
        </div>
      )}
      {image && (
        <div>
          <img src={image} alt="random picsum" />
        </div>
      )}
      {error && (
        <div
          style={{
            color: "red",
          }}
        >
          <p>{error.toString()}</p>
        </div>
      )}
    </>
  );
}
