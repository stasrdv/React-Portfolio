import React, { Component } from "react";
import "./css/singleItem.css";
import { Card } from "./card-componets/porfolio-card";

export function SingleItem(data) {
  const directProps = data.location.props;
  return (
    <div className="jumbotron single-item">
      <div className="row justify-content-center">
        <Card {...{ key: directProps.id, ...directProps }} />
      </div>
    </div>
  );
}
