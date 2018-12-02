import React, { Component } from "react";
import { Link } from "react-router-dom";
export function CartLink(data) {
  const items = data.itemsInCart;
  return (
    <Link className="nav-link" to="/cart">
      My Cart
      <span className="fa-stack fa-1x cart-icon">
        <i className="fa fa-cart-plus" aria-hidden="true" />
        <strong className="fa-stack-1x cart-text">{items}</strong>
      </span>
    </Link>
  );
}
