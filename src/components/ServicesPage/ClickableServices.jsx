import React from 'react';
import { Link } from 'react-router-dom';

export default function ClickableServices() {
    return (
        <div className="four-services">
            <Link to = '/Managed-Detection-and-Response'>
                <div className="service-child">
                    <div>
                        <img src="https://via.placeholder.com/1200x600" />
                    </div>
                    <div className="service-text">
                        <h3>Managed Detection and Response</h3>
                    </div>
                </div>
            </Link>

            <Link to = '/Threat-Monitoring'>
                <div className="service-child">
                    <div>
                        <img src="https://via.placeholder.com/1200x600" />
                    </div>
                    <div className="service-text">
                        <h3>Threat monitoring</h3>
                    </div>
                </div>
            </Link>



            <Link to = 'Combined-AI-and-Expert-Threat-Intelligence'>
                <div className="service-child">
                    <div>
                        <img src="https://via.placeholder.com/1200x600" />
                    </div>
                    <div className="service-text">
                        <h3>Combined artificial intelligence (AI) and expert threat intelligence</h3>
                    </div>
                </div>
            </Link>

            <Link to = 'Custom-Built-Applications'>
                <div className="service-child">
                    <div>
                        <img src="https://via.placeholder.com/1200x600" />
                    </div>
                    <div className="service-text">
                        <h3>Custom-Built Applications</h3>
                    </div>
                </div>
            </Link>


        </div>
    );
}