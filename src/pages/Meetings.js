import React, { Component } from 'react';
import './Meetings.css';
import MeetingContainer from '../components/Meetings/MeetingsContainer';
import module from '../utilities';
import SearchMeetings from '../components/Meetings/SearchMeetings';

export default class Meetings extends Component {
  state = {
    data: [],
  }

  componentDidMount = () => {
    this._getData();
  }

  _getData = async () => {
    const searchData = await module.searchData;
    const data = await searchData("meetingsData");

    this.setState({ data })
  }

  _searchMeetings = async(target) => {
    const searchMeetings = await module.searchMeeings;
    const data = await searchMeetings("meetingsData", `${target}`)

    this.setState({ data })
  }

  render() {

    return (
      <div id="meetings_content">
        <h1>Meetings</h1>
        <SearchMeetings _searchMeetings={this._searchMeetings}/>
        <MeetingContainer data={this.state.data}/>
      </div>
    )
  }
}
