import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "../card/card-componets/porfolio-card";
import "../../styles/css/portfoliob-board.css";

export class PorfolioBoard extends React.Component {
  constructor(props) {
    super(props);
    this.buyItem = this.buyItem.bind(this);
  }

  buyItem(singleItem) {
    this.props.buyItem(singleItem);
  }
  render() {
    //const cardsList = this.props.items;
    console.log(this.props);
    return (
      <h1>HEllo</h1>
      // <div className="jumbotron board">
      //   <div className="row">
      //     {cardsList.map(singleCard => (
      //       <Card
      //         {...{ key: singleCard.id, ...singleCard }}
      //         buyItem={this.buyItem}
      //       />
      //     ))}
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps)(PorfolioBoard);
