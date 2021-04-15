import React from "react";
import Navbar from "../Navbar";
import Showcase from "../Showcase";
import TextDiv from "../TextDiv";
import TextDivAlt from "../TextDivAlt";
import Footer from "../Footer";
import TripImage from "../TripleImageSpread";
import Values from "../Values";
import Employee from "../Employee";
import "../../App.css";
import "../../styles/career.css";
import image from "../../images/shutterstock3.jpg";
import image4 from "../../images/shutterstock4.jpg";
import image5 from "../../images/shutterstock5.jpg";
import image6 from "../../images/shutterstock6.jpg";
import deptImage1 from "../../images/security.png";
import deptImage2 from "../../images/developer.png";
import deptImage3 from "../../images/hr.png";
import deptImage4 from "../../images/legal.png";
import deptImage5 from "../../images/retail.png";
import deptImage6 from "../../images/maintenance.png";

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Showcase
          image={image}
          title="Career"
          text="Build a career at the cutting edge of cyber security"
        />
        <TextDiv
          title="Building a safe and secure future"
          direction="fade-up"
          content="Byte Sense was formed with one mission in mind - to provide the world
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
        <TripImage
          direction="fade-up"
          image1={image4}
          image2={image5}
          image3={image6}
        />
        <TextDivAlt
          title="Our mission and values"
          direction="fade-up"
          content="Byte Sense is a place where people can connect, grow, and make an 
        impact. Whether it is to pursue excellence, or to build a community, these are our guiding principles:"
        />
        <Values
          direction="fade-up"
          values="Passion"
          description="Passion is at the heart of our company.
         We are continuously moving forward, innovating, and improving."
        />
        <Values
          direction="fade-up"
          values="Creativity"
          description="Employees are fountains of new ideas.
        We keep an open mind to to help drive innovation."
        />
        <Values
          direction="fade-up"
          values="Integrity"
          description="We are honest, open, ethical, 
        and fair. We adhere to our word so that people may trust us with their security."
        />
        <Values
          direction="fade-up"
          values="Respect"
          description="We strive to show deep respect 
        for everyone inside and outside our company and for the communities in which they live."
        />
        <TextDivAlt
          title="Departments"
          direction="fade-up"
          content="Byte Sense is shaping the future for cyber security, and you could be part of
           it. We are constantly looking for talent in a variety of fields, from mathematics and 
           software engineering to sales and marketing. If you want to work at the cutting edge 
           of technology and are willing to rise to a challenge, we'd love to hear from you."
        />

        <div className="team">
          <Employee image={deptImage1} name="Security" position="4 open jobs" />
          <Employee
            image={deptImage2}
            name="Developer"
            position="3 open jobs"
          />
          <Employee image={deptImage3} name="HR" position="1 open job" />
          <Employee image={deptImage4} name="Legal" position="No open job" />
          <Employee image={deptImage5} name="Retail" position="5 open job" />
          <Employee
            image={deptImage6}
            name="Maintenance"
            position="1 open job"
          />
        </div>

        <Footer />
      </div>
    </>
  );
}
