import React, { Component } from "react";
import "../../styles/css/singleItem.css";
import { Card } from "../portfolio-board/card/card-componets/porfolio-card";

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
