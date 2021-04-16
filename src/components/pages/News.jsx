import React from 'react';
import Footer from "../Footer";
import './News.css';
import Navbar from '../Navbar';
import newsImage1 from './News Components/Images/news1.jpg';
import newsHeaderImage from './News Components/Images/news_header.jpg';
import { NewsContextProvider } from '../NewsContext';
import { GetNews } from '../GetNews';

export default function Marketing() {
  const secureImageStyle={
    backgroundImage: "url(" + newsHeaderImage + ")",

 };



  return (
    <>
      <Navbar />
      <div className="temp-header  "/>
      
      <div className="news-page-div">
      
        <div className="news-page-header" style={secureImageStyle}>
        
          <div className="news-page-header-text">
            News
          </div>
        </div>
        <div className="news-page-item-break"/>

      <NewsContextProvider>
        <GetNews/>
      </NewsContextProvider>




      </div>

      <Footer/>
    </>
  );
}
