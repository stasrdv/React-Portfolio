import React, { Component } from "react";
import { Card } from "./card-componets/porfolio-card";
import "./css/portfoliob-board.css";
import jsonData from "./data.json";

const INITIAL_STATE = {
  cardsList: jsonData
};

export class PorfolioBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.buyItem = this.buyItem.bind(this);
  }

  buyItem(singleItem) {
    this.props.buyItem(singleItem);
  }
  render() {
    const cardsList = this.state.cardsList;
    return (
      <div className="jumbotron board">
        <div className="row">
          {cardsList.map(singleCard => (
            <Card
              {...{ key: singleCard.id, ...singleCard }}
              buyItem={this.buyItem}
            />
          ))}
        </div>
      </div>
    );
  }
}
