import { useDispatch } from "react-redux";
import MainForm from "../../components/MainForm/MainForm";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import css from "./Register.module.css";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("fild Required!"),
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

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submit(values, actions) {
    console.log(values);
    dispatch(register(values))
      .unwrap()
      .then((res) => navigate("/"))
      .catch((error) => alert(error.message));
    actions.resetForm();
  }

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <div className={css.box}>
      <MainForm
        title={"Register"}
        onSubmit={submit}
        initialValues={initialValues}
        validationSchema={SignupSchema}
      />
    </div>
  );
}

export default Register;