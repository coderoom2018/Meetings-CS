import React, { Component } from 'react';
import './Faq.css';

export default class Faq extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const faq = this.props.faq

    return (
      <div id="faq_content">
        <div className="faq_title">
          <span className="faq_title-q" >Q.</span>
          <span className="faq_title-tapName">{`[${faq.category}]`}</span>
          <span className="faq_title-title">{faq.title}</span>
        </div>

        <div className="faq_description">
          <div>
            <p>{faq.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
