import React from "react";

function Employee(props) {
    return (
        <div className="employee-wrapper">
            <div>
                <img src={props.image} />
            </div>

            <div>
                <h3>{props.name}</h3>
            </div>
            
            <div>
                <p>{props.position}</p>
            </div>
        </div>
    );
}

export default Employee;