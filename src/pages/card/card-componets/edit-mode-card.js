import React, { Component } from "react";

export function EditModeCard(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12">
          <input
            className="form-control card-title"
            type="text"
            placeholder="Edit Title"
            onChange={event => {
              props.handleTitleChange(event);
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 card-text">
          <textarea
            className="form-control"
            rows="5"
            type="text"
            placeholder="Edit Description"
            onChange={event => {
              props.handleDescriptionChange(event);
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3 button-save">
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
