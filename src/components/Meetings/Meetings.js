import React, { Component } from 'react';
import './Meetings.css';
import MeetingContainer from './MeetingsContainer';
import module from '../../utilities';
import SearchMeetings from './SearchMeetings';

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

    console.log("Meetings Data: ", data)
    this.setState({ data })
  }

  _searchMeetings = async(target) => {
    console.log("type: ", typeof target, "target: ", target)
    const searchMeetings = await module.searchMeeings;
    const data = await searchMeetings("meetingsData", `${target}`)

    console.log("searchData: ", data)
    this.setState({ data })
  }

  render() {
    // console.log("module: ", module)

    return (
      <div id="meetings_content">
        <h1>Meetings</h1>
          <SearchMeetings _searchMeetings={this._searchMeetings}/>
          <MeetingContainer data={this.state.data}/>
        
      </div>
    )
  }
}
