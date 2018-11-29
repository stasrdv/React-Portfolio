import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { SocialLinks } from "./social";
import "./css/vertical-navbar.css";

export function VerticalNavbar(props) {
  return (
    <div className="col-sm-2 verticalNavbar">
      <div className="row">
        <div className="col-sm-12">
          <Link to="/">
            <img
              className="card-img-top"
              src="https://avatars0.githubusercontent.com/u/15888139?s=460&v=4"
            />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <button
            type="button"
            className="btn btn-success .btm-md center-block"
            onClick={() => props.logIn()}
          >
            Log In
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 links">
          <div>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/Products">Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row social">
        {socialMediaData.map(socialMediaObj => (
          <SocialLinks
            key={socialMediaObj.faClassName}
            props={socialMediaObj}
          />
        ))}
      </div>
    </div>
  );
}
const socialMediaData = [
  { url: "https://www.facebook.com/stas.rdv", faClassName: "fa-facebook" },
  { url: "https://www.instagram.com/stasrdv", faClassName: "fa-instagram" },
  {
    url: "https://www.linkedin.com/in/stas-rudevitsky-124805113",
    faClassName: "fa-linkedin"
  }
];
