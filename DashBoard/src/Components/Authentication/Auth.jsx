import { Navigate, Outlet } from "react-router-dom";

const Auth = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default Auth;