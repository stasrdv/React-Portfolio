import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { VerticalNavbar } from "./components/vertical-navbar/vertical-navbar";
import { Spinner } from "./components/spinner/spinner";
import { PorfolioBoard } from "./pages/portfolio-board/portfoliob-board";
import SingleItem from "./pages/single-item/singleItem";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about/about";
import ContactPage from "./pages/contact/contact";
import { Cart } from "./pages/cart/cart";
import { withRouter } from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";
import { LogInAction } from "./reducers/actions/login-actions";
import { BuyNewItem } from "./reducers/actions/cart-items-actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.onIntemDelete = this.onIntemDelete.bind(this);
  }

  logIn = () => {
    this.props.logIn();
  };

  onIntemDelete(_cartItems) {
    this.state.updateCartItems(_cartItems);
  }

  render() {
    // const PrivateRoute = ({ component: Component, ...rest }) => (
    //   <Route
    //     {...rest}
    //     render={props =>
    //       this.state.isUserLoggedIn === true ? (
    //         <Component {...props} />
    //       ) : (
    //         <Redirect to="/" />
    //       )
    //     }
    //   />
    // );
    return (
      <Router>
        <Route
          render={({ location, history }) => (
            <div className="wrapper">
              {/* <Spinner props={this.state.isSpinnerActive} /> */}
              <VerticalNavbar
                logIn={this.logIn}
                pros={this.state}
                history={history}
              />
              <div className="content">
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/contact" component={ContactPage} />
                  {/* <Route path="/products" component={PorfolioBoard} /> */}
                  <Route
                    path="/products"
                    component={() => <PorfolioBoard props={this.props} />}
                  />
                  {/* <PrivateRoute
                    path="/products"
                    component={() => <PorfolioBoard buyItem={this.buyItem} />}
                  />
                  <PrivateRoute path="/product" component={SingleItem} /> */}
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
  updateCartItems: BuyNewItem
};

const mapStateToProps = state => ({
  items: state.items,
  isUserLoggedIn: state.isUserLoggedIn,
  cartItems: state.cartItems
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
