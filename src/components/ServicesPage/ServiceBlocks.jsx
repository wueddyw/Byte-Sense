import React from 'react';

import managedImage from '../../images/home/home-managed.png';
import threatImage from '../../images/home/home-threat.png';
import artificialImage from '../../images/home/home-artificial.png';
import customImage from '../../images/home/home-custom.png';

export default function ServiceBlocks() {
    return (
        <div className="four-services">
            <div className="service-child">
                <div>
                    <img src={managedImage} />
                </div>
                <div className="service-text">
                    <p>

                        We can detect vulnerability by
                        scanning your company’s system infrastructures.
                        We do have our own Cybersecurity tools to scan malicious
                        activities and monitoring any suspicious intruders.
                    </p>
                </div>
            </div>

            <div className="service-child">
                <div>
                    <img src={threatImage}/>
                </div>
                <div className="service-text">
                    <p>
                        We can install our Cybersecurity tools and trusted applications
                        to monitor traffic and threat issues. We are confident that we
                        can help you protect any vulnerabilities and malicious attacks.
                    </p>
                </div>
            </div>




            <div className="service-child">
                <div>
                    <img src={artificialImage} />
                </div>
                <div className="service-text">
                    <p>
                        We combined our knowledge in artificial intelligence (AI)
                        and expert threat intelligence to safeguard your employees
                        and organization with consistent, secure, and seamless
                        access to applications, data, and other corporate resources.
                    </p>
                </div>
            </div>

            <div className="service-child">
                <div>
                    <img src={customImage}/>
                </div>
                <div className="service-text">
                    <p>
                        We can custom-build applications for companies
                        that requires certain degree of cyber protections.
                    </p>
                </div>
            </div>


        </div>
    );
}