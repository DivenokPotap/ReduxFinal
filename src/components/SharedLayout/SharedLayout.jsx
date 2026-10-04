import { NavLink, Outlet } from "react-router-dom"
import { selectIsLoggedIn} from "@/redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import css from "./SharedLayout.module.css"
import { AuthLogOut } from "@/redux/auth/authSlice";

const SharedLayout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(AuthLogOut())
    }
    return (
        <div>
            <header>
                <nav className={css.nav}>
                    <NavLink className={css.Link} to="/">Головна</NavLink>
                    {isLoggedIn && <NavLink className={css.Link} to="/tasks">Завдання</NavLink>}
                    {!isLoggedIn && <NavLink className={css.Link} to="/register">Реєсрація</NavLink>}
                    {!isLoggedIn && <NavLink className={css.Link} to="/login">Ввійти</NavLink>}
                    {isLoggedIn && <button className={css.ButtonOut} onClick={handleLogOut}>Вийти</button>}
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default SharedLayout