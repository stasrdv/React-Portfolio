export function BuyNewItem(_item) {
  return {
    type: "BUY_ITEMS",
    payload: {
      items: _item
    }
  };
}
