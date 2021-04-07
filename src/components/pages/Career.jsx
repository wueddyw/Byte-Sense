import React from 'react';
import Showcase from "../Showcase";
import TextDiv from "../TextDiv";
import TextDivAlt from "../TextDivAlt";
import Footer from "../Footer";
import TripImage from "../TripleImageSpread";
import Values from "../Values";
import Employee from "../Employee";
import '../../App.css';
import "../../styles/career.css";
import image from "../../images/shutterstock3.jpg";
import image4 from "../../images/shutterstock4.jpg";
import image5 from "../../images/shutterstock5.jpg";
import image6 from "../../images/shutterstock6.jpg";
import userImage from "../../images/user.png";

export default function Products() {
  return (
    <div className="wrapper">
      <Showcase image={image} title="Careers" text="Build a career at the cutting edge of cyber security"/>
      <TextDiv title="Building a safe and secure future" direction="fade-up"
        content="Byte Sense was formed with one mission in mind - to provide the world
        with a safer place in the cyberspace. We provide customers with our
        new Cybersecurity Antivirus protection which is more diverse. The
        product can thoroughly scan all computer systems and server
        infrastructures as it hunts down any foreign IP addresses, MAC
        addresses, usernames, geographic locations, current installations, and
        removal of packages and applications within the system. We also offer
        our Cybersecurity professional services to help companies with server
        remediations, malicious monitoring, upgrades of computer systems, and
        custom-built applications." />
      <TripImage direction="fade-up" image1={image4} image2={image5} image3={image6} />
      <TextDivAlt title="Our mission and values" direction="fade-up"
        content="Byte Sense is a place where people can connect, grow, and make an 
        impact. Whether it is to pursue excellence, or to build a community, these are our guiding principles:" />
      <Values direction="fade-up" values="Passion" description="Lorem ipsum amet dolar" />
      <Values direction="fade-up" values="Creativity" description="Lorem ipsum amet dolar" />
      <Values direction="fade-up" values="Loyalty" description="Lorem ipsum amet dolar" />
      <Values direction="fade-up" values="Respect" description="Lorem ipsum amet dolar" />
      <TextDivAlt title="Departments" direction="fade-up" content="Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nunc eu efficitur lorem. In ac sodales lectus. Maecenas 
        vel condimentum orci, non feugiat turpis. Integer vitae gravida est, vel varius urna. 
        Aliquam ultrices vitae risus eu luctus. Integer interdum lorem at feugiat scelerisque. 
        Etiam mi arcu, porttitor quis tincidunt ac, tristique sit amet nisl. Etiam et ligula 
        viverra, vehicula risus ac, euismod nulla." />
        
      <div className="team">
        <Employee image={userImage} name="Security" position="4 open jobs" />
        <Employee image={userImage} name="Developer" position="3 open jobs" />
        <Employee image={userImage} name="HR" position="1 open job" />
        <Employee image={userImage} name="Legal" position="No open job" />
        <Employee image={userImage} name="Retail" position="5 open job" />
        <Employee image={userImage} name="Maintenance" position="1 open job" />
      </div>

      <Footer />
    </div>
  )
}
