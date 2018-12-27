export default function cartItemsReducer(state = [], action) {
  switch (action.type) {
    case "BUY_ITEMS":
      return [...state, action.payload];
    case "DELETE_ITEM":
      const filterdState = state;
      const itemIndex = state.findIndex(item => item.id === action.payload);
      filterdState.splice(itemIndex, 1);
      return [...filterdState];
    default:
      return state;
  }
}
