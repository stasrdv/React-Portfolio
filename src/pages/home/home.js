import React, { Component } from "react";
import "../../styles/css/home.css";

export function HomePage(props) {
  return (
    <div className="jumbotron home-page">
      <div className="container">
        <h1 className="display-4">Welcome to my portfolio store</h1>
        <p className="lead">
          The link to products will be available only after login !
        </p>
        <hr className="my-4" />
      </div>
    </div>
  );
}
