import React, { Component } from 'react';
import Meeting from './Meeting';
import './MeetingsContainer.css';

export default class MeetingsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="container_content">
        <h3>MeetingsContainer</h3>
        <div id="meetings_container">
          {this.props.data.map((meeting, id) => (
            <Meeting meeting={meeting} key={id} />
          ))}
        </div>
      </div>
    )
  }
}