/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from 'prop-types';
import {
  Form,
  Col,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import style from "./LoginForm.module.scss";

const LoginForm = (props) => {
  const {loginUser} = props;
  const history = useHistory();

  const handleSignUp = () => {
    history.push("/register");
  };
  const validationLoginSchema = Yup.object({
    username: Yup.string()
      .min(6, "Minimum of 6 characters")
      .max(40, "Max of 40 characters allowed")
      .required("Required"),
    password: Yup.string()
      .min(6, "Minimum of 6 characters")
      .max(40, "Max of 40 characters allowed")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={validationLoginSchema}
      onSubmit={(values, { setSubmitting }) => {
          const {username, password}= values;
          loginUser({username, password});
          setSubmitting(false);
          history.push('/');
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit} className={style.form}>
          <FormGroup controlId="username">
            <FormLabel>Username</FormLabel>
            <Col sm={8}>
              <FormControl
                name="username"
                type="text"
                placeholder="username"
                {...formik.getFieldProps("username")}
              />
            </Col>
          </FormGroup>
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}

          <FormGroup controlId="password">
            <FormLabel>Password</FormLabel>
            <Col sm={8}>
              <FormControl
                name="password"
                type="password"
                placeholder="password"
                {...formik.getFieldProps("password")}
              />
            </Col>
          </FormGroup>
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <Form.Row>
            <Col>
              <Button
                type="submit"
                disabled={formik.isSubmitting || !formik.isValid}
              >
                Login
              </Button>
            </Col>
            <Col>
              <Button
                type="button"
                variant="light"
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
            </Col>
          </Form.Row>
        </Form>
      )}
    </Formik>
  );
};

LoginForm.propTypes={
  loginUser: PropTypes.func.isRequired
}

export default LoginForm;
