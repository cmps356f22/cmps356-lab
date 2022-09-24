import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <>
      <form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();

          if (name && email) {
            setUser({
              name,
              email,
            });
            navigate("/");
          }
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </>
  );
};

export { Login };
