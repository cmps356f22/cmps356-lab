import { Navigation } from "components/Navigation";
import { useNavigate } from "react-router-dom";

const Header = ({ children, user, setUser }) => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        {user && (
          <div>
            {user.name} {user.email}
            <button
              onClick={(e) => {
                setUser(null);
              }}
            >
              Logout
            </button>
          </div>
        )}
        {!user && (
          <div>
            <button
              onClick={(e) => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        )}
        {children}
        <Navigation user={user}>
          <p>navigation</p>
        </Navigation>
      </header>
    </>
  );
};

export { Header };
