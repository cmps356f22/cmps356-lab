import './User.css';

function User(props) {
  return (
    <div className="user">
      <div className="first-name">Firstname: {props.firstName}</div>
      <div className="last-name">Lastname: {props.lastName}</div>
    </div>
  );
}

export default User;
