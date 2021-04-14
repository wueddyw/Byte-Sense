import React from "react";

function TextDivAlt(props) {
  return (
    <div className="our-story-alt" data-aos={props.direction}>
      <div>
        <h3>{props.title}</h3>
      </div>

      <div>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default TextDivAlt;
