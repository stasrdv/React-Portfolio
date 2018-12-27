import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { VerticalNavbar } from "./components/vertical-navbar/vertical-navbar";
import { Spinner } from "./components/spinner/spinner";
import { PorfolioBoard } from "./components/portfolio-board/portfoliob-board";
import SingleItem from "./components/single-item/singleItem";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about/about";
import ContactPage from "./pages/contact/contact";
import { Cart } from "./pages/cart/cart";

import "./App.css";

import { connect } from "react-redux";
import { logInAction } from "./reducers/actions/login-actions";
import { buyNewItem } from "./reducers/actions/cart-items-actions";
import { deleteItem } from "./reducers/actions/cart-items-actions";

class App extends React.Component {
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.isUserLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );

    return (
      <Router>
        <Route
          render={({ location, history }) => (
            <div className="wrapper">
              <Spinner {...this.props} />
              <VerticalNavbar {...this.props} history={history} />
              <div className="content">
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/contact" component={ContactPage} />
                  <PrivateRoute
                    path="/products"
                    component={() => <PorfolioBoard {...this.props} />}
                  />
                  <PrivateRoute
                    path="/product"
                    component={() => (
                      <SingleItem location={location} {...this.props} />
                    )}
                  />
                  <PrivateRoute
                    path="/cart"
                    component={() => <Cart {...this.props} />}
                  />
                </Switch>
              </div>
            </div>
          )}
        />
      </Router>
    );
  }
}

const mapActionsToProps = {
  logIn: logInAction,
  deleteItem: deleteItem,
  buyNewItem: buyNewItem
};

const mapStateToProps = state => ({
  items: state.items,
  isUserLoggedIn: state.isLoggedInAction.loggedIn,
  isSpinnerActive: state.isLoggedInAction.isSpinnerActive,
  cartItems: state.cartItems
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
