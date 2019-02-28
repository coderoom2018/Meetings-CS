import React, { Component } from 'react';
import './Head.css'

// const styleHeader = {
//   backgroundColor: '#fff',
//   padding: '10px',
//   textDecoration: 'none',
//   position: 'fixed',
//   width: '100%',
//   zIndex: '2',
//   top: '0',
//   height: '30px',
//   boxShadow: '0px 1px 7px 0px rgba(0, 0, 0, 0.4)',
//   display: 'flex',
//   transition: 'top 0.2s ease-in-out',
// };



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
          <button onClick={this._changeTabName} value="Meetings">Meetings</button>
          <button onClick={this._changeTabName} value="Cs">Cs</button>
        </div>
      </div>
    )
  }
}
