import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  } else {
    return children ?? <Outlet />;
  }
};

export { ProtectedRoute };
