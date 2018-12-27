import React from "react";
import { Card } from "../../components/card/porfolio-card";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cardsList = this.props.cartItems;
    return (
      <div className="jumobtron board">
        <div className="row">
          {cardsList.map(singleCard => (
            <Card
              {...this.props}
              isCartMode={true}
              {...{ key: singleCard.id, ...singleCard }}
            />
          ))}
        </div>
      </div>
    );
  }
}
