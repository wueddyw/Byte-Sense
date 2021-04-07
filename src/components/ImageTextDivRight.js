import React from "react";

function ImageTextDivRight(props) {
  return (
    <div>
      <div className="what-we-do-right" data-aos={props.direction}>
        <div className="image">
          <img src={props.image} />
        </div>

        <div className="text-right">
          <div>
            <h3>{props.title}</h3>
          </div>

          <div>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageTextDivRight;
