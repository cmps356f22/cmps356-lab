import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = ({ children, userInformation, setUserInformation }) => {
  const navigate = useNavigate();

  return (
    <>
      <Header userInformation={userInformation}>
        {userInformation && (
          <div>
            {userInformation.username} {userInformation.email}
            <button
              onClick={(e) => {
                setUserInformation(null);
              }}
            >
              Logout
            </button>
          </div>
        )}
        {!userInformation && (
          <div>
            header{" "}
            <button
              onClick={(e) => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        )}
      </Header>
      <main>{children ?? <Outlet />}</main>
      <Footer>
        <p>footer</p>
      </Footer>
    </>
  );
};

export { Layout };
