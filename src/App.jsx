import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { fetchContacts } from "./redux/contacts/operations";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { useLocation } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  const location = useLocation();

  const link = location.pathname;

  const dispatch = useDispatch();

  const [locationLink, setTheLink] = useState("");

  useEffect(() => {
    dispatch(refreshUser()), setTheLink(link);
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
      <Route
        path="login"
        element={
          <PublicRoute redirectTo={locationLink}>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="register"
        element={
          <PublicRoute redirectTo={locationLink}>
            <Register />
          </PublicRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;