import { Navigation } from "components/Navigation";
import { useNavigate } from "react-router-dom";

const Header = ({ children, userInformation, setUserInformation }) => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        {children}
        <div>
          {userInformation && (
            <>
              <span>{userInformation.name}</span>
              <span
                style={{
                  marginInlineStart: "1en",
                }}
              >
                {userInformation.email}
              </span>
              <button
                onClick={(e) => {
                  setUserInformation(null);
                }}
              >
                Logout
              </button>
            </>
          )}
          {!userInformation && (
            <button
              onClick={(e) => {
                navigate("/login");
              }}
            >
              Login
            </button>
          )}
        </div>
        <Navigation userInformation={userInformation} />
      </header>
    </>
  );
};

export { Header };
