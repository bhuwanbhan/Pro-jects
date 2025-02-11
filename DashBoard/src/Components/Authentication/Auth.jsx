import { Navigate, Outlet } from "react-router-dom";

const Auth = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/sign-in" />; 
  }
};

export default Auth;