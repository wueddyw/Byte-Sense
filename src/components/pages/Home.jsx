import React from 'react';
import '../../App.css';
import HomeTopBanner from '../HomeTopBanner';
import TrackVisibility from 'react-on-screen'; 
import ExpandingImage from '../ExpandingImage';
import HomeAboutUsBar from '../HomeAboutUsBar';
import HomeImageLinks from '../HomeImageLinks';
import HomeProducts from '../HomeProducts';
import Footer from "../Footer";
import './Home.css';
import zoomImage01 from '../../images/home/home-news.png';
export default function Home() {


  return (
    <>


      <HomeTopBanner barHeight={"700px"}></HomeTopBanner>

      {/* <FloatingBackground/> */}
      {/* <HomeAboutUsBar barHeight={"700px"}></HomeAboutUsBar> */}

      <HomeProducts/>
      <HomeImageLinks/>


      <div className="news">
        <div className="news-header">
          News
        </div>




        <div className="news-body">




        <div>
        <TrackVisibility once={true} >
          <ExpandingImage divID = {"expand-div-12"} imgID = {"expand-img-12"}  imageLocation={zoomImage01}></ExpandingImage>
        </TrackVisibility>
        </div>



        <div>
        <TrackVisibility once={true} >
          <ExpandingImage divID = {"expand-div-12"} imgID = {"expand-img-12"}  imageLocation={zoomImage01}></ExpandingImage>
        </TrackVisibility>
        </div>

        
        <div>
        <TrackVisibility once={true} >
          <ExpandingImage divID = {"expand-div-12"} imgID = {"expand-img-12"}  imageLocation={zoomImage01}></ExpandingImage>
        </TrackVisibility>
        </div>

        
        <div>
        <TrackVisibility once={true} >
          <ExpandingImage divID = {"expand-div-12"} imgID = {"expand-img-12"}  imageLocation={zoomImage01}></ExpandingImage>
        </TrackVisibility>
        </div>
        


      </div>

      {/* <div>
        <TrackVisibility once={true} >
          <ExpandingImage divID = {"expand-div-12"} imgID = {"expand-img-12"}  imageLocation={zoomImage01}></ExpandingImage>
        </TrackVisibility>
        </div>

        <div>
        <TrackVisibility once={true} >
          <ExpandingImage divID = {"expand-div-12"} imgID = {"expand-img-12"}  imageLocation={zoomImage01}></ExpandingImage>
        </TrackVisibility>
        </div>

        <div>
        <TrackVisibility once={true} >
          <ExpandingImage divID = {"expand-div-12"} imgID = {"expand-img-12"}  imageLocation={zoomImage01}></ExpandingImage>
        </TrackVisibility>
        </div> */}

      </div>


      <Footer/>



    </>
  );
}


