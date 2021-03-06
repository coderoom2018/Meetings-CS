import React, { Component } from "react";
import "./Meetings.css";
import MeetingContainer from "../components/Meetings/MeetingsContainer";
import {getData, searchMeetings} from "../utilities";
import SearchMeetings from "../components/Meetings/SearchMeetings";

export default class Meetings extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this._getData();
  };

  _getData = async () => {
    const data = await getData("meetingsData");
    this.setState({ data });
  };

  _searchMeetings = async target => {
    const data = await searchMeetings(`${target}`);
    this.setState({ data });
  };

  render() {
    return (
      <div id="meetings_content">
        <SearchMeetings _searchMeetings={this._searchMeetings} />
        
        {this.state.data.length < 1 ? (
          <div id="noResult">검색된 결과가 없습니다.</div>
        ) : (
          <MeetingContainer data={this.state.data} />
        )}
      </div>
    );
  }
}
