import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = ({ values, errors, touched, status }) => {
  return (
    <div className="form">
      <Form>
        <label htmlFor="username">
          Username
          <Field
            id="username"
            type="text"
            name="username"
            placeholder="username"
          />
          {touched.username && errors.username && (
            <p className="errors">{errors.username}</p>
          )}
        </label>
        <label htmlFor="password">
          Password
          <Field
            id="password"
            type="password"
            name="password"
            placeholder="password"
          />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
const FormikForm = withFormik({
  mapPropsToValues(props) {
    return {
      username: props.username || "",
      password: props.password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("USERNAME IS MANDATORY"),
    password: Yup.string().required("PASSWORD IS MANDATORY")
  }),

  handleSubmit(values, { props, setStatus, resetForm }) {
    console.log("submitting", values);
    axiosWithAuth()
      .post("/auth/login", values)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.message);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
})(Login);

export default FormikForm;
