import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";
import LoginHeader from "./LoginHeader"
import { TextField } from "formik-material-ui";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 250,
    },
  },
}));

const Wrapper = styled.div`
  background: #88304E;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  min-height: 803px;
`

const FormContainer = styled.div`
  background: #522546;
  border-radius: 10px;
  width: 30%;
  padding: 100px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
  Form {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 2rem;
  }

  label {
    color: white;
    font-size: 1.5rem;
  }

  button {
    background: #311D3F;
    border: none;
    border-radius: 10px;
    color: #FFF;
    font-size: 2rem;
    margin-top: 10px;
    padding: 11px 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`

const inputStyles = makeStyles(() => ({
  root: {
    '& label.Mui-focused': {
      color: '#FFF',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: "2px solid",
        borderColor: "#FFF",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      },
      '&:hover fieldset': {
        borderColor: "#311D3F"
      },
      '&.Mui-focused fieldset': {
        borderColor: "#311D3F",
      }
    }
  }
}))

const Login = () => {
  const spacing = useStyles();
  const input = inputStyles();
  return (
    <Wrapper>
      <LoginHeader />
      <FormContainer>
        <Form className={spacing.root}>
          <h2>Login</h2>
          <Field className={input.root}
            type="text"
            name="username"
            label="Username"
            variant="outlined"
            component={TextField}
          />
          <Field className={input.root}
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            component={TextField}
          />
          <button type="submit">Login</button>
        </Form>
      </FormContainer>
    </Wrapper >
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


})(Login);

export default (FormikForm);
