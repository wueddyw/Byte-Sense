import React, { useState } from 'react';

import './ExpandingImage.css';


function ExpandingImage(props) {
  return  (
    <>
      <div>
        <div id={props.divID} className={"expand-when-viewed-div"} >
          <img id={props.imgID}  className={"img-zoom expand-when-viewed-img "+ (props.isVisible ? "become-visible" : "")} src={props.imageLocation} alt="exp"/>
        </div>
      </div>
    </>
  );
}



export default ExpandingImage;