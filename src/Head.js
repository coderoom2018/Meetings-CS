import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Head.css";
import classnames from "classnames";

export default class Head extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  _changeTabName = event => {
    const tabNamge = event.target.value;
    this.props._clickHandler_changeTabName(tabNamge);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    let visible;

    if (prevScrollpos > currentScrollPos) {
      visible = true;
    } else if (prevScrollpos < currentScrollPos) {
      visible = false;
    }

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <div
        className={classnames("navbar2", {
          "navbar--hidden2": !this.state.visible
        })}
      >
        <Link to="/"><button>Meetings</button></Link>
        <Link to="cs"><button>Cs</button></Link>
      </div>
    );
  }
}
