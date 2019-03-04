import React, { Component } from "react";
import "./SearchMeetings.css";

export default class SearchMeetings extends Component {
  state = {
    inputValue: ""
  };

  _clickHandler_searchMeetings = () => {
    const target = this.state.inputValue;

    this.props._searchMeetings(target);

    this.setState({ inputValue: "" })
  };

  _updateInputValue = (event) => {
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
      <div id="search_content">
        <div className="searchBar_container">
          <input
            type="text"
            placeholder="클럽명 검색"
            onChange={this._updateInputValue}
            value={this.state.inputValue}
            onKeyPress={this._keyPressHandler__searchMeetings}
          />
          <button className="search_btn" onClick={this._clickHandler_searchMeetings}>검색</button>
        </div>
      </div>
    );
  }
}
