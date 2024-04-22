import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./Navbar.module.css";
import Logo from "../Logo/Logo";

function Navbar() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={css.box}>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <p className={css.title}>Hello, {user.name}!</p>
      <ul className={css.list}>
        <li>
          <NavLink className={css.item} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.item} to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
      <button className={css.btn} onClick={() => dispatch(logout())}>
        Log out
      </button>
    </div>
  );
}

export default Navbar;