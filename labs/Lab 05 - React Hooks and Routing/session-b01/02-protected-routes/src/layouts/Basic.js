import { Header } from "components/Header";
import { Outlet } from "react-router-dom";

const Basic = ({ children }) => {
  return (
    <>
      <main>{children ?? <Outlet />}</main>
    </>
  );
};

export { Basic };
