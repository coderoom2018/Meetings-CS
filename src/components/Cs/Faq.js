import React, { Component } from 'react';
import './Faq.css';

export default class Faq extends Component {
  constructor(props) {
    super(props);
  }

  _clickHandler_changeDisplay = (event) => {
    let display = document.getElementById(`${this.props.faq.title}`).style.display;

    display === "block"
      ? document.getElementById(`${this.props.faq.title}`).style.display = "none" 
      : document.getElementById(`${this.props.faq.title}`).style.display = "block"
    
  }

  render() {
    const faq = this.props.faq

    return (
      <div id="faq_content">
        <div className="faq_title" onClick={this._clickHandler_changeDisplay}>
          <span className="faq_title-q" >Q.</span>
          <span className="faq_title-tapName">{`[${faq.category}]`}</span>
          <span className="faq_title-title">{faq.title}</span>
        </div>

        <div id={faq.title} className="faq_description" style={{display:"block"}}>
          <div>
            <p>{faq.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
