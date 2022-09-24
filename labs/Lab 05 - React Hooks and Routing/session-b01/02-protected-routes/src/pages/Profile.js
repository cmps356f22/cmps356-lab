const Profile = () => {
  return (
    <form
      method="post"
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   if (username && email) {
      //     setUserInformation({
      //       username,
      //       email,
      //     });
      //     navigate("/");
      //   }
      // }}
    >
      <div>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          onChange={(e) => {
            // setUsername(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          onChange={(e) => {
            // setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export { Profile };
