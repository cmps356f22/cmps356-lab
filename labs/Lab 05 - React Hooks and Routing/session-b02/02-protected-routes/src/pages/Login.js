import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ userInformation, setUserInformation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInformation) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          if (name && email) {
            setUserInformation({
              name,
              email,
            });
            // navigate("/");
          }
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </>
  );
};

export { Login };
