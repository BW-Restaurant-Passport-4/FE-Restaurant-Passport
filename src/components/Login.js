import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";
import LoginHeader from "./LoginHeader";

const Wrapper = styled.div`
padding-top: 200px;
height: 100vh;
background: #88304E;
`

const Wrapper2 = styled.div`
background: #522546;
border-radius: 20px;
width: 50%;
margin: 0 auto;
padding: 30px;
`
 const LoginForm = styled.div`
.field1 {
display: flex;
margin: 0 auto;
width: 494px;
height: 44px
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.field2 {
display: flex;
margin: 0 auto;
width: 494px;
height: 44px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.usr {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 0 auto;
  // width: 175px;
  // height: 49px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 49px;
  color: white;
   text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);;
}

.pw {
  display: flex;
  
  flex-direction: column;
  margin-bottom: 50px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 49px;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.btn3 {
display: flex;
justify-content: center;
margin: 0 auto;
width: 316px;
height: 92px;
font-style: normal;
font-weight: normal;
font-size: 36px;
background: #522546;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
color: white;
}
`


const Login = ({ values, errors, touched, status }) => {
  return (
   <LoginForm>    
     <LoginHeader />
     <Wrapper>
      <Form>
        <Wrapper2>
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
        <button className="btn3" type="submit">Login</button>
        </Wrapper2>
        </Form>
      </Wrapper> 
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
    username: Yup.string().required("username is mandatory"),
    password: Yup.string().required("password is mandatory")
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
  
 
}) (Login);

export default (FormikForm);
