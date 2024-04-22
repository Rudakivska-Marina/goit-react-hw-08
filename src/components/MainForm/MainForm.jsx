import { Field, Form, Formik, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import css from "./MainForm.module.css";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import * as yup from "yup";

function MainForm({ title, onSubmit, initialValues, validationSchema }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.logo}>
            <Logo />
          </div>
          {title === "Register" && (
            <label htmlFor="name" className={css.label}>
              Name
              <Field
                id="name"
                className={css.field}
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
            </label>
          )}

          <label htmlFor="email" className={css.label}>
            Email
            <Field
              className={css.field}
              id="email"
              type="text"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>

          <label htmlFor="password" className={css.label}>
            Password
            <Field
              className={css.field}
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className={css.iconBtn}
            >
              {showPassword ? (
                <AiFillEye className={css.icon} width="50" />
              ) : (
                <AiFillEyeInvisible className={css.icon} />
              )}
            </button>
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </label>

          <div className={css.wrapper}>
            <button className={css.btn} type="submit">
              {title}
            </button>
            {title === "Register" ? (
              <span className={css.span}>
                <p>Don't have an account?</p>
                <NavLink to="/login">Sign in</NavLink>
              </span>
            ) : (
              <span className={css.span}>
                <p>Do you have an account?</p>
                <NavLink className={css.link} to="/register">
                  Сreate an account
                </NavLink>
              </span>
            )}
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default MainForm;