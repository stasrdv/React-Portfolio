import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Saga
import createSagaMiddleware from "redux-saga";
import { watchAgeUp } from "./sagas/saga";

// Redux
import { Provider } from "react-redux";
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";

import ItemsReducer from "./reducers/itemsReducer";
import cartItemsReducer from "./reducers/cartItemsReducer";
import loginReducer from "./reducers/loginReducer";

const allReducers = combineReducers({
  isUserLoggedIn: loginReducer,
  items: ItemsReducer,
  cartItems: cartItemsReducer
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(watchAgeUp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
