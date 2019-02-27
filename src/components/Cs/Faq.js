import React, { Component } from 'react';
import './Faq.css';

export default class Faq extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="faq_content">
        <div className="faq_title">
          <span className="faq_title-q" >Q.</span>
          <span className="faq_title-tapName">[북클럽]</span>
          <span className="faq_title-title">titletitletitletitletitletitletitle</span>
        </div>

        <div className="faq_description">
          <div>
            <p>faq_descriptionfaq_descriptionfaq_descriptionfaq_descriptionfaq_descriptionfaq_descriptionfaq_descriptionfaq_description</p>
          </div>
        </div>
      </div>
    )
  }
}
