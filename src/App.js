import React, { Component } from "react";
import "./App.css";
import Head from "./Head";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Meetings, Cs } from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Head />
          <div>
            <Route exact path="/" component={Meetings} />
            <Route path="/cs" component={Cs} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
