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
  Alert,
  Spinner
} from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import _ from 'lodash';
import style from"./RegisterForm.module.scss";

const RegisterForm = (props) => {
  const {registerUser, error, formStatus} =props

  const validationRegisterSchema = Yup.object({
    firstName: Yup.string()
      .max(50, "Only 50 characters allowed")
      .required("Required"),
    lastName: Yup.string()
      .max(50, "Only 50 characters allowed")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    username: Yup.string()
      .matches(/^([A-Za-z]+\d*)$/i, "Can only contain alphabetic characters can be followed by numbers")
      .min(6, "Minimum of 6 characters")
      .max(40, "Max of 40 characters allowed")
      .required("Required"),
    password: Yup.string()
      .matches(/^([A-Za-z]+\d+)$/i, "Must only contain alphabetic characters and followed by numbers")
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
      onSubmit={(values) => registerUser(values)}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit} className={style.form}>
          {!_.isEmpty(error) && <Alert variant='danger'>Unable to sign up</Alert>}
          <Form.Row>
            <FormGroup as={Col} xs={12} sm={6} controlId="firstName">
              <FormLabel>First Name</FormLabel>
              <Col>
                <FormControl
                  name="firstName"
                  type="text"
                  placeholder="John"
                  isValid={formik.touched.firstName && !formik.errors.firstName}
                  isInvalid={formik.touched.firstName && formik.errors.firstName}
                  {...formik.getFieldProps("firstName")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.firstName}
                </Form.Control.Feedback>
              </Col>
            </FormGroup>

            <FormGroup as={Col} controlId="lastName">
              <FormLabel>Last Name</FormLabel>
              <Col>
                <FormControl
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  isValid={formik.touched.lastName && !formik.errors.lastName}
                  isInvalid={formik.touched.lastName && formik.errors.lastName}
                  {...formik.getFieldProps("lastName")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.lastName}
                </Form.Control.Feedback>
              </Col>
            </FormGroup>
          </Form.Row>

          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <Col md={10}>
              <FormControl
                name="email"
                type="email"
                placeholder="johndoe@gmail.com"
                isValid={formik.touched.email && !formik.errors.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                {...formik.getFieldProps("email")}
              />
              <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
            </Col>
          </FormGroup>

          <FormGroup controlId="username">
            <FormLabel>Username</FormLabel>
            <Col md={8}>
              <FormControl
                name="username"
                type="text"
                placeholder="johndoe1995"
                isValid={formik.touched.username && !formik.errors.username}
                isInvalid={formik.touched.username && formik.errors.username}
                {...formik.getFieldProps("username")}
              />
              <Form.Control.Feedback type="invalid">
                  {formik.errors.username}
            </Form.Control.Feedback>
            </Col>
          </FormGroup>

          <FormGroup controlId="password">
            <FormLabel>Password</FormLabel>
            <Col md={8}>
              <FormControl
                name="password"
                type="password"
                placeholder="password"
                isValid={formik.touched.password && !formik.errors.password}
                isInvalid={formik.touched.password && formik.errors.password}
                {...formik.getFieldProps("password")}
              />
              <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
            </Form.Control.Feedback>
            </Col>
          </FormGroup>
          { formStatus === 'SIGNUP_SUBMITTING' ?
              <Button type="submit" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="sr-only">Loading...</span>
              </Button>
              :
              <Button
                type="submit"
                disabled={!formik.isValid}
              >
                Sign Up
              </Button>
            }
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
