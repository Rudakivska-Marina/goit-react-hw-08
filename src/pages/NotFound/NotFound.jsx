import { Link } from "react-router-dom";
import css from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={css.NotFound}>
      <p className={css.text}>Page not found</p>
      <Link className={css.link} to="/">
        Go to home page
      </Link>
    </div>
  );
}

export default NotFound;