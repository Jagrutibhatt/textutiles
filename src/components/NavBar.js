import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";

export const NavBar = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <form className="d-flex " role="search">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-dark" type="submit">
              Search
            </button> */}

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              } d-flex align-items-center`}
            >
              <input
                className="form-check-input mx-2 d-flex p-2 my-2"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
                aria-checked="false"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                DarkMode
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = { title: PropTypes.string };

NavBar.defaultProps = {
  title: "set title",
  about: "Set about",
};

export default NavBar;
