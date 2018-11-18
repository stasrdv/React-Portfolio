import React, { Component } from "react";
import "./vertical-navbar.css";

export class VerticalNavbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-sm-2 verticalNavbar">
        <span className="glyphicon glyphicon-edit" />
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
                onClick={() => this.props.toggleDisplay("event")}
              >
                About Me
              </button>
            </div>
          </div>
          <div className="row social">
            <div className="col-sm-4">
              <a
                href="https://www.facebook.com/stas.rdv"
                className="fa fa-facebook"
              />
            </div>
            <div className="col-sm-4">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// onClick={() => this.props.removeCard(this.props.id)}
