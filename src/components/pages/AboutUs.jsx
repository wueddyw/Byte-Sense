import { render } from "@testing-library/react";
import React from "react";
import Showcase from "../Showcase";
import TextDiv from "../TextDiv";
import ImageTextDiv from "../ImageTextDiv";
import FourDivs from "../FourDivs";
import Footer from "../Footer";
import Copyright from "../Copyright";
import "../../App.css";
import "../../styles/about.css";
// import AOS from "aos";
// import "aos/dist/aos.css"

export default function ContactUs() {

  // useEffect(() => {
  //   AOS.init({ duration: 1000 })
  // }, []);

  return (
    <div className="wrapper">
      <Showcase />
      <TextDiv />
      <ImageTextDiv />
      <FourDivs />
      <Footer />
      <Copyright />
    </div>
  );
}
