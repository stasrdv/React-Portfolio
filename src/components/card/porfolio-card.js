import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CardDisplayBody } from "./card-componets/card-body";
import { CardFooter } from "./card-componets/card-footer";
import "../../styles/css/porfolio-card.css";

export class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const newTo = {
      pathname: `/product/${this.props.id}`,
      singleItem: this.props
    };
    return (
      <form className="col-sm-2 card">
        <Link to={newTo}>
          <img className="card-img-top" src={this.props.img} />
        </Link>
        <div className="card-body">
          <div className="form-group" />
          <CardDisplayBody {...this.props} />
        </div>
        <CardFooter {...this.props} />
      </form>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
