import React, { Component } from "react";
import { Card } from "../card/card-componets/porfolio-card";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardsList: this.props.props.cartItems };
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem = itemID => {
    const index = this.findIndex(itemID);
    if (index !== -1) {
      this.state.cardsList.splice(index, 1);
    }
    const filtered = this.state.cardsList;
    this.props.props.deleteItem(filtered);
  };

  findIndex(itemID) {
    return this.state.cardsList.findIndex(cardItem => cardItem.id === itemID);
  }

  render() {
    const cardsList = this.props.props.cartItems;
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
