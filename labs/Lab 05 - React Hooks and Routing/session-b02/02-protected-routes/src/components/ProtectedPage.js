import { Navigate } from "react-router-dom";

const ProtectedPage = ({ children, userInformation }) => {
  if (userInformation) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export { ProtectedPage };
