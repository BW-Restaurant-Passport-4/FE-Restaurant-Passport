import React, {useState, useEffects} from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const Login = ({values, errors, touched, status}) => {
    console.log("values", values);
    console.log("errors", errors);
    console.log("touched", touched);

    const [login, setLogin] = useState([]);

    // useEffects(() => {
    //   console.log("status has changed", status);
    //   status && setLogin(login => [...login, status])
    // },[status]);
  return (
    <div className="form">
      <Form>
        <label htmlFor="username">
          Username
        <Field
        id="username"
        type="text"
        name="username"
        placeholder="username" />
        {touched.username && errors.username && (<p className = "errors">{errors.username}</p>)}
        </label>
        <label htmlFor="password">
          Password
        <Field
        id="password"
        type="text"
        name="password"
        placeholder="password" />
        {touched.password && errors.password && (<p className ="errors">{errors.password}</p>)}
        </label>
        <button type="submit">Submit</button>
      </Form>
      
      {login.map(log => {
        return (
          <ul key={log.id}>
            <li>Username: {log.username}</li>
            <li>Password: {log.password}</li>
          </ul>
        );
      })}
    </div>
  );
}
const FormikForm = withFormik({
  // props from <AnimalForm /> in app are in props param
    mapPropsToValues(props) {
      // set initial state of form to value from parent component OR the initial value (after || )
      return {
        username: props.username || "",
        password: props.password || "",
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("USERNAME IS MANDATORY"),
      // passing a string in required makes a custom inline error msg
      password: Yup.string().required("PASSWORD IS MANDATORY")
    }),
  
    // passed through props (magically) to Form component in Formik
    // fires when button type=submit is fired
    // values = state of form, formikBag is second param
    // in FormikBag: setStatus (sends API response to AnimalForm) & resetForm (clears form when called)
    handleSubmit(values, { setStatus, resetForm }) {
      console.log("submitting", values);
      axiosWithAuth()
      .post("/auth/login", values)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        // props.history.push("/dashboard");
      })
      .catch(err => {
        // setError(err.message);
        console.log("Error", err)
      });
    }
  }, [])(Login);

export default FormikForm;
