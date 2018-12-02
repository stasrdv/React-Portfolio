import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { SocialLinks } from "./social";
import { CartLink } from "./cartLink";
import "../css/vertical-navbar.css";

export function VerticalNavbar(data) {
  const itemsInCart = data.pros.cartItems ? data.pros.cartItems.length : 0;
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
      {/* LoginButton */}
      <div className="row justify-content-sm-center">
        <div className="col-sm-6">
          {!data.pros.isUserLoggedIn ? (
            <button
              type="button"
              className="btn btn-success .btm-md login"
              onClick={() => data.logIn()}
            >
              Log In
            </button>
          ) : null}
        </div>
      </div>
      {/* Links */}
      <div className="row">
        <nav className="nav flex-column">
          {data.pros.isUserLoggedIn ? (
            <CartLink itemsInCart={itemsInCart} />
          ) : null}
          <Link className="nav-link" to="/products">
            Products
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </nav>
      </div>
      {/* Social Media */}
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
