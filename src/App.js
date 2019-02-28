import React, { Component } from "react";
import "./App.css";
import Head from "./Head";
// import { Link } from 'react-router'
import Meetings from "./components/Meetings/Meetings";
import Cs from "./components/Cs/Cs";

class App extends Component {
  state = {
    tabName: "Meetings"
  };

  _clickHandler_changeTabName = (tabName) => {
    this.setState({ tabName })
  };

  render() {
    return (
      <div className="App">
        <Head _clickHandler_changeTabName={this._clickHandler_changeTabName}/>
        <div>
          {this.state.tabName === "Meetings" ? <Meetings /> : <Cs />}
        </div>
      </div>
    );
  }
}

export default App;
