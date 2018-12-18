import React, { Component } from "react";
import "../../styles/css/singleItem.css";
import { Card } from "../card/card-componets/porfolio-card";

const SingleItem = data => {
  const directProps = data.location.props;
  return (
    <div className="jumbotron single-item">
      <div className="row justify-content-center">
        <Card {...{ key: directProps.id, ...directProps }} />
      </div>
    </div>
  );
};
export default SingleItem;
