import React from "react";

export function CardDeleteMode(props) {
  return (
    <>
      <div className="card-footer">
        <a href={props.url} className="card-link">
          Check Now
        </a>
        <div className="row control-buttons">
          <button
            type="button"
            onClick={() => props.deleteItem(props.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
