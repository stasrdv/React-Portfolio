export default function cartItemsReducer(state = [], action) {
  switch (action.type) {
    case "BUY_ITEMS":
      return [...state, action.payload];
    default:
      return state;
  }
}
