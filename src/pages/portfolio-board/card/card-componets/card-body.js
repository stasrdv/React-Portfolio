import React, { Component } from "react";

export function CardDisplayBody(props) {
  const directProps = props.props;
  return (
    <React.Fragment>
      <h5 className="card-title">{directProps.title}</h5>
      <p className="card-text">{directProps.description}</p>
    </React.Fragment>
  );
}
