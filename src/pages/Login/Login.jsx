import { useDispatch } from "react-redux";
import MainForm from "../../components/MainForm/MainForm";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import css from "./Login.module.css";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  password: yup
    .string()
    .trim()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("fild Required!"),
  email: yup
    .string()
    .email()
    .trim()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("fild Required!"),
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submit(values, actions) {
    dispatch(login(values))
      .unwrap()
      .then((res) => navigate("/"))
      .catch((error) => alert(error.message));
    actions.resetForm();
  }

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div className={css.box}>
      <MainForm
        title={"Login"}
        onSubmit={submit}
        initialValues={initialValues}
        validationSchema={SignupSchema}
      />
    </div>
  );
}

export default Login;