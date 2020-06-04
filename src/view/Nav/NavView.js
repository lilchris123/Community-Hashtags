import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import style from './Nav.module.scss';

export default function NavView(props) {
  const { isLoggedIn } = props;
  return (
    <nav className={`navbar navbar-expand-lg  ${style.bgColor}`}>
      <NavLink activeClassName={style.activeLink} className={`navbar-brand ${style.navColor}`} to="/">
        Community Hashtags
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink activeClassName={style.activeLink} className={`nav-link ${style.navColor}`} to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName={style.activeLink} className={`nav-link ${style.navColor}`} to="/categories">
              Categories
            </NavLink>
          </li>
          <li className="nav-item">
            {!isLoggedIn ? (
              <NavLink activeClassName={style.activeLink} className={`nav-link ${style.navColor}`} to="/login">
                Login
              </NavLink>
            ) : (
              <NavLink activeClassName={style.activeLink} className={`nav-link ${style.navColor}`} to="/mypage">
                My Page
              </NavLink>
            )}
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

NavView.propTypes ={
  isLoggedIn: PropTypes.bool.isRequired
}
