const initialState = {
  loggedIn: false
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "logIn":
      return { ...state, loggedIn: false };
    case "ajax-request":
      return { ...state, loggedIn: true };
    default:
      return state;
  }
}
