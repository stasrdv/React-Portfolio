import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  BrowserRouter
} from "react-router-dom";
import { VerticalNavbar } from "./components/vertical-navbar";
import { PorfolioBoard } from "./components/portfoliob-board";
import { SingleItem } from "./components/singleItem";
import { Spinner } from "./components/spinner/spinner";
import { HomePage } from "./components/home";
import { AboutPage } from "./components/about";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
      isSpinnerActive: false
    };
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

  render() {
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
        <div className="row">
          <Spinner props={this.state.isSpinnerActive} />
          <VerticalNavbar logIn={this.logIn} pros={this.state} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <PrivateRoute path="/products" component={PorfolioBoard} />
            <PrivateRoute path="/product" component={SingleItem} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
