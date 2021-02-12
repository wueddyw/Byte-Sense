import React, { useState } from 'react';

import './HomeAboutUsBar.css';

function HomeAboutUsBar(props) {
  const styleFloat={
    height: props.barHeight,
    top: "-"+ (parseInt( props.barHeight, 10 ) + parseInt( 60, 10 )) +"px"
  };
  const styleBackground={
    height: props.barHeight,
  };

    return  (


      <>
      <div className="haub-background" style={styleBackground}/>
        
        <div className="haub-float-div" style={styleFloat}>
          Byte Sense was formed with one mission in mind, to provides the world a safer place in the Cyber space.
        </div>
      </>
    );
  }
  
  
  
  export default HomeAboutUsBar;