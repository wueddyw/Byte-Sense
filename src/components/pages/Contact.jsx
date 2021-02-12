import React from 'react';
import '../../styles/contact.css';
import email from '../../images/email.png';
import tel from '../../images/telephone.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function SignUp() {
    return (
        <div>
            <header id="header">
                <h3>Contact Us</h3>
            </header>
            <div id="content">
                <div id="contact">
                    <div id='tel'>
                        <FontAwesomeIcon icon="phone"/>
                        <p id="num">(778) 730-1010</p>
                    </div>
                    <div id='env'>
                        <FontAwesomeIcon icon="envelope"/>
                        <p id="em">info@bytesense.ca</p>
                    </div>
                    <div id='address'>
                        <FontAwesomeIcon icon="map-marker-alt"/>
                        <p id="add">1122 Kingsway XXX</p>
                    </div>
                </div>
                <form id="supportForm">
                    <h3>Submit a Form</h3>
                    <input type="text" placeholder="Email" id="email" />
                    <input type="text" placeholder="Your Name" id="name" />
                    <textarea placeholder="Message" id="mess" form="supportForm"></textarea>
                    <input type="submit" id="submitBtn" />
                </form>
            </div>
        </div>
    );
}
