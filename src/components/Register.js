import React from "react";
import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as Yup from "yup";

const Register = ({ values, errors, touched }) => {
  return (
    <div>
      <h2>Register</h2>
      <Form>
        <label>
          First Name
          <Field type="text" name="first_name" placeholder="Enter First Name" />
        </label>
        <label>
          Last Name
          <Field type="text" name="last_name" placeholder="Enter Last Name" />
        </label>
        <label>
          Username
          <Field type="text" name="username" placeholder="Enter Username" />
        </label>
        <label>
          Email
          <Field type="text" name="email" placeholder="Enter Email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" placeholder="Enter Password" />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </label>
        <label>
          City
          <Field type="text" name="city" placeholder="Enter Your City" />
        </label>
        <button type="submit">Submit</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </div>
  );
};

const RegisterForm = withFormik({
  mapPropsToValues(props) {
    return {
      username: props.username || "",
      password: props.password || "",
      first_name: props.first_name || "",
      last_name: props.last_name || "",
      city: props.city || "",
      email: props.email || ""
    };
  },
  validationSchema: Yup.object().shape({
    password: Yup.string().required()
  }),
  handleSubmit(values, { props }) {
    console.log("values", values);

    axiosWithAuth()
      .post("/auth/register", values)
      .then(res => {
        console.log(res);
        props.history.push("/login");
      })
      .catch(err => {
        console.log("error registering: ", err);
      });
  }
})(Register);

export default RegisterForm;
