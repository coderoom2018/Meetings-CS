import React, { Component } from 'react';
import Meeting from './Meeting';
import './MeetingsContainer.css';

export default class MeetingsContainer extends Component {
  render() {
    return (
      <div id="container_content">
        <div id="meetings_container">
          {this.props.data.map((meeting, id) => (
            <Meeting meeting={meeting} key={id} />
          ))}
        </div>
      </div>
    )
  }
}