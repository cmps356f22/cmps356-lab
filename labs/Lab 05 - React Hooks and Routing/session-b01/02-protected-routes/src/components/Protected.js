import { Navigate } from "react-router-dom";

const Protected = ({ children, userInformation }) => {
  if (!userInformation) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export { Protected };
