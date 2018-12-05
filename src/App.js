import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  BrowserRouter
} from "react-router-dom";
import { VerticalNavbar } from "./components/vertical-navbar/vertical-navbar";
import { Spinner } from "./components/spinner/spinner";
import { PorfolioBoard } from "./pages/portfolio-board/portfoliob-board";
import { SingleItem } from "./pages/single-item/singleItem";
import { HomePage } from "./pages/home/home";
import { AboutPage } from "./pages/about/about";
import { ContactPage } from "./pages/contact/contact";
import { Cart } from "./pages/cart/cart";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
      isSpinnerActive: false,
      cartItems: []
    };
    this.buyItem = this.buyItem.bind(this);
    this.onIntemDelete = this.onIntemDelete.bind(this);
  }

  logIn = () => {
    this.setState({ isSpinnerActive: true });
    setTimeout(
      () =>
        this.setState({
          isUserLoggedIn: !this.state.isUserLoggedIn,
          isSpinnerActive: false
        }),
      1500
    );
  };

  buyItem(newelement) {
    const clonedArr = this.state.cartItems;
    clonedArr.push(newelement);
    this.setState({
      cartItems: clonedArr
    });
  }

  onIntemDelete(_cartItems) {
    this.setState({
      cartItems: _cartItems
    });
  }

  render() {
    //block products route
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.state.isUserLoggedIn === true ? (
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
              <Spinner props={this.state.isSpinnerActive} />
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
                  <Route
                    path="/cart"
                    component={() => (
                      <Cart
                        onIntemDelete={this.onIntemDelete}
                        items={this.state.cartItems}
                      />
                    )}
                  />
                  <PrivateRoute
                    path="/products"
                    component={() => <PorfolioBoard buyItem={this.buyItem} />}
                  />
                  <PrivateRoute path="/product" component={SingleItem} />
                </Switch>
              </div>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
