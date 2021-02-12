import React, { Component } from "react";

class FourDivs extends Component {
	// constructor() {
	//     super()
	// }

	render() {
		return (
			<div className="spread" data-aos="fade-up">

                <div class="floating-div"><p>Detection & Response</p></div>
                <div class="floating-div"><p>Threat Monitoring</p></div>
                <div class="floating-div"><p>Artificial Intelligence</p></div>
                <div class="floating-div"><p>Custom Solutions</p></div>
				
			</div>
		);
	}
}

export default FourDivs