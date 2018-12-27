export function buyNewItem(item) {
  return {
    type: "BUY_ITEMS",
    payload: item
  };
}

export function deleteItem(id) {
  return {
    type: "DELETE_ITEM",
    payload: id
  };
}
