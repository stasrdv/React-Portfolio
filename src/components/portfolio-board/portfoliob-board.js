import React from "react";
import { Card } from "../card/porfolio-card";
import "../../styles/css/portfoliob-board.css";

export class PorfolioBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cardsList = this.props.items;
    return (
<<<<<<< HEAD
      <div className="porfolioBoard">
        {cardsList.map(singleCard => (
          <Card {...{ key: singleCard.id, ...singleCard }} {...this.props} />
        ))}
=======
      <div className="board">
        <div className="row">
          {cardsList.map(singleCard => (
            <Card {...{ key: singleCard.id, ...singleCard }} {...this.props} />
          ))}
        </div>
>>>>>>> 7edd01c4e82f70ec3cf62f0d1cf6027ec45b195a
      </div>
    );
  }
}

export default PorfolioBoard;
