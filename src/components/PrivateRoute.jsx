import { selectIsLoggedIn } from "@/redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component, navigateTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  const shouldUserRedirect = !isLoggedIn;

  return shouldUserRedirect ? <Navigate to={navigateTo} /> : component;
};