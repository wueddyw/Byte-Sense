import React, { Component } from "react";

function Showcase(props) {
  return (
    <div
      className="showcase"
      style={{ backgroundImage: "url(" + props.image + ")" }}
    >
      <div className="showcase-text">
        <h3>{props.text}</h3>
      </div>
    </div>
  );
}

export default Showcase;
