import { Header } from "components/Header";
import { Footer } from "components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <p>header</p>
      </Header>
      <main>{children}</main>
      <Footer>
        <p>footer</p>
      </Footer>
    </>
  );
};

export { Layout };
