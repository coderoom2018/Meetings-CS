import React, { Component } from "react";

export default class SearchMeetings extends Component {
  state = {
    inputValue: ""
  };

  _clickHandler_searchMeetings = (event) => {
    const target = this.state.inputValue;

    this.props._searchMeetings(target);

    this.setState({ inputValue: "" })
  };

  _updateInputValue = event => {
    this.setState({ inputValue: event.target.value });
  };

  _keyPressHandler__searchMeetings = (event) => {
    const target = this.state.inputValue;
    
    if (event.key === 'Enter') {
      this.props._searchMeetings(target);
      this.setState({ inputValue: "" })
    }
  }
  render() {

    return (
      <div>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          onChange={this._updateInputValue}
          value={this.state.inputValue}
          onKeyPress={this._keyPressHandler__searchMeetings}
        />
        <button onClick={this._clickHandler_searchMeetings}>검색</button>
      </div>
    );
  }
}
