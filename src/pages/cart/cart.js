import React, { Component } from "react";
import { Card } from "../portfolio-board/card/card-componets/porfolio-card";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardsList: this.props.items };
    this.deleteItem = this.deleteItem.bind(this);
  }

  findIndex(itemID) {
    return this.state.cardsList.findIndex(cardItem => cardItem.id === itemID);
  }

  deleteItem = itemID => {
    const index = this.findIndex(itemID);
    if (index !== -1) {
      this.state.cardsList.splice(index, 1);
      this.setState({ cardsList: this.state.cardsList });
      this.props.onIntemDelete(this.state.cardsList);
    }
  };

  render() {
    const cardsList = this.state.cardsList;
    return (
      <div className="jumobtron board">
        <div className="row justify-content-center">
          {cardsList.map(singleCard => (
            <Card
              deleteItem={this.deleteItem}
              isCartMode={true}
              {...{ key: singleCard.id, ...singleCard }}
            />
          ))}
        </div>
      </div>
    );
  }
}
