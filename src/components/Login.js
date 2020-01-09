import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const LoginForm = styled.div`
  .form {
    background-color: #e5e5e5;
  }

  .field1 {
    //position: absolute;
    width: 194px;
    height: 44px;

    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .field2 {
    //position: absolute;
    width: 194px;
    height: 44px;

    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .usr {
    position: absolute;
    width: 175px;
    height: 49px;
    left: 632px;
    top: 361px;

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .pw {
    position: absolute;
    width: 163px;
    height: 49px;
    left: 638px;
    top: 525px;

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .btn3 {
    position: absolute;
    width: 316px;
    height: 92px;
    left: 562px;
    top: 696px;

    background: #311d3f;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
`;

const Login = ({ values, errors, touched, status }) => {
  return (
    <LoginForm className="form">
      <Form>
        <label className="usr" htmlFor="username">
          Username
          <Field
            className="field1"
            id="username"
            type="text"
            name="username"
            placeholder="username"
          />
          {touched.username && errors.username && (
            <p className="errors">{errors.username}</p>
          )}
        </label>
        <label className="pw" htmlFor="password">
          Password
          <Field
            className="field2"
            id="password"
            type="password"
            name="password"
            placeholder="password"
          />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
        </label>
        <button className="btn3" type="submit">
          Login
        </button>
      </Form>
    </LoginForm>
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
    axiosWithAuth()
      .post("/auth/login", values)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("message", res.data.message);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
})(Login);

export default FormikForm;
