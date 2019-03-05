import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Meetings from "./pages/Meetings";
import Faqs from "./pages/Faqs";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Meetings} />
          <Route path="/faq" component={Faqs} />
        </div>
      </Router>
    );
  }
}

export default App;
