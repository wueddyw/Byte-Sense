import React from 'react';
import '../../App.css';
import HomeTopBanner from '../HomeTopBanner';
import TrackVisibility from 'react-on-screen'; 
import ExpandingImage from '../ExpandingImage';
import HomeAboutUsBar from '../HomeAboutUsBar';
import zoomImage01 from '../../images/img-xxx.jpg';
export default function Home() {


  return (
    <>


      <HomeTopBanner ></HomeTopBanner>


      <HomeAboutUsBar barHeight={"700px"}></HomeAboutUsBar>
      

      <TrackVisibility once={true} >
        <ExpandingImage divID = {"expand-div-1"} imgID = {"expand-img-1"}  imageLocation={zoomImage01}></ExpandingImage>
      </TrackVisibility>





    </>
  );
}


