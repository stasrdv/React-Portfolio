import React, { Component } from "react";

export function CardFooter(props) {
  const directProps = props.props;
  if (!directProps.isCartMode) {
    return (
      <React.Fragment>
        <div className="card-footer">
          <a href={directProps.url} className="card-link">
            Check Now
          </a>
          <div className="row control-buttons">
            <div className="col-sm-6">
              <button
                type="button"
                className="btn btn-warning btn-sm align-self-end"
                onClick={props.buyItem}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="card-footer">
          <a href={directProps.url} className="card-link">
            Check Now
          </a>
          <div className="row control-buttons">
            <div className="col-sm-6">
              <button
                type="button"
                onClick={props.deleteItem}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
