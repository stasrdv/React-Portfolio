import React, { Component } from "react";
import { Card } from "./porfolio-card";
import "./css/portfoliob-board.css";
import jsonData from "./data.json";

const INITIAL_STATE = {
  cardsList: jsonData
};

export class PorfolioBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  handleToUpdate = cardData => {
    const index = this.findIndex(cardData.id);
    let _cardsList = this.state.cardsList;
    _cardsList[index].title = cardData.title;
    _cardsList[index].description = cardData.description;
    this.updateState(_cardsList);
  };

  removeCard = itemID => {
    const index = this.findIndex(itemID);
    if (index !== -1) {
      this.state.cardsList.splice(index, 1);
      this.updateState(this.state.cardsList);
    }
  };

  findIndex(itemID) {
    return this.state.cardsList.findIndex(cardItem => cardItem.id === itemID);
  }
  updateState(_cardsList) {
    this.setState({ cardsList: _cardsList });
  }

  render() {
    let cardsList = this.state.cardsList;
    return (
      <div className="col-sm-10 board">
        <div className="row">
          {cardsList.map(singleCard => (
            <Card
              handleToUpdate={this.handleToUpdate}
              removeCard={this.removeCard}
              key={singleCard.id}
              title={singleCard.title}
              description={singleCard.description}
              url={singleCard.url}
              img={singleCard.img}
              id={singleCard.id}
            />
          ))}
        </div>
      </div>
    );
  }
}
