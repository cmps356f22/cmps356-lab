export default function GamerUsername(props) {
  function updateUsername(event) {
    props.onChange(event.target.value);
  }

  return (
    <>
      <div>
        <input type="text" value={props.username} onChange={updateUsername} />
      </div>
    </>
  );
}
