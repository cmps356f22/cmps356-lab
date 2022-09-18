const Navigation = ({ children }) => {
  return (
    <>
      <nav>
        <a href="/">Home</a>
      </nav>
      {children}
    </>
  );
};

export { Navigation };
