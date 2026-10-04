import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "@/redux/auth/authSelectors";
import { useSelector } from "react-redux";

export const RestrictedRoute = ({ component, navigateTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const isRefreshing = useSelector(selectIsRefreshing)

  if (isRefreshing) {
    return <div>Loading...</div>
  }

  return isLoggedIn ? <Navigate to={navigateTo} /> : component;
};