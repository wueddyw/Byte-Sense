import React from "react";

function FourDivs(props) {

	return (
		<div className="four-div-container" data-aos={props.direction}>

			<div>
				<h3>{props.title}</h3>
			</div>

			<div className="spread">

      			<div className="floating-div"><p>{props.div1}</p></div>
      			<div className="floating-div"><p>{props.div2}</p></div>
      			<div className="floating-div"><p>{props.div3}</p></div>
      			<div className="floating-div"><p>{props.div4}</p></div>
				
			</div>
		</div>
	);
}

export default FourDivs