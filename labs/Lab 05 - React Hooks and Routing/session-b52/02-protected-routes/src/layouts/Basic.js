import { Outlet } from "react-router-dom";

const Basic = ({ children }) => {
  return (
    <>
      <main>
        {/* <h1>{props.title ?? "Untitled"}</h1> */}
        {children ?? <Outlet />}
      </main>
    </>
  );
};

export { Basic };
