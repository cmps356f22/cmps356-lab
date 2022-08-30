import './User.css';

function User(props) {
  return (
    <div className="user">
      <div>Firstname: {props.firstName}</div>
      <div>Lastname: {props.lastName}</div>
    </div>
  );
}

export default User;
