export function BuyNewItem(item) {
  return {
    type: "BUY_ITEMS",
    payload: item
  };
}

export function DeleteItem(items) {
  return {
    type: "DELETE_ITEM",
    payload: items
  };
}
