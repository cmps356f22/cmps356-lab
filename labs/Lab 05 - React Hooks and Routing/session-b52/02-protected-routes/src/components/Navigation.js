import { NavLink } from "react-router-dom";

const Navigation = ({ children, user }) => {
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : undefined,
    };
  };

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
        <NavLink to="/" end style={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/facts" style={activeStyle}>
          Facts
        </NavLink>
        <NavLink to="/about" style={activeStyle}>
          About
        </NavLink>
        {user && (
          <>
            <NavLink to="/photos" style={activeStyle}>
              Photos
            </NavLink>
            <NavLink to="/profile" style={activeStyle}>
              Profile
            </NavLink>
          </>
        )}
      </nav>
      {children}
    </>
  );
};

export { Navigation };
