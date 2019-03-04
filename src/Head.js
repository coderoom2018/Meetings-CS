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

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll_hideNavBar);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll_hideNavBar);
  }
  
  handleScroll_hideNavBar = () => {
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
  
  _changeTabName = (event) => {
    const tabNamge = event.target.value;
    this.props._clickHandler_changeTabName(tabNamge);
  };

  render() {
    return (
      <div className={classnames("navbar2", {"navbar--hidden2": !this.state.visible})}>
        <Link to="/"><span className="navbar_btn">독서 모임</span></Link>
        <Link to="cs"><span className="navbar_btn">자주 묻는 질문</span></Link>
      </div>
    );
  }
}
