import React from "react";

function Values(props) {
    return (
        <div className="value-wrapper" data-aos={props.direction}>
            <div>
                <h3>{props.values}</h3>
            </div>

            <div>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Values;