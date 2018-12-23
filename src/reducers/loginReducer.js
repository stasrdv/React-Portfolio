export default function loginReducer(state = false, action) {
  switch (action.type) {
    case "logIn":
      return action.payload.isUserLoggedIn;
    default:
      return state;
  }
}
