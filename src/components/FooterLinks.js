import React from "react";


function FooterLinks() {
  return (
    <>
    <div className="footer">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="column">
        <h3>Links</h3>
        <p>Home</p>
        <p>Service</p>
        <p>Products</p>
        <p>Contact Us</p>
      </div>

      <div className="column">
        <h3>Products</h3>
        <p>Standard Byte Scan</p>
        <p>Expert Byte Scan</p>
      </div>

      <div className="column">
        <h3>Services</h3>
        <p>Manage Detection and Response</p>
        <p>Threat monitoring</p>
        <p>Artificial intelligence &amp; expert threat intelligence</p>
        <p>Custom-Built Applications</p>
      </div>

      <div className="column">
        <h3>Follow us</h3>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
      </div>

    </div>

      <div className="mobile-footer">
        <div>
          <a href="#" class="fa fa-facebook"></a>
        </div>
        <div>
          <a href="#" class="fa fa-twitter"></a>
        </div>
      </div>
    </>
    
  );
}

export default FooterLinks;
