import { Header } from "components/Header";
import { Footer } from "components/Footer";

const Layout = (props) => {
  return (
    <>
      <Header>
        <p>header</p>
      </Header>
      <main>
        <h1>{props.title ?? "Untitled"}</h1>
        {props.children}
      </main>
      <Footer>
        <p>footer</p>
      </Footer>
    </>
  );
};

export { Layout };
