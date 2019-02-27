import React, { Component } from 'react';
import './Cs.css';
import { Button } from 'reactstrap';  // reactstrap에서 btton component를 import
import FaqContainer from './FaqContainer';

export default class Cs extends Component {

  render() {
    return (
      <div id="cs_content">
        <h1>Cs</h1>
        <div className="btn_container">
          <button className="btn">북클럽</button>
          <button className="btn">신청/환불</button>
          <button className="btn">독후감</button>
          <button className="btn">놀러가기</button>
          <button className="btn">이벤트</button>
          <button className="btn">아지트</button>
        </div>
        
        <div>
          <FaqContainer />
        </div>
      </div>
    )
  }
}
