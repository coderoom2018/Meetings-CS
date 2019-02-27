import React, { Component } from 'react';
import Faq from './Faq';
import './FaqContainer.css';

export default class FaqContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="container_content">
        <h3>Faq Containter</h3>
        <Faq />
        <Faq />
        <Faq />
        <Faq />
        <Faq />
        <Faq />
        <Faq />
        <Faq />
      </div>
    )
  }
}
