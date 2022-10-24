import { Navigate, Outlet } from "react-router-dom";
import Login from "./pages/Auth/login";

const UseAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

const protectedRoutes = () => {
  const isAuth = UseAuth();
  return isAuth ? <Outlet /> : <Navigate to="/home" />;
};

export default protectedRoutes;
