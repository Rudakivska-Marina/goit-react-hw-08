import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? <Navigate to="/login" /> : children;
}

export default PrivateRoute;