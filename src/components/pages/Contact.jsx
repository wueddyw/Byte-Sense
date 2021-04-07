import React from 'react';
import '../../styles/contact.css';
import ContactInfo from '../ContactPage/ContactInfo';
import SupportForm from '../ContactPage/SupportForm';
import Footer from '../Footer.js';


export default function SignUp() {
    return (
        <div>
            <header id="header">
                <h3>Contact Us</h3>
            </header>
            <div id="content">
                <ContactInfo/>
                <SupportForm/>
            </div>
            <Footer/>
        </div>
    );
}
