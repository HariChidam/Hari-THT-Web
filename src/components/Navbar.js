import React from "react";
import { Link } from "react-router-dom";
import "../style/nav.css";
import thtLogo from "../images/tht logo.png";

function Navbar() {

    return (
        <div className="navbar navbar-default fixed-top navbar-expand-sm navbar-light bg-light">
          <div className = "navbar-container">
            <li className = "navbar-item" >
              <Link to="/homepage">
                <img src={thtLogo} height="45" alt="tht-logo" />
              </Link>
            </li>
            <li className = "navbar-item">
              <Link to= "/homepage">
                About Us
              </Link>
            </li>
            <li className = "navbar-item">
              <Link to= "/members">
                Members
              </Link>
            </li>
            <li className = "navbar-item">
              <Link to= "/rush">
                Rush
              </Link>
            </li>
            <li className="navbar-item">
              <Link to= "/faq">
                FAQ
              </Link>
            </li>
            <li className="navbar-item">
              <Link to= "/alumni">
                Alumni
              </Link>
            </li>
          </div>
          <div className = "navbar-container">
            <li className="navbar-item">
                <Link to= "/profile">
                  Profile
                </Link>
            </li>
          </div>
        </div>
    );
}

export default Navbar;