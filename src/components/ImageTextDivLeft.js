import React from "react";

function ImageTextDivLeft(props) {
  return (
    <div>
      <div className="what-we-do" data-aos={props.direction}>
        <div className="text-left">
          <div>
            <h3>{props.title}</h3>
          </div>

          <div>
            <p>{props.content}</p>
          </div>
        </div>

        <div className="image">
          <img src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default ImageTextDivLeft;
