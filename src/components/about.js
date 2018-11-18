import React, { Component } from "react";
import "./about.css";

export class AboutPage extends React.Component {
  render() {
    return (
      <div className="jumbotron col-sm-10 about">
        <div className="container">
          <h1 className="display-4">Rudevitsky Stas</h1>
          <p className="lead">
            Web and Mobile developer, 28 years old from Tel-Aviv.
          </p>
          <hr className="my-4" />
          <p className="lead">
            <a
              className="btn btn-primary btn-lg"
              href="https://github.com/stasrdv"
              role="button"
            >
              My Github
            </a>
          </p>
        </div>
      </div>
    );
  }
}
