import { NavLink } from "react-router-dom";

const Navigation = ({ children, userInformation }) => {
  const styleActive = ({ isActive }) => {
    return {
      color: isActive ? "red" : undefined,
    };
  };

  return (
    <>
      {/* <nav
        style={{
          display: "flex",
          // flexFlow: "row wrap",
          columnGap: "5px",
        }}
      >
        <a
          href="/#home"
          onClick={context.dispatch({ type: "PAGE_UPDATE", payload: "Home" })}
        >
          Home
        </a>
        <a
          href="/#gallery"
          onClick={context.dispatch({
            type: "PAGE_UPDATE",
            payload: "Gallery",
          })}
        >
          Gallery
        </a>
        <a
          href="/#about"
          onClick={context.dispatch({ type: "PAGE_UPDATE", payload: "About" })}
        >
          About
        </a>
      </nav> */}
      <nav
        style={{
          display: "flex",
          // flexFlow: "row wrap",
          columnGap: "5px",
        }}
      >
        <NavLink to="/" end style={styleActive}>
          Home
        </NavLink>
        <NavLink to="/facts" style={styleActive}>
          Facts
        </NavLink>
        <NavLink to="/about" style={styleActive}>
          About
        </NavLink>
        {userInformation && (
          <>
            <NavLink to="/photos" style={styleActive}>
              Photos
            </NavLink>
            <NavLink to="/profile" style={styleActive}>
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
