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

  toggleDisplay = () => {
    this.setState({ isAboutPageActive: !this.state.isAboutPageActive });
  };

  render() {
    this.ActiveComponent = !this.state.isAboutPageActive
      ? PorfolioBoard
      : AboutPage;
    return (
      <div className="row">
        <VerticalNavbar toggleDisplay={this.toggleDisplay} />
        <this.ActiveComponent />
      </div>
    );
  }
}

export default App;
