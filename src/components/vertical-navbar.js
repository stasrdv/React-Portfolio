import React, { Component } from "react";
import "./css/vertical-navbar.css";
import { SocialLinks } from "./social";

export function VerticalNavbar(props) {
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
              className="btn btn-info .btm-md"
              onClick={() => props.toggleDisplay()}
            >
              About Me
            </button>
          </div>
        </div>
        <div className="row social">
          <SocialLinks
            url={"https://www.facebook.com/stas.rdv"}
            faClassName={"fa-facebook"}
          />
          <SocialLinks
            url={"https://www.instagram.com/stasrdv"}
            faClassName={"fa-instagram"}
          />
          <SocialLinks
            url={"https://www.linkedin.com/in/stas-rudevitsky-124805113"}
            faClassName={"fa-linkedin"}
          />
        </div>
      </div>
    </div>
  );
}

/* <div className="col-sm-4">
            <a
              href="https://www.instagram.com/stasrdv"
              className="fa fa-instagram"
            />
          </div>
          <div className="col-sm-4">
            <a
              href="https://www.linkedin.com/in/stas-rudevitsky-124805113/"
              className="fa fa-linkedin"
            />
          </div> */
