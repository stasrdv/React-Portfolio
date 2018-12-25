const initialState = {
  loggedIn: false
};

export default function loginBtnReducer(state = initialState, action) {
  switch (action.type) {
    case "loginIsClicked":
      return { loggedIn: true };
    default:
      return state;
  }
}
