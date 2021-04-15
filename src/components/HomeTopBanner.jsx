import React from 'react';
import '../App.css';
import './HomeTopBanner.css';
import secureImage from '../images/home/home-shield.png';
import './HomeAboutUsBar.css';
import videoBanner from '../videos/home_top_banner.mp4';
import backgroundImage from '../images/backGroundBlur1.jpg';

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
          <video className="home-video-video" width="100%" autoPlay muted loop>
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
          </div>
            <div className="container">
              <div className="item item-left"></div>

                <div className="item item-center">

                  <div className="break-free">
                    <div className="break-free-header">
                      <div className="what-we-do what-we-do-override" data-aos="fade-left">
                        <div className="text-right text_move-fix">
                          We Are Security Experts
                      </div>
                    </div>          
                  <div className="secure-div" style={secureImageStyle}/>
                </div>
                <div className="break-free-body">
                < div className="what-we-do what-we-do-override" data-aos="fade-right">
                  <div className="text-right text_move-fix">
                    Byte Sense was formed with one mission in mind, to provides the world a safer place in the Cyber space.
                    We provide customers our new Cybersecurity Antivirus protection that can scan thoroughly all computer systems and server infrastructures to hunt down foreign attackers.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item item-right"></div>
        </div>
      </>
    );
  }



