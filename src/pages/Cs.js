import React, { Component } from 'react';
import './Cs.css';
import FaqContainer from '../components/Cs/FaqContainer';
import module from '../utilities';

export default class Cs extends Component {
  state = {
    data: [],
    tabName: "북클럽",
  }

  componentDidMount = () => {
    this._getData();
  }

  _getData = async () => {
    
    const searchData = await module.searchData;
    const data = await searchData("csData", this.state.tabName)
    
    this.setState({ data })
  }
  
  _clickHandler_changeTab = async (event) => {
    const tabName = event.target.value;
    this.setState({ tabName })

    const searchData = await module.searchData;
    const data = await searchData("csData", this.state.tabName)
    
    this.setState({ data })
  }

  render() {
    console.log("cs state.data: ", this.state.data)

    return (
      <div id="cs_content">
        <h1>Cs</h1>
        <div className="btn_container">
          <button className="btn" onClick={this._clickHandler_changeTab} value="북클럽">북클럽</button>
          <button className="btn" onClick={this._clickHandler_changeTab} value="신청/환불">신청/환불</button>
          <button className="btn" onClick={this._clickHandler_changeTab} value="독후감">독후감</button>
          <button className="btn" onClick={this._clickHandler_changeTab} value="놀러가기">놀러가기</button>
          <button className="btn" onClick={this._clickHandler_changeTab} value="이벤트">이벤트</button>
          <button className="btn" onClick={this._clickHandler_changeTab} value="아지트">아지트</button>
        </div>
        
        <div>
          <FaqContainer data={this.state.data}/>
        </div>
      </div>
    )
  }
}
