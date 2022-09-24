import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children, user, setUser }) => {
  return (
    <>
      <Header user={user} setUser={setUser}>
        <p>header</p>
      </Header>
      <main>
        {/* <h1>{props.title ?? "Untitled"}</h1> */}
        {children ?? <Outlet />}
      </main>
      <Footer>
        <p>footer</p>
      </Footer>
    </>
  );
};

export { Layout };
