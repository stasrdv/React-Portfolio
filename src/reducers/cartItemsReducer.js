export default function cartItemsReducer(state = [], action) {
  switch (action.type) {
    case "UPDATE_ITEMS":
      return action.payload;
    default:
      return state;
  }
}
