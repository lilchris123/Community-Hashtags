import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink, useHistory } from "react-router-dom";
import {
  Navbar,
  NavItem,
  Nav,
  Form,
  Button,
  FormGroup,
  FormControl,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import style from "./Nav.module.scss";

export default function NavView(props) {
  const { isLoggedIn, getUserFromToken } = props;
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] =useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!isLoggedIn && localStorage.getItem("token") !== null)
      getUserFromToken();
  });

  const handleSearch = () => {
    history.push({
      pathname: "/search",
      search: `?query=${query}`,
    });
  };

  return (
    <Navbar
      collapseOnSelect
      variant="dark"
      expand="lg"
      expanded={expanded}
      className={`${style.bgColor}`}
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
        <Form onSubmit={handleSearch} inline className=" my-2 my-lg-0">
          <FormGroup>
            <FormControl
              className="mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </FormGroup>
          <OverlayTrigger
            overlay={<Tooltip id="tooltip-disabled">In development</Tooltip>}
            placement="bottom"
          >
            <span className="d-inline-block">
              <Button
                size="lg"
                variant="outline-success"
                className="my-2 my-sm-0 ml-3 mb-4"
                type="submit"
                disabled
                style={{ pointerEvents: "none" }}
              >
                Search
              </Button>
            </span>
          </OverlayTrigger>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

NavView.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
