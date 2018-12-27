import React from "react";
import "../../styles/css/about.css";

const AboutPage = props => {
  const name = props.name ? props.name : "Stas Rudevitsky";
  return (
    <div className="col-sm-12">
      <div className="container">
        <h1 className="display-4">{name}</h1>
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
      </div>
    </div>
  );
};
export default AboutPage;
