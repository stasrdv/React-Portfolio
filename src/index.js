import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Saga
import createSagaMiddleware from "redux-saga";
import { watchLogin } from "./sagas/saga";

// Redux
import { Provider } from "react-redux";
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Reducers
import ItemsReducer from "./reducers/itemsReducer";
import cartItemsReducer from "./reducers/cartItemsReducer";
import loginReducer from "./reducers/loginReducer";
import loginBtnReducer from "./reducers/login-btn-reducer";

const allReducers = combineReducers({
  isLoggedInAction: loginReducer,
  isClicked: loginBtnReducer,
  items: ItemsReducer,
  cartItems: cartItemsReducer
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(watchLogin);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
