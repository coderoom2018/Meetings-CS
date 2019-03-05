import React from "react";
import Faq from "./Faq";
import "./FaqContainer.css";

export default function FaqContainer(props) {
  return (
    <div id="container_content">
      {props.data.map(faq => (
        <Faq faq={faq} key={faq.title} />
      ))}
    </div>
  );
}
