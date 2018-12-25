import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import { LogInAction } from "./reducers/actions/login-actions";
import { isClicked } from "./reducers/actions/login-clicked-action";
import { BuyNewItem } from "./reducers/actions/cart-items-actions";
import { DeleteItem } from "./reducers/actions/cart-items-actions";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location, history }) => (
            <div className="wrapper">
              <Spinner props={this.props} />
              <VerticalNavbar props={this.props} history={history} />
              <div className="content">
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/contact" component={ContactPage} />
                  <Route
                    path="/products"
                    component={() => <PorfolioBoard props={this.props} />}
                  />
                  <Route
                    path="/product"
                    component={() => <SingleItem location={location} />}
                  />
                  <Route
                    path="/cart"
                    component={() => <Cart props={this.props} />}
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
  logIn: LogInAction,
  isClicked: isClicked,
  deleteItem: DeleteItem,
  updateCartItems: BuyNewItem
};

const mapStateToProps = state => ({
  items: state.items,
  isUserLoggedIn: state.isLoggedInAction.loggedIn,
  isLoginclicked: state.isClicked.loggedIn,
  cartItems: state.cartItems
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
