import { Link } from "react-router-dom";

const Navigation = ({ children }) => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          // flexFlow: "row wrap",
          columnGap: "5px",
        }}
      >
        {/* <a href="#" onClick={context.setPage("Home")}>Home</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a> */}
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
      </nav>
      {children}
    </>
  );
};

export { Navigation };
