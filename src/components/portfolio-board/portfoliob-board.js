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
      <div className="porfolioBoard">
        {cardsList.map(singleCard => (
          <Card {...{ key: singleCard.id, ...singleCard }} {...this.props} />
        ))}
      </div>
    );
  }
}

export default PorfolioBoard;
