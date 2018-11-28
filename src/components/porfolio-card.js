import React, { Component } from "react";
import "./css/porfolio-card.css";
import PropTypes from "prop-types";
import { ImgTop } from "./card-componets/img-top";
import { CardDisplayBody } from "./card-componets/card-body";
import { EditModeCard } from "./card-componets/edit-mode-card";
import { CardFooter } from "./card-componets/card-footer";

export class Card extends React.Component {
  ActiveCardFragment;
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
    this.toggleEditMode = this.toggleEditMode.bind(this);
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
    this.toggleEditMode();
  }

  handleItemDelete() {
    this.props.removeCard(this.props.id);
  }
  toggleEditMode() {
    this.setState({ isEditMode: !this.state.isEditMode });
  }

  render() {
    const cardProps = this.props;
    this.ActiveModeFragment = !this.state.isEditMode
      ? CardDisplayBody
      : EditModeCard;
    return (
      <form className="col-sm-3 card" onSubmit={this.handleSubmit}>
        <ImgTop img={cardProps.img} />
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
          handleItemDelete={this.handleItemDelete}
          toggleEditMode={this.toggleEditMode}
        />
      </form>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
