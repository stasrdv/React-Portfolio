import React, { Component } from "react";
import { VerticalNavbar } from "./components/vertical-navbar";
import { PorfolioBoard } from "./components/portfoliob-board";
import { AboutPage } from "./components/about";
import "./App.css";

class App extends React.Component {
  ActiveComponent = PorfolioBoard;
  constructor(props) {
    super(props);
    this.state = {
      isAboutPageActive: false
    };
  }

  toggleDisplay = event => {
    this.setState({ isAboutPageActive: !this.state.isAboutPageActive });
  };

  render() {
    if (!this.state.isAboutPageActive) {
      this.ActiveComponent = PorfolioBoard;
    } else {
      this.ActiveComponent = AboutPage;
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <VerticalNavbar toggleDisplay={this.toggleDisplay} />
          <this.ActiveComponent />
        </div>
      </div>
    );
  }
}

export default App;
