import React from "react";

function TripImageSpread(props) {
    return (
        <div className="trip-image-spread" data-aos={props.direction}>
            <div className="trip-image">
                <img src={props.image1} />
            </div>
            <div className="trip-image">
                <img src={props.image2} />
            </div>
            <div className="trip-image">
                <img src={props.image3} />
            </div>
        </div>
    );
}

export default TripImageSpread;