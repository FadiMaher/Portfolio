import React from "react";
import "./Navigation.css";
import { Link, Route, NavLink } from "react-router-dom";
import Footer from "./../Footer/Footer";
import personalImg from "./images/fadi.jpg";
import favicon from "./images/logo.png";
function Navigation() {
  return (
    <React.Fragment>
      <div className="nav-side-menu">
        <div className="logo d-md-block position-relative  d-none d-xl-block d-lg-block ">
        <h2 className="header-name text-center m-0" style={{whiteSpace: "nowrap" , display: "inline-block", fontSize: "20px"}}>Fadi Hlaihel</h2>
          <img src={personalImg} width="100%" alt="personal image" />
        </div>
        <div className="logo d-md-none d-none d-xs-block d-sm-block  ">
          <img src={favicon} style={{ width: "80px" }} alt="favicon am" />
        </div>
        <i
          className="fa fa-bars fa-2x toggle-btn"
          data-toggle="collapse"
          data-target="#menu-content"
        ></i>

        <div className="menu-list">
          <ul id="menu-content" className="menu-content collapse out">
            <li>
              <Link data-aos="fade-down"
                activeclassName="active"
                className="nav-link hoverLine"
                to={{
                  pathname: "/home"
                }}
              >
                HOME
              </Link>
            </li>

            <li
              data-toggle="collapse"
              data-target="#products"
              className="collapsed"
            >
              <Link
                activeclassName="active"
                className="nav-link hoverLine"
                to={{ pathname: "/about" }}
              >
                ABOUT ME
              </Link>
            </li>

            <li
              data-toggle="collapse"
              data-target="#service"
              className="collapsed"
            >
              <Link
                activeclassName="active"
                className="nav-link hoverLine"
                to={{ pathname: "/resume" }}
              >
                SKILLS
              </Link>
            </li>

            <li>
              <Link
                activeclassName="active"
                className="nav-link hoverLine"
                to={{ pathname: "/contact" }}
              >
                CONTACT
              </Link>
            </li>
            <Footer></Footer>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Navigation;
