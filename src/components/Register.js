import React from "react";
import { withFormik, Form, Field } from "formik"
import { Link } from "react-router-dom";

const Register = props => {
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
          <Field type="text" name="first_name" placeholder="Enter Last Name" />
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
          <Field type="text" name="password" placeholder="Enter Password" />
        </label>
        <label>
          City
          <Field type="text" name="city" placeholder="Enter Your City" />
        </label>
        <button type="submit">Submit</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </Form>
    </div>
  );
};

const RegisterForm = withFormik({
  mapPropsToValues(props) {
    return {
      first_name: props.first_name || "",
      last_name: props.last_name || "",
      username: props.username || "",
      email: props.email || "",
      password: props.password || "",
      city: props.city || ""
    };

  }
})(Register)

export default RegisterForm;
