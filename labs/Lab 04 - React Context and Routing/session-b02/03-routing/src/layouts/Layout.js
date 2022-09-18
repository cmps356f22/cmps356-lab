import { Header } from "components/Header";
import { Footer } from "components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header>header</Header>
      <main>{children}</main>

      <Footer>footer</Footer>
    </>
  );
};

export { Layout };
