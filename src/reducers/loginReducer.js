const initialState = {
  loggedIn: false,
  isSpinnerActive: false
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "logIn":
      return { ...state, loggedIn: false };
    case "LOGIN_PENDING":
      return { ...state, loggedIn: false, isSpinnerActive: true };
    case "LOGIN_SUCCESS":
      return { ...state, loggedIn: true, isSpinnerActive: false };
    default:
      return state;
  }
}
