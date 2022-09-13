export default function GamerUsername(props) {
  return (
    <>
      <div>
        Username:
        <input
          type="text"
          value={props.username}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
        />
      </div>
    </>
  );
}
