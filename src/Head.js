import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Head.css'

export default class Head extends Component {

  _changeTabName = (event) => {
    const tabNamge = event.target.value

    this.props._clickHandler_changeTabName(tabNamge)
  }

  render() {
      
    return (
      <div id="header">
        <div>
          <Link to="/"><button>Meetings</button></Link>
          <Link to="cs"><button>Cs</button></Link>
        </div>
      </div>
    )
  }
}
