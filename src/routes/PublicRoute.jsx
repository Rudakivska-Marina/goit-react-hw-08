import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useSelector } from "react-redux";

function PublicRoute({ redirectTo, children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return children;
  } else {
    return <Navigate to={redirectTo} />;
  }
}

export default PublicRoute;