/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
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
import "./LoginForm.scss";

const LoginForm = () => {
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
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 2000);
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit} className="form pl-5 py-2">
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
            <Col xs={10}>
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

export default LoginForm;
