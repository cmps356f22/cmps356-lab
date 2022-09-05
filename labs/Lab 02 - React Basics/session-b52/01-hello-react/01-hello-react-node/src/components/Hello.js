function Hello(props) {
  return (
    <h1>
      Hello, {props.title} {props.name ?? "React"}!
    </h1>
  );
}

export default Hello;
