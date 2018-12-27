import React, { Component } from "react";

export function CardDisplayBody(props) {
  return (
    <React.Fragment>
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
    </React.Fragment>
  );
}
