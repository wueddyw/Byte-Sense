import React from 'react';
import { Link } from 'react-router-dom';
import managedImage from '../../images/home/home-managed.png';
import threatImage from '../../images/home/home-threat.png';
import artificialImage from '../../images/home/home-artificial.png';
import customImage from '../../images/home/home-custom.png';

export default function ClickableServices() {
    return (
        <div className="four-services" data-aos="fade-up">
            <Link to = '/Managed-Detection-and-Response'>
                <div className="service-child-click">
                    <div>
                        <img src={managedImage}/>
                    </div>
                </div>
            </Link>

            <Link to = '/Threat-Monitoring'>
                <div className="service-child-click">
                    <div>
                        <img src={threatImage} />
                    </div>
                </div>
            </Link>



            <Link to = 'Combined-AI-and-Expert-Threat-Intelligence'>
                <div className="service-child-click">
                    <div>
                        <img src={artificialImage} />
                    </div>
                </div>
            </Link>

            <Link to = 'Custom-Built-Applications'>
                <div className="service-child-click">
                    <div>
                        <img src={customImage} />
                    </div>
                </div>
            </Link>

        </div>
    );
}