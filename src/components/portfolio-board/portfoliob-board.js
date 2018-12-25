import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "../card/porfolio-card";
import "../../styles/css/portfoliob-board.css";

export class PorfolioBoard extends React.Component {
  constructor(props) {
    super(props);
    this.buyItem = this.buyItem.bind(this);
  }

  buyItem(newelement) {
    this.props.props.updateCartItems(newelement);
  }

  render() {
    const cardsList = this.props.props.items;
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

export default PorfolioBoard;
