import GamerAvatar from "./GamerAvatar";

export default function GamerInformation(props) {
  return (
    <>
      <GamerAvatar avatar={props.avatar} status={props.status} />
      <div>Username: {props.username}</div>
      <div>Age: {props.age}</div>
      <div>Status: {props.status}</div>
    </>
  );
}
