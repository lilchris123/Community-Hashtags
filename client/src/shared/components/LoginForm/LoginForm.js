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
import { useHistory } from "react-router-dom";
import style from "./LoginForm.module.scss";
import _ from 'lodash';

const LoginForm = (props) => {
  const {loginUser, error, formStatus} = props;
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
      onSubmit={(values) => {
        const {username, password}= values;
        loginUser({username, password});
    }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit} className={style.form}>
          {!_.isEmpty(error) && <Alert variant='danger'>Unable to login</Alert>}
          <FormGroup controlId="username">
            <FormLabel>Username</FormLabel>
            <Col>
              <FormControl
                name="username"
                type="text"
                placeholder="username"
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
            <Col>
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
          <Form.Row>
            <Col className='d-flex justify-content-center'>
            { formStatus === 'LOGIN_SUBMITTING' ?
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
                Login
              </Button>
            }
            </Col>
            <Col className='d-flex justify-content-center'>
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
