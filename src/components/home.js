import React, { Component } from "react";
import "./css/home.css";

export function HomePage(props) {
  return (
    <React.Fragment>
      <div className="jumbotron col-sm-10 home-page">
        <div className="container">
          <h1 className="display-4">Welcome to my projects shop</h1>
          <p className="lead">Please Log In to continue</p>
          <hr className="my-4" />
        </div>
      </div>
    </React.Fragment>
  );
}
