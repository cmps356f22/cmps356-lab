import { useState, useEffect } from "react";
import GamerAvatar from "./GamerAvatar";

export default function GamerInformation(props) {
  const [avatar, setAvatar] = useState(null);

  function updateAvatar() {
    async function fetchImage(username) {
      const url = `https://robohash.org/${username}`;
      const response = await fetch(url);
      const data = await response.blob();
      return URL.createObjectURL(data);
    }

    fetchImage(props.username).then((avatar) => setAvatar(avatar));
  }

  useEffect(updateAvatar, []);
  useEffect(updateAvatar, [props.username]);

  return (
    <>
      <GamerAvatar avatar={avatar} status={props.status} />
      <div>Username: {props.username}</div>
      <div>Age: {props.age}</div>
      <div>Status: {props.status}</div>
    </>
  );
}
