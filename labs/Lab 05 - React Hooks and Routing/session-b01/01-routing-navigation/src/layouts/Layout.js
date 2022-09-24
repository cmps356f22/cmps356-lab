import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <p>header</p>
      </Header>
      <main>{children ?? <Outlet />}</main>
      <Footer>
        <p>footer</p>
      </Footer>
    </>
  );
};

export { Layout };
