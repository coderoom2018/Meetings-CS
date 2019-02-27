import React, { Component } from 'react';
import './Meetings.css';
import MeetingContainer from './MeetingsContainer';

export default class Meetings extends Component {

  render() {
    return (
      <div id="meetings_content">
        <h1>Meetings</h1>
        <div>
          <MeetingContainer />
        </div>
      </div>
    )
  }
}
