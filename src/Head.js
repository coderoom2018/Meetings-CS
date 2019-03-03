import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Head.css'

export default class Head extends Component {

  _changeTabName = (event) => {
    const tabNamge = event.target.value

    console.log(tabNamge);
    this.props._clickHandler_changeTabName(tabNamge)
  }

  render() {
      
    return (
      <div 
        id="header" 
        >
        <div>
          {/* <button onClick={this._changeTabName} value="Meetings">Meetings</button>
          <button onClick={this._changeTabName} value="Cs">Cs</button> */}
          <Link to="/"><button>Meetings</button></Link>
          <Link to="cs"><button>Cs</button></Link>
        </div>
      </div>
    )
  }
}
