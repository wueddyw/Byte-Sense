import React from 'react';
import '../../App.css';
import HomeTopBanner from '../HomeTopBanner';
import TrackVisibility from 'react-on-screen'; 
import ExpandingImage from '../ExpandingImage';
import HomeAboutUsBar from '../HomeAboutUsBar';
import HomeImageLinks from '../HomeImageLinks';
import HomeProducts from '../HomeProducts';
import Footer from "../Footer";
import PaypalButton from '../PayPalButton';
import ContactMe from '../Emailer';

import { NewsContextProviderHome } from '../NewsContext';
import { GetNews } from '../GetNews';

import './Home.css';
import zoomImage01 from '../../images/home/home-news.png';
export default function Home() {


  return (
    <>


      <HomeTopBanner barHeight={"700px"}></HomeTopBanner>
      {/* <FloatingBackground/> */} 
      {/* <HomeAboutUsBar barHeight={"700px"}></HomeAboutUsBar> */}
      {/* <ContactMe/> */}
      {/* <PaypalButton amount="60.00" afterPurchaseGoTo="SomeLocation"/> */}
      
      <HomeProducts/>
      <HomeImageLinks/>


      <div className="news">
        <div className="home-news-header">
          <div className="what-we-do what-we-do-override" data-aos="fade-left">
            <div className="text-right text_move-fix">
              News
            </div>
          </div>
        </div>




        {/* <div>
      <div className="what-we-do" data-aos="fade-left">
        <div className="text-right">
            meow
        </div>
      </div>
    </div> */}



        <div className="news-body">

        <NewsContextProviderHome>
        <GetNews/>
      </NewsContextProviderHome>


{/* 
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
         */}


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


