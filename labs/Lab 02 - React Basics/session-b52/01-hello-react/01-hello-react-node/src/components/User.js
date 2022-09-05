import "./User.css";

function User(props) {
  return (
    <div className="user">
      <div>Firstname: {props.firstname}</div>
      <div>Lastname: {props.lastname}</div>
    </div>
  );
}

export default User;
