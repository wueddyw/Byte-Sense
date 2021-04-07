import React from 'react';
import Detection from "../../images/detection.jpg";
import Threat from "../../images/threat-monitor.jpg";
import AI from "../../images/ai.jpg";
import CustomApp from "../../images/custom-app.jpg";

export default function Service() {
    return (
        <div id="service-content">
            <div className="image-left" data-aos="fade-right">
                <img src={Detection}/>
            </div>
            <div className="service-right" data-aos="fade-right">
                <h3>Managed Detection and Response</h3>
                <p>
                    We can detect vulnerability by
                    scanning your company’s system infrastructures.
                    We do have our own Cybersecurity tools to scan malicious
                    activities and monitoring any suspicious intruders.
                </p>
            </div>

            <div className="service-left" data-aos="fade-left">
                <h3>Threat monitoring</h3>
                <p>
                    We can install our Cybersecurity tools and trusted applications
                    to monitor traffic and threat issues. We are confident that we
                    can help you protect any vulnerabilities and malicious attacks.
                </p>
            </div>
            <div className="image-right" data-aos="fade-left">
                <img src={Threat}/>
            </div>
            
            
            <div className="image-left" data-aos="fade-right">
                <img src={AI}/>
            </div>
            <div className="service-right" data-aos="fade-right">
                <h3>Combined artificial intelligence (AI) and expert threat intelligence</h3>
                <p>
                    We combined our knowledge in artificial intelligence (AI)
                    and expert threat intelligence to safeguard your employees
                    and organization with consistent, secure, and seamless
                    access to applications, data, and other corporate resources.
                </p>
            </div>
            
            <div className="service-left" data-aos="fade-left">
                <h3>Custom-Built Applications</h3>
                <p>
                    We can custom-build applications for companies
                    that requires certain degree of cyber protections.
                </p>
            </div>
            <div className="image-right" data-aos="fade-left">
                <img src={CustomApp}/>
            </div>
            
        </div>
    );
}