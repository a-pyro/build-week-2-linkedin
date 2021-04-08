import React, { Component } from "react";
import Home from "./components/home/Home";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Footer />
      </div>
    );
  }
}
