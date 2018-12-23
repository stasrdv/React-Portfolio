export function CartItemsActions(_items) {
  return {
    type: "UPDATE_ITEMS",
    payload: {
      items: _items
    }
  };
}
