import React from 'react';
import '../../App.css';
import HomeTopBanner from '../HomeTopBanner';
import Navbar from '../Navbar';
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
      <Navbar />

      <HomeTopBanner barHeight={"700px"}></HomeTopBanner>

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

        <div className="news-body">

        <NewsContextProviderHome>
        <GetNews/>
        </NewsContextProviderHome>

        </div>



      </div>

        <div className="home-page-bottom-break"></div>
      <Footer/>

    </>
  );
}


