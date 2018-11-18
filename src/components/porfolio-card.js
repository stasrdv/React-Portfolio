import React, { Component } from "react";
import "./css/porfolio-card.css";
import PropTypes from "prop-types";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      toggleClas: "isEditMode"
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  toggleEditMode() {
    this.state.toggleClas == "isEditMode"
      ? this.setState({ toggleClas: "row" })
      : this.setState({ toggleClas: "isEditMode" });
  }

  render() {
    return (
      <form className="col-sm-3 card" onSubmit={this.handleSubmit}>
        <img className="card-img-top" src={this.props.img} />
        <div className="card-body">
          <div className="form-group" />
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <div className={this.state.toggleClas}>
            <div className="col-sm-12">
              <input
                className="form-control card-title"
                type="text"
                placeholder={this.state.title}
                onChange={this.handleTitleChange}
              />
            </div>
          </div>
          <div className={this.state.toggleClas}>
            <div className="col-sm-12 card-text">
              <textarea
                className="form-control"
                rows="5"
                type="text"
                placeholder={this.state.description}
                onChange={this.handleDescriptionChange}
              />
            </div>
          </div>
          <div className={this.state.toggleClas}>
            <div className="col-sm-3 button-save">
              <button type="submit" className="btn btn-success">
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <a href={this.props.url} className="card-link">
            Check Now
          </a>
          <div className="row">
            <div className="col-sm-6">
              <button
                type="button"
                className="btn btn-warning btn-sm align-self-end"
                onClick={this.toggleEditMode}
              >
                Edit
              </button>
            </div>
            <div className="col-sm-6">
              <button
                type="button"
                onClick={() => this.props.removeCard(this.props.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
