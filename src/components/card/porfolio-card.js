import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/css/porfolio-card.css";
import { ImgTop } from "./card-componets/img-top";
import { CardDisplayBody } from "./card-componets/card-body";
import { CardFooter } from "./card-componets/card-footer";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description
    };

    this.buyItem = this.buyItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  buyItem() {
    this.props.buyItem(this.props);
  }

  deleteItem() {
    this.props.deleteItem(this.props.id);
  }

  render() {
    const cardProps = this.props;

    const newTo = {
      pathname: `/product/${cardProps.id}`,
      singleItem: cardProps
    };
    return (
      <form className="col-sm-2 card">
        <Link to={newTo}>
          <ImgTop img={cardProps.img} />
        </Link>
        <div className="card-body">
          <div className="form-group" />
          <CardDisplayBody props={cardProps} />
        </div>
        <CardFooter
          props={cardProps}
          buyItem={this.buyItem}
          deleteItem={this.deleteItem}
        />
      </form>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
