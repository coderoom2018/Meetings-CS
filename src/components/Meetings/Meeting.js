import React, { Component } from 'react';
import './Meeting.css';

export default class Meeting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="meeting_content">
        <div className="meeting_header">
          <img className="meeting_header-image" src="https://image.trevari.co.kr/644c7ede-bfc0-42cd-a071-c886440fad19.png"/>
          <div className="meeting_header-description">
            <div className="meeting_header-description-title">
              title
            </div>
            <div className="meeting_header-description-subTitle">
              meeting_header-descriptionmeeting_
            </div>  
          </div>
        </div>
        
        <div id="information">
          <div className="information_name">
            name
          </div>
          <div className="information_details">
            <div className="informaion_details-location">
              location
            </div>
            <div className="informaion_details-time">
              time
            </div>
          </div>
        </div>
      </div>
    )
  }
}