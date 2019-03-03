import React, { Component } from "react";
import "./App.css";
import Head from "./Head";
import { Route } from "react-router-dom";
import { Meetings, Cs } from "./pages";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Head />
        <Route exact path="/" component={Meetings} />
        <Route path="/cs" component={Cs} />å
      </div>
    );
  }
}

export default App;
