import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { NavLink, useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Navbar,
  NavItem,
  Nav,
  Form,
  Button,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import style from "./Nav.module.scss";

export default function NavView(props) {
  const { isLoggedIn, getUserFromToken } = props;
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef();
  const history = useHistory();

  const handleClick = (e) => {
    if (!navRef.current.contains(e.target)) setExpanded(false);
  };

  useEffect(() => {
    if (!isLoggedIn && localStorage.getItem("token") !== null)
      getUserFromToken();
    document.addEventListener("click", handleClick, false);

    return () => {
      document.removeEventListener("click", handleClick, false);
    };
  });

  const validationSearchSchema = Yup.object({
    search: Yup.string()
      .max(40, "Max of 40 characters allowed")
      .matches(/^\w+$/i,'Must be 1 word containg no symbols')
      .required("Required")
  });

  return (
    <Navbar
      collapseOnSelect
      variant="dark"
      expand="lg"
      expanded={expanded}
      className={`${style.bgColor}`}
      ref={navRef}
    >
      <NavLink
        activeClassName={style.activeLink}
        className={`navbar-brand ${style.navColor}`}
        to="/"
        onClick={() => setExpanded(false)}
      >
        Community Hashtags
      </NavLink>

      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className={`${style.navColor}`}
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav variant="dark" className="mr-auto">
          <NavItem>
            <NavLink
              activeClassName={style.activeLink}
              className={`nav-link ${style.navColor}`}
              to="/"
              onClick={() => setExpanded(false)}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              activeClassName={style.activeLink}
              className={`nav-link ${style.navColor}`}
              to="/categories"
              onClick={() => setExpanded(false)}
            >
              Categories
            </NavLink>
          </NavItem>
          <NavItem>
            {!isLoggedIn ? (
              <NavLink
                activeClassName={style.activeLink}
                className={`nav-link ${style.navColor}`}
                to="/login"
                onClick={() => setExpanded(false)}
              >
                Login
              </NavLink>
            ) : (
              <NavLink
                activeClassName={style.activeLink}
                className={`nav-link ${style.navColor}`}
                to="/mypage"
                onClick={() => setExpanded(false)}
              >
                My Page
              </NavLink>
            )}
          </NavItem>
        </Nav>
        <Formik
          initialValues={{
            search: ""
          }}
          validationSchema={validationSearchSchema}
          onSubmit={(values) => history.push({
            pathname: "/search",
            search: `?name=${values.search.toLowerCase()}`
          })}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit} inline className=" my-2 my-lg-0">
              <FormGroup controlId="search">
                <div>
                <FormControl
                  name="search"
                  className="mr-sm-2"
                  type="text"
                  placeholder="Search by hashtag"
                  aria-label="Search"
                  isValid={formik.touched.search && !formik.errors.search}
                  isInvalid={formik.touched.search && formik.errors.search}
                  {...formik.getFieldProps("search")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.search}
                </Form.Control.Feedback>
                </div>
              </FormGroup>
              <span className="d-inline-block">
                <Button
                  size="lg"
                  variant="outline-success"
                  className="my-2 my-sm-0 ml-3 mb-4"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Search
                </Button>
              </span>
            </Form>
          )}
        </Formik>
      </Navbar.Collapse>
    </Navbar>
  );
}

NavView.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
