function Hello(props) {
  return (
    <h1>
      Hello, {props.title} {props.name ?? "Anonymous"}!
    </h1>
  );
}

export default Hello;
