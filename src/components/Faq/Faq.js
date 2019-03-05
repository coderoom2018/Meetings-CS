import React, { Component } from "react";
import "./Faq.css";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default class Faq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "none",
    };
  }

  _clickHandler_changeDisplay = (title) => {
    const faq = this.props.faq;

    if (title === faq.title && this.state.display === "none") {
      document.getElementById(`${faq.title}`).style.display = "block";
      this.setState({ display: "block" });
    } else if (title === faq.title && this.state.display === "block") {
      document.getElementById(`${faq.title}`).style.display = "none";
      this.setState({ display: "none" });
    }

    history.push({
      pathname: "/faq",
      search: `?category=${faq.category}&id=${faq.id}`
    });
  };

  render() {
    const faq = this.props.faq;

    return (
      <div id="faq_content">
        <div
          className="faq_title"
          onClick={() => this._clickHandler_changeDisplay(faq.title)}
        >
          <span className="faq_title-q">Q.</span>
          <span className="faq_title-categoryName">{`[${faq.category}]`}</span>
          <span className="faq_title-title">{faq.title}</span>
        </div>

       
        <div
          id={faq.title}
          className="faq_description"
          style={{ display: `none` }}><p>{faq.description}</p></div>
        </div>

    );
  }
}
