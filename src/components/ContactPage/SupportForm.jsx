import React from 'react';
import '../../styles/contact.css';

export default function SupportForm() {
    return (
        <form id="supportForm">
            <h3>Submit a Form</h3>
            <input type="text" placeholder="Email" id="email" />
            <input type="text" placeholder="Your Name" id="name" />
            <textarea placeholder="Message" id="mess" form="supportForm"></textarea>
            <input type="submit" id="submitBtn" />
        </form>
    );
}