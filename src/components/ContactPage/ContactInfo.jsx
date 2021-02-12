import React from 'react';
import '../../styles/contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactInfo() {
    return (
        <div id="contact">
            <div id='tel'>
                <FontAwesomeIcon icon="phone" />
                <p id="num">(778) 730-1010</p>
            </div>
            <div id='env'>
                <FontAwesomeIcon icon="envelope" />
                <p id="em">info@bytesense.ca</p>
            </div>
            <div id='address'>
                <FontAwesomeIcon icon="map-marker-alt" />
                <p id="add">1122 Kingsway XXX</p>
            </div>
        </div>
    );
}