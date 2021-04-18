import React, { Component } from "react";

function Showcase(props) {
  return (
    <div
      className="showcase"
      style={{ backgroundImage: "url(" + props.image + ")" }}
    >
      <div className="showcase-text">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
      <div className="showcase-text">
      </div>
    </div>
  );
}

export default Showcase;
