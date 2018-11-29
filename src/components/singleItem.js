import React, { Component } from "react";
import "./css/singleItem.css";
import { Card } from "./porfolio-card";

export function SingleItem(data) {
  const directProps = data.location.props;
  return (
    <div className="col-sm-10 single-item">
      <div className="row">
        <Card {...{ key: directProps.id, ...directProps }} />
      </div>
    </div>
  );
}
