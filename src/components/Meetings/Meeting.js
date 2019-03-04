import React, { Component } from 'react';
import './Meeting.css';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default class Meeting extends Component {

  _clickHandler_routingPage = () => {
    const meeting = this.props.meeting

    history.push({
      pathname: "/meetings",
      search: `?id=${meeting.id}`
    });
  }

  render() {
    const meeting = this.props.meeting

    return (
      <div id="meeting_content" onClick={this._clickHandler_routingPage}>
        <div className="meeting_header">
          <img className="meeting_header-image" src={meeting.image}/>
          <div className="meeting_header-description">
            <div className="meeting_header-description-title">{meeting.header_title}</div>
            <div className="meeting_header-description-subTitle">{meeting.header_subtitle}</div>  
          </div>
        </div>
        
        <div id="information">
          <div className="information_name">{meeting.name}</div>
          <div className="information_details">
            <div className="informaion_details-location">{meeting.location}</div>
            <div className="informaion_details-time">{meeting.time}</div>
          </div>
        </div>
      </div>
    )
  }
}