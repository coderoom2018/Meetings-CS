import React, { Component } from "react";
import Faq from "./Faq";
import "./FaqContainer.css";

export default class FaqContainer extends Component {
  render() {
    return (
      <div id="container_content">
        {this.props.data.map((faq) => (
          <Faq faq={faq} key={faq.title} />
        ))}
      </div>
    );
  }
}
