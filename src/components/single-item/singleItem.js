import React, { Component } from "react";
import "../../styles/css/singleItem.css";
import { Card } from "../card/porfolio-card";

export default class SingleItem extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    const cardsList = this.props.props.cartItems;
    return (
      <div className="jumobtron board">
        <div className="row">
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
