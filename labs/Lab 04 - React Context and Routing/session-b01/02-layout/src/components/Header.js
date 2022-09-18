import { Navigation } from "components/Navigation";

const Header = ({ children }) => {
  return (
    <>
      <header>
        <Navigation />
        {children}
      </header>
    </>
  );
};

export { Header };
