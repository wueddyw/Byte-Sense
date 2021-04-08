import React from 'react';
import Footer from "../Footer";
import './News.css';

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


{/* 
        <div className="news-page-body">
          <div className="news-page-body-item news-page-text-div">
            <p  className="news-page-item-body">
              <div  className="news-page-item-header">
                News Item 1
              </div>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            </p>
          </div>
          <div className="news-page-body-item news-page-image-div">
            <img className="news-page-image" src={newsImage1} alt="img1"/>
          </div>
        </div>

        <div className="news-page-item-break"/>

        <div className="news-page-body">
        <div className="news-page-body-item news-page-image-div">
            <img className="news-page-image" src={newsImage1} alt="img1"/>
          </div>
          <div className="news-page-body-item news-page-text-div">
            <p  className="news-page-item-body">
              <div  className="news-page-item-header">
                News Item 2
              </div>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            </p>
          </div>
        </div>

        <div className="news-page-item-break"/>


        <div className="news-page-body">
          <div className="news-page-body-item news-page-text-div">
            <p  className="news-page-item-body">
              <div  className="news-page-item-header">
                News Item 3
              </div>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            </p>
          </div>
          <div className="news-page-body-item news-page-image-div">
            <img className="news-page-image" src={newsImage1} alt="img1"/>
          </div>
        </div>

        <div className="news-page-item-break"/>

        <div className="news-page-body">
        <div className="news-page-body-item news-page-image-div">
            <img className="news-page-image" src={newsImage1} alt="img1"/>
          </div>
          <div className="news-page-body-item news-page-text-div">
            <p  className="news-page-item-body">
              <div  className="news-page-item-header">
                News Item 4
              </div>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            </p>
          </div>
        </div>

        <div className="news-page-item-break"/> */}



      </div>

      <Footer/>
    </>
  );
}
