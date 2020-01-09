import React from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as Yup from "yup";
import RegisterHeader from "./RegisterHeader";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
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

const Container = styled.div`
  background: #88304E;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  min-height: 803px;
  h2 {
    font-size: 3.5rem;
  }
`

const FormContainer = styled.div`
    background: #522546;
    border-radius: 10px;
    color: white;
    width: 25%;
    padding: 25px;
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
      font-size: 15px;
    }

    button {
      background: #311D3F;
      border: none;
      border-radius: 10px;
      color: white;
      font-size: 2rem;
      margin-top: 10px;
      padding: 11px 30px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`

const inputStyles = makeStyles(() => ({
  root: {
    '& label.Mui-focused': {
      color: '#88304E',
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

const Register = () => {
  const spacing = useStyles();
  const input = inputStyles();
  return (
    <Container>
      <RegisterHeader />
      <FormContainer>
        <Form className={spacing.root}>
          <h2>Register</h2>
          <Field className={input.root} type="text" name="first_name" label="First Name" variant="outlined" component={TextField} />
          <Field className={input.root} type="text" name="last_name" label="Last Name" variant="outlined" component={TextField} />
          <Field className={input.root} type="text" name="username" label="Username" variant="outlined" component={TextField} />
          <Field className={input.root} type="text" name="email" label="Email" variant="outlined" component={TextField} />
          <Field className={input.root} type="password" name="password" label="Password" variant="outlined" component={TextField} />
          <Field className={input.root} type="text" name="city" label="City" variant="outlined" component={TextField} />
        </Form>
        <button type="submit">Submit</button>
      </FormContainer>
    </Container>
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
      .then(() => {
        props.history.push("/login");
      })
      .catch(err => {
        console.log("error registering: ", err);
      });
  }
})(Register);

export default withRouter(RegisterForm);