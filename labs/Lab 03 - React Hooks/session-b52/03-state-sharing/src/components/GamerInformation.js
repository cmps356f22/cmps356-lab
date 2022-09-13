import { useState, useEffect } from "react";
import GamerAvatar from "./GamerAvatar";

export default function GamerInformation(props) {
  const [avatar, setAvatar] = useState(null);

  async function fetchImage() {
    const url = `https://robohash.org/${props.username}`;
    const response = await fetch(url);
    const data = await response.blob();
    return URL.createObjectURL(data);
  }

  useEffect(() => {
    fetchImage()
      .then((avatar) => setAvatar(avatar))
      .catch((error) => {});
  }, []);

  useEffect(() => {
    fetchImage()
      .then((avatar) => setAvatar(avatar))
      .catch((error) => {});
  }, [props.username]);

  return (
    <>
      <GamerAvatar avatar={avatar} status={props.status} />
      <div>Username: {props.username} </div>
      <div>Age: {props.age}</div>
      <div>Status: {props.status}</div>
    </>
  );
}
