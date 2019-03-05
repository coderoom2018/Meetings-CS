import React from "react";
import Meeting from "./Meeting";
import "./MeetingsContainer.css";

export default function MeetingsContainer(props) {
  return (
    <div id="container_content">
      <div id="meetings_container">
        {props.data.map((meeting, id) => (
          <Meeting meeting={meeting} key={id} />
        ))}
      </div>
    </div>
  );
}
