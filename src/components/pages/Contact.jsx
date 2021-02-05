import React from 'react';
import '../../App.css';
import './Contact.css';
import email from '../../images/email.png';
import tel from '../../images/telephone.png';
import liveChat from '../../images/live-chat.png';

export default function SignUp() {
  return (
    <div id="content">
            <h1>Contact Us</h1>
            <div id="grid-columns">
                <div class="col-div">
                    <p>Phone</p>
                    <div class="img-div">
                        <img src={tel}/>
                    </div>
                    <p>123-456-7890</p>
                </div>
                <div class="col-div">
                    <p>Email</p>
                    <div class="img-div">
                        <img src={email}/>
                    </div>
                    <p>test@email.com</p>
                </div>
                <div class="col-div">
                    <p>Live Chat</p>
                    <div class="img-div">
                        <img src={liveChat}/>
                    </div>
                </div>
            </div>
            <form id="supportForm">
                <h2>Submit a Form</h2>
                <input type="text" placeholder="Email" id="email"/>
                <input type="text" placeholder="Your Name" id="name"/>
                <textarea placeholder="Message" id="mess" form="supportForm"></textarea>
                <input type="submit" id="submitBtn"/>
            </form>
        </div>
  );
}
