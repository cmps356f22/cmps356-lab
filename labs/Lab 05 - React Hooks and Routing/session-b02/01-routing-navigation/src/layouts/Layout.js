import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Header>header</Header>
      <main>{children ?? <Outlet />}</main>
      <Footer>footer</Footer>
    </>
  );
};

export { Layout };
