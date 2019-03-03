import React, { Component } from 'react';

export default class SearchMeetings extends Component {
  state = {
    inputValue: ''
  }

  _clickHandler_searchMeetings = () => {
    const target = this.state.inputValue;

    this.props._searchMeetings(target);
  }

  _updateInputValue = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  render() {
    console.log("state: ", this.state.inputValue)

    return (
      <div>
        <input placeholder="검색어를 입력하세요" onChange={this._updateInputValue}></input>
        <button onClick={this._clickHandler_searchMeetings}>검색</button>
      </div>
    )
  }
}
