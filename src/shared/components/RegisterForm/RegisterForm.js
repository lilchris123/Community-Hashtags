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
import {useHistory} from 'react-router-dom';
import style from"./RegisterForm.module.scss";

const RegisterForm = (props) => {
  const {registerUser} =props
  const history= useHistory();

  const validationRegisterSchema = Yup.object({
    firstName: Yup.string()
      .max(50, "Only 50 characters allowed")
      .required("Required"),
    lastName: Yup.string()
      .max(50, "Only 50 characters allowed")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
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
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
      }}
      validationSchema={validationRegisterSchema}
      onSubmit={(values, { setSubmitting }) => {
          registerUser(values);
          setSubmitting(false);
          history.push('/login');
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit} className={style.form}>
          <Form.Row>
            <FormGroup as={Col} controlId="firstName">
              <FormLabel>First Name</FormLabel>
              <Col>
                <FormControl
                  name="firstName"
                  type="text"
                  placeholder="John"
                  {...formik.getFieldProps("firstName")}
                />
              </Col>
            </FormGroup>
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}

            <FormGroup controlId="lastName">
              <FormLabel>Last Name</FormLabel>
              <Col>
                <FormControl
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  {...formik.getFieldProps("lastName")}
                />
              </Col>
            </FormGroup>
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
          </Form.Row>

          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <Col sm={8}>
              <FormControl
                name="email"
                type="email"
                placeholder="johndoe@gmail.com"
                {...formik.getFieldProps("email")}
              />
            </Col>
          </FormGroup>
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <FormGroup controlId="username">
            <FormLabel>Username</FormLabel>
            <Col sm={8}>
              <FormControl
                name="username"
                type="text"
                placeholder="johndoe1995"
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
          
          <Button
            type="submit"
            disabled={formik.isSubmitting || !formik.isValid}
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};

RegisterForm.propTypes ={
  registerUser: PropTypes.func.isRequired,
  user: PropTypes.shape()
}
RegisterForm.defaultProps ={
  user: {}
}
export default RegisterForm;
