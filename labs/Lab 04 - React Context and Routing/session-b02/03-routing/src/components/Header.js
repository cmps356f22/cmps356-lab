import { Navigation } from "components/Navigation";

const Header = ({ children }) => {
  return (
    <>
      <header>
        {children}
        <Navigation />
      </header>
    </>
  );
};

export { Header };
