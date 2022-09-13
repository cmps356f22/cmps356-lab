export default function GamerUsername(props) {
  return (
    <>
      <div>
        Username:
        <input
          value={props.username}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </div>
    </>
  );
}
