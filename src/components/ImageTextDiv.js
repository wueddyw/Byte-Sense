import React from "react";
import image from "../images/aboutimage.jpg";
import image2 from "../images/aboutimage2.jpg";
import image3 from "../images/aboutimage3.jpg";

function ImageTextDiv() {
  return (
    <div>
      <div className="what-we-do" data-aos="fade-left">
        <div className="image">
          <img src={image2} />
        </div>

        <div className="text-right">
          <div>
            <h3>Placeholder</h3>
          </div>

          <div>
            <p>
              It is very important to secure your computer systems and servers
              due to the fact you do not want to leak out sensitive company’s
              data, personally identifiable information, protected health
              information, governmental and industry information systems from
              theft and damage attempted. The modern-day IT systems and their
              infrastructure are susceptible to complex malwares and other
              online threats.
            </p>
          </div>
        </div>
      </div>

      <div className="what-we-do" data-aos="fade-right">
        <div className="text-left">
          <div>
            <h3>Placeholder</h3>
          </div>
          <div>
            <p>
              Our tailer-made solutions can help you stay ahead of the game. Our
              Cyber security team is backed by years of experiences and trusted
              by clients from medium-size enterprises to global conglomerates.
              We have help companies with device security where we used our
              products and services to protect their system from being hacked
              and compromised by virus and other online threats. We have used
              custom-built applications and strategy to monitor computer system
              suspicious activities. As we do provide full penetration testing
              for companies and provide the customer with recommend system
              remediation report.
            </p>
          </div>
        </div>

        <div className="image">
          <img src={image} />
        </div>
      </div>

      <div className="what-we-do" data-aos="fade-left">
        <div className="image">
          <img src={image3} />
        </div>

        <div className="text-right">
          <div>
            <h3>Placeholder</h3>
          </div>
          <div>
            <p>
              Byte Sense is headquartered in Vancouver, Canada – the next IT hub
              of North America. Although Canada and United States are deeply
              aware of Cyberattacks because due to the fact that we are the
              highest rank countries being attacked online comparing to the
              world. There are multiple of companies in Canada who have
              experienced Cyberattack and sensitive data are being compromised
              daily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageTextDiv;
