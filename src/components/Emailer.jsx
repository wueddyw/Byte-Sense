
import React, { useEffect, useState } from "react";
import emailjs from 'emailjs-com';
//import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Input } from 'react-bootstrap';


import ReactDOM from "react-dom";
import { Col, Row, Form } from "react-bootstrap";


import { FormLabel } from 'react-bootstrap';

import './Emailer.css';




export default function Emailer () {
    const [nameValue,setName] = useState("");
    const [emailValue,setEmail] = useState("");
    const [messageValue,setMessage] = useState("");




    //simulate loading
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        if (isLoading) {
        simulateNetworkRequest().then(() => {
            setLoading(false);
        });
        }
    }, [isLoading]);
    const handleClick = (e) => {
        setLoading(true);
 
        simulateNetworkRequest().then(() => {
            setName("");
            setEmail("");
            setMessage("");
        });

    };

    //used to actually send the email
  function sendEmail(e) {
    // console.log("hi");
    e.preventDefault();

    emailjs.sendForm('service_s0l8fpg', 'contact_form', e.target, 'user_qUIF0RuA5mofg3cDvYJRZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


  //handle the clearing of the form when submit has been clicked


function FixName(e){
    setName(e.target.value);
}

function FixEmail(e){
    setEmail(e.target.value);
}

function FixMessage(e){
    setMessage(e.target.value);
}


  return (
      <>
      <div className="contact-me-flex">
      <div className="contact-me-label-break"/>
      <div className="contact-me-label-break"/>
        <div className="contact-me-div">
            <div className="contact-me-header">
                Submit A Form
            </div>
            <div className="contact-me-label-break"></div>
            <Form id="hiTest" className="contact-form" onSubmit={sendEmail}>
                <Form.Control type="hidden" name="contact_number" value={Math.floor(Math.random()*(100000-0+1)+0).toString()}/>
                <FormLabel className="contact-me-label">Name<br/></FormLabel>
                <Form.Control className="contact-me-textbox" type="text" name="user_name" value={nameValue} onChange={FixName}/><br/>
                <div className="contact-me-label-break"></div>
                <FormLabel className="contact-me-label">Email<br/></FormLabel>
                <Form.Control className="contact-me-textbox" type="email" name="user_email" value={emailValue} onChange={FixEmail}/><br/>
                <div className="contact-me-label-break"></div>
                <FormLabel className="contact-me-label">Message<br/></FormLabel>
                <Form.Control className="contact-me-textarea" as="textarea" rows={8} name="message" value={messageValue} onChange={FixMessage}/><br/>
                <div className="contact-me-label-break"></div>
                <Button  form="hiTest" className="contact-me-submit" type="submit" value="Send"  variant="primary" onClick={!isLoading ? handleClick : null}>
                    {isLoading ? 'Submitting...' : 'Submit'}
                </Button><br/>
            </Form>
        </div>
      </div>
    </>
  );
}




//simulate loading
function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}
  