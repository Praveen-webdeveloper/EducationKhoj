import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
// import "../../assets/css/style_1.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../assets/images/logo.png";
import advertisementBanner from "../../assets/images/advertisementBanner.jpeg";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid navHeader">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <Link to="/" className="text-light">
                <i className="fa fa-clock-o"></i>&nbsp;&nbsp;&nbsp;Friday, 5
                January 2018
              </Link>
              <div className="d-inline-block position-relative">
                <a href="#" className="treding_btn">
                  Trending
                </a>
                <div className="treding_triangle_position position-absolute"></div>
              </div>
              <div className="marquee">
                
                <div>
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                  <span>
                    You spin me right round, baby. Like a record, baby.
                  </span>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 fh5co_padding_menu">
              <img src={logo} alt="img" className="fh5co_logo_width" />
            </div>
            <div className="col-12 col-md-9 align-self-center fh5co_mediya_right">
              <img src={advertisementBanner} alt="advertisementBanner" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mainNav  py-1">
        <nav className="navbar navbar-expand-lg navbar-toggleable-md navbar-light bg-body-tertiary px-5">
          <button
            className="navbar-toggler navbar-toggler-right mt-3"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars"></span>
          </button>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="img" className="mobile_logo_width" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="News"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-style" : ""}`
                  }
                >
                  News <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="Jobs"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-style" : ""}`
                  }
                >
                  Jobs <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="Interviews"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-style" : ""}`
                  }
                >
                  Interviews <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="Contact"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-style" : ""}`
                  }
                >
                  Contact <span className="sr-only">(current)</span>
                </NavLink>
              </li>
            </ul>
            <Link
              className="link-offset-2 link-underline link-underline-opacity-0 text-light-hover text-dark"
              to="Login"
            >
              <button type="button" className="btn login">
                Login
              </button>
            </Link>
          </div>
        </nav>
        {/* </div> */}
      </div>
    </>
  );
};

export default Navbar;
