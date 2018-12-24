import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../../styles/css/portfoliob-board.css";
import { ImgTop } from "./img-top";
import { CardDisplayBody } from "./card-body";
import { EditModeCard } from "./edit-mode-card";
import { CardFooter } from "./card-footer";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      isEditMode: false
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);

    this.buyItem = this.buyItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const cardData = Object.assign({
      title: this.state.title,
      id: this.props.id,
      description: this.state.description
    });
    this.props.handleToUpdate(cardData);
  }

  handleItemDelete() {
    this.props.removeCard(this.props.id);
  }

  buyItem() {
    const cardData = Object.assign({
      title: this.props.title,
      id: this.props.id,
      description: this.props.description,
      url: this.props.url,
      img: this.props.img
    });
    this.props.buyItem(cardData);
  }

  deleteItem() {
    const itemId = this.props.id;
    this.props.deleteItem(itemId);
  }

  render() {
    const cardProps = this.props;
    this.ActiveModeFragment = !this.state.isEditMode
      ? CardDisplayBody
      : EditModeCard;

    return (
      <form className="col-sm-2 card" onSubmit={this.handleSubmit}>
        <Link to={{ pathname: `/product/${cardProps.id}` }}>
          <ImgTop img={cardProps.img} />
        </Link>
        <div className="card-body">
          <div className="form-group" />
          <this.ActiveModeFragment
            props={cardProps}
            handleTitleChange={this.handleTitleChange}
            handleDescriptionChange={this.handleDescriptionChange}
          />
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
