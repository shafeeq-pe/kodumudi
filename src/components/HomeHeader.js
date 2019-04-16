import React, { Component } from "react";

// import logo from "./logo.svg";
import "../css/HomeHeader.css";

class HomeHeader extends Component {
  render() {
    return (
      <div className="HomeHeader">
        <header className="home-header">
          <h1 className="App-logo">XPERTCUBE REACT WEBSITE</h1>
          <h2 className="App-header-title">HOME</h2>
          <p>32</p>
        </header>
      </div>
    );
  }
}

export default HomeHeader;
