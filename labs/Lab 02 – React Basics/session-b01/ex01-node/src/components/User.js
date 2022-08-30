function User(props)  {
  return (
    <div>
      <div>Firstname: {props.firstName}</div>
      <div>Lastname: {props.lastName}</div>
    </div>
  );
}

export default User;