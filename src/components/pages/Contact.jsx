import React from "react";
import "../../styles/contact.css";
import Navbar from "../Navbar";
import ContactInfo from "../ContactPage/ContactInfo";
import SupportForm from "../ContactPage/SupportForm";
import Footer from "../Footer.js";
import Banner from "../../images/contact_back.jpg";
import Showcase from "../Showcase";

export default function SignUp() {
  return (
    <>
      <Navbar />
      <div className="contact-body">
        <Showcase image={Banner} title="Contact Us" text="" />
        <div id="content">
          <ContactInfo />
          <SupportForm />
        </div>
        <Footer />
      </div>
    </>
  );
}
