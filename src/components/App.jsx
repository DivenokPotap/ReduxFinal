import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "@/redux/task/taskOperations";
import { Routes,Route } from "react-router-dom"
import { AuthCurrent } from "@/redux/auth/authOperatins";
import { selectIsRefreshing } from "@/redux/auth/authSelectors";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
const HomePage = lazy(() => import("@/pages/HomePage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));
const Login = lazy(() => import("@/pages/LoginPage"));
const TasksPage = lazy(() => import("@/pages/TasksPage"));
const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout"));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(AuthCurrent())
  }, [dispatch]);

  return (
    <div>
      {isRefreshing ? <div>Loading...</div> : (<Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<RestrictedRoute
            component={<Login />}
          navigateTo="/tasks"/>} />
          <Route path="/register" element={<RestrictedRoute
            component={<RegisterPage />}
            navigateTo="/tasks"/>
            } />
          <Route path="/tasks" element={<PrivateRoute
            navigateTo="/login"
            component={<TasksPage />}/>} />
        </Route>
      </Routes>)}
    </div>
  );
};
