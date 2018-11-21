import React, { Component } from "react";
import "./css/about.css";

export class AboutPage extends React.Component {
  render() {
    return (
      <div className="jumbotron col-sm-10 about">
        <div className="container">
          <h1 className="display-4">Stas Rudevitsky</h1>
          <p className="lead">
            Web and Mobile developer, 28 years old from Tel-Aviv.
            <a
              className="btn btn-primary btn-sm"
              href="https://github.com/stasrdv"
              role="button"
            >
              My Github
            </a>
          </p>
          <hr className="my-4" />
          <p className="lead">
            My passionate hobby is Cooking
            <span className="fa fa-cutlery" />
          </p>
          <img
            src="https://scontent.fsdv1-1.fna.fbcdn.net/v/t1.0-9/36062955_1988795404472686_6474415611035254784_n.jpg?_nc_cat=104&_nc_ht=scontent.fsdv1-1.fna&oh=39645021ccd662bea8f8f864981b5d5d&oe=5CB08044"
            className="img-responsive center-block"
          />
        </div>
      </div>
    );
  }
}
