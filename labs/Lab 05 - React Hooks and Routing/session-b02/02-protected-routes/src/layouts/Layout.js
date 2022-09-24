import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children, userInformation, setUserInformation }) => {
  return (
    <>
      <Header
        userInformation={userInformation}
        setUserInformation={setUserInformation}
      >
        header
      </Header>
      <main>{children ?? <Outlet />}</main>
      <Footer>footer</Footer>
    </>
  );
};

export { Layout };
