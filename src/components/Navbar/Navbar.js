import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../image/logo.png";
import Home from "../Home"
const Navbar = () => {
  return (
    <>
      <div className="head-se">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid mx-2">
            <Link className="navbar-brand" to="/">
              <img
                src={logo}
                width="100"
                height="60"
                className="d-inline-block align-top px-2"
                alt=""
              />
              UPRO
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* means */}
            <div
              className="collapse navbar-collapse align-middle"
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto nav_ul align-items-center">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Why Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Resources
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>

                <div className="mx-3 ml-3">
                  <button type="button" className="btn1 mx-2">
                    Bulid on UPRO
                  </button>
                </div>
              </ul>
            </div>
            {/* end */}
          </div>
        </nav>
        <div>
          <Home />
        </div>
      </div>
    </>
  );
};

export default Navbar;
