import React from 'react';
import '../../styles/contact.css';

export default function SupportForm() {
    return (
        <div>
            <form id="supportForm">
                <div className="formDiv">
                    <h3>Submit a Form</h3>
                </div>
                <div className="formDiv">
                    <p>Name</p>
                    <input type="text" className="formInput" />
                </div>
                <div className="formDiv"> 
                    <p>Email</p>
                    <input type="text" className="formInput"/>
                </div>
                <div className="formDiv">
                    <p>Message</p>
                    <textarea className="message" form="supportForm"></textarea>
                </div>
                <div className="formDiv" id="buttonDiv">
                    <button type="submit" form="supportForm" id="submitBtn">Submit</button>
                </div>
            </form>
        </div>
    );
}