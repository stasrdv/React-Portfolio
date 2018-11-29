import React, { Component } from "react";
import { VerticalNavbar } from "./components/vertical-navbar";
import { PorfolioBoard } from "./components/portfoliob-board";
import { AboutPage } from "./components/about";
import { Spinner } from "./components/spinner/spinner";
import "./App.css";

class App extends React.Component {
  ActiveComponent;
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
      isSpinnerActive: false
    };
  }

  toggleDisplay = () => {
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
    this.ActiveComponent = !this.state.isUserLoggedIn
      ? PorfolioBoard
      : AboutPage;
    if (this.state.isSpinnerActive) {
      const BusyIndicator = Spinner;
    }
    //const BusyIndicator = !this.state.isSpinnerActive ? Spinner : null;
    return (
      <div className="row">
        <Spinner props={this.state.isSpinnerActive} />
        <VerticalNavbar toggleDisplay={this.toggleDisplay} />
        <this.ActiveComponent />
      </div>
    );
  }
}

export default App;
