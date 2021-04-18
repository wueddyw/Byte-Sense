import { render } from "@testing-library/react";
import React from "react";
import Navbar from '../Navbar';
import Showcase from "../Showcase";
import TextDiv from "../TextDiv";
import ImageTextDivRight from "../ImageTextDivRight";
import ImageTextDivLeft from "../ImageTextDivLeft";
import FourDivs from "../FourDivs";
import Footer from "../Footer";
import "../../App.css";
import "../../styles/about.css";
import ShowcaseImage from "../../images/shutterstock2.jpg";
import image1 from "../../images/aboutimage.jpg";
import image2 from "../../images/aboutimage2.jpg";
import image3 from "../../images/aboutimage3.jpg";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <div>
      <div className="wrapper">
        <Showcase image={ShowcaseImage} title="About Us" text="" />
        <TextDiv
          title="Our Story"
          direction="fade-up"
          content="ByteSense was formed with one mission in mind - to provide the world
          with a safer place in the cyberspace. We provide customers with our
          new Cybersecurity Antivirus protection which is more diverse. The
          product can thoroughly scan all computer systems and server
          infrastructures as it hunts down any foreign IP addresses, MAC
          addresses, usernames, geographic locations, current installations, and
          removal of packages and applications within the system. We also offer
          our Cybersecurity professional services to help companies with server
          remediations, malicious monitoring, upgrades of computer systems, and
          custom-built applications."
        />
        <ImageTextDivRight
          image={image1}
          direction="fade-left"
          title="Security"
          content="It is very important to secure your computer systems and servers
        due to the fact you do not want to leak out sensitive company’s
        data, personally identifiable information, protected health
        information, governmental and industry information systems from
        theft and damage attempted. The modern-day IT systems and their
        infrastructure are susceptible to complex malwares and other
        online threats."
        />
        <ImageTextDivLeft
          image={image2}
          direction="fade-right"
          title="Custom-Tailored Solutions"
          content="Our tailer-made solutions can help you stay ahead of the game. Our
        Cyber security team is backed by years of experiences and trusted
        by clients from medium-size enterprises to global conglomerates.
        We have help companies with device security where we used our
        products and services to protect their system from being hacked
        and compromised by virus and other online threats. We have used
        custom-built applications and strategy to monitor computer system
        suspicious activities. As we do provide full penetration testing
        for companies and provide the customer with recommend system
        remediation report."
        />
        <ImageTextDivRight
          image={image3}
          direction="fade-left"
          title="Location"
          content="ByteSense is headquartered in Vancouver, Canada – the next IT hub
        of North America. Although Canada and United States are deeply
        aware of Cyberattacks because due to the fact that we are the
        highest rank countries being attacked online comparing to the
        world. There are multiple of companies in Canada who have
        experienced Cyberattack and sensitive data are being compromised
        daily."
        />
        <FourDivs
          title="Services"
          direction="fade-up"
          div1="Detection & Response"
          div2="Threat Monitoring"
          div3="Artificial Intelligence"
          div4="Custom Solutions"
        />
        <Footer />
        </div>
      </div>
    </>
  );
}
