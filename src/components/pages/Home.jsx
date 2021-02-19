import React from 'react';
import '../../App.css';
import HomeTopBanner from '../HomeTopBanner';
import TrackVisibility from 'react-on-screen'; 
import ExpandingImage from '../ExpandingImage';
import HomeAboutUsBar from '../HomeAboutUsBar';
import HomeImageLinks from '../HomeImageLinks';

import zoomImage01 from '../../images/img-xxx.jpg';
export default function Home() {


  return (
    <>


      <HomeTopBanner ></HomeTopBanner>

      {/* <FloatingBackground/> */}
      <HomeAboutUsBar barHeight={"700px"}></HomeAboutUsBar>
      <HomeImageLinks/>


      <TrackVisibility once={true} >
        <ExpandingImage divID = {"expand-div-1"} imgID = {"expand-img-1"}  imageLocation={zoomImage01}></ExpandingImage>
      </TrackVisibility>
      <HomeImageLinks/>
      


    </>
  );
}


