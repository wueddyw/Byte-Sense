import React from 'react';
import '../App.css';
import './HomeTopBanner.css';
import secureImage from '../images/home/home-shield.png';
import './HomeAboutUsBar.css';
import videoBanner from '../videos/home_top_banner.mp4';

export default function HomeTopBanner(props) {
  const styleFloat={
    height: props.barHeight,
    
  };
  const secureImageStyle={

     backgroundImage: "url(" + secureImage + ")"
  };





    return (
      <>
  
      <div className="home-video-banner">
        <video width="100%" autoPlay muted loop>
                <source src={videoBanner} type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
      </div>


        <div className='home-top-banner'>
            <div className='home-top-banner-slogan'>
                Leading-Edge Tools, Technology,<br/>
                and Expertise in Cybersecurity
            </div>
            
            <div className='home-top-banner-sub-slogan'>

                We provide secure, customizable solutions that identify<br/>
                and remediate threats, maintain consistent connectivity<br/>
                at your edge locations, and deliver expert technical support.
            </div>

















{/* 


      <div className="container">
        <div className="item item-left"></div>
        <div className="item item-center">
          <div className="break-free">
          <div className="break-free-header">
              We Are Security Experts
              <div className="secure-div" style={secureImageStyle}/>
            </div>
            <div className="break-free-body">
            Byte Sense was formed with one mission in mind, to provides the world a safer place in the Cyber space.
            We provide customers our new Cybersecurity Antivirus protection that can scan thoroughly all computer systems and server infrastructures to hunt down foreign attackers.
            </div>
          </div>
        </div>
        <div className="item item-right"></div>
      </div>
 */}


















        </div>
        



        <div className="container">
        <div className="item item-left"></div>
        <div className="item item-center">
          <div className="break-free">
          <div className="break-free-header">
              We Are Security Experts
              <div className="secure-div" style={secureImageStyle}/>
            </div>
            <div className="break-free-body">
            Byte Sense was formed with one mission in mind, to provides the world a safer place in the Cyber space.
            We provide customers our new Cybersecurity Antivirus protection that can scan thoroughly all computer systems and server infrastructures to hunt down foreign attackers.
            </div>
          </div>
        </div>
        <div className="item item-right"></div>
      </div>

      </>
    );
  }



