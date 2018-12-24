export default function cartItemsReducer(state = [], action) {
  switch (action.type) {
    case "BUY_ITEMS":
      return [...state, action.payload];
    case "DELETE_ITEM":
      return [...state];
    default:
      return state;
  }
}
