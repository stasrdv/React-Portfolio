import React from "react";

export function CardBuyMode(props) {
  return (
    <>
      <div className="card-footer">
        <a href={props.url} className="card-link">
          Check Now
        </a>
        <div className="row control-buttons">
          <div className="col-sm-6">
            <button
              type="button"
              className="btn btn-warning btn-sm align-self-end"
              onClick={() => props.buyNewItem(props)}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
