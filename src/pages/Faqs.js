import React, { Component } from 'react';
import './Faqs.css';
import FaqContainer from '../components/Faq/FaqContainer';
import {getData} from '../utilities';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default class Faqs extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this._getData();
  }

  _getData = async () => {
    const data = await getData("faqData", "북클럽")
    this.setState({ data })
  }
  
  _clickHandler_changeTab = async (event) => {
    const tabName = event.target.value;
    const data = await getData("faqData", tabName)
    
    history.push({
      pathname: '/faq',
      search: `?category=${tabName}`,
    })

    this.setState({ data: data })
  }

  render() {
    return (
      <div id="cs_content">
        <div className="btn_container">
          <button className="category_btn" onClick={this._clickHandler_changeTab} value="북클럽" >북클럽</button>
          <button className="category_btn" onClick={this._clickHandler_changeTab} value="신청/환불">신청/환불</button>
          <button className="category_btn" onClick={this._clickHandler_changeTab} value="독후감">독후감</button>
          <button className="category_btn" onClick={this._clickHandler_changeTab} value="놀러가기">놀러가기</button>
          <button className="category_btn" onClick={this._clickHandler_changeTab} value="이벤트">이벤트</button>
          <button className="category_btn" onClick={this._clickHandler_changeTab} value="아지트">아지트</button>
        </div>
        
        <div>
          <FaqContainer data={this.state.data} />
        </div>
      </div>
    )
  }
}
