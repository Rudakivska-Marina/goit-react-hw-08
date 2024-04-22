import { Hourglass } from "react-loader-spinner";
import css from "./Loader.module.css";

export function Loader() {
  return (
    <div className={css.loader}>
      <Hourglass height="60" width="60" color="#0093E9" />
    </div>
  );
}