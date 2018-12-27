import React from "react";
import { CardDeleteMode } from "./card.delete";
import { CardBuyMode } from "./card-buy";

export function CardFooter(props) {
  let ActiveFooter = "";
  if (props.isCartMode) {
    ActiveFooter = CardDeleteMode;
  } else {
    ActiveFooter = CardBuyMode;
  }
  return <ActiveFooter {...props} />;
}
