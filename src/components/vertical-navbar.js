import React, { Component } from "react";
import "./css/vertical-navbar.css";
import { SocialLinks } from "./social";

export function VerticalNavbar(props) {
  const socialMediaData = [
    { url: "https://www.facebook.com/stas.rdv", faClassName: "fa-facebook" },
    { url: "https://www.instagram.com/stasrdv", faClassName: "fa-instagram" },
    {
      url: "https://www.linkedin.com/in/stas-rudevitsky-124805113",
      faClassName: "fa-linkedin"
    }
  ];

  return (
    <div className="col-sm-2 verticalNavbar">
      <div className="row">
        <div className="col-sm-12">
          <img
            className="card-img-top"
            src="https://avatars0.githubusercontent.com/u/15888139?s=460&v=4"
          />
        </div>
        <div className="row">
          <div className="col-sm-2 col-centered">
            <button
              type="button"
              className="btn btn-success .btm-md"
              onClick={() => props.toggleDisplay()}
            >
              Log In
            </button>
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
    </div>
  );
}
