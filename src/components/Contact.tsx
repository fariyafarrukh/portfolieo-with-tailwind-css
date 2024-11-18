import React from 'react';
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsTelephoneInboundFill } from "react-icons/bs";
import './Contact.css'; // Import the custom CSS file

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="contact-title">CLICK IN</h2>
          <p className="contact-description"> 
            The "Contact Me" page is your gateway to connect and collaborate. Whether you have questions, ideas, or simply want to say hello, feel free to reach out! Every message here isn’t just a notification—it’s a chance to spark new ideas, explore fresh perspectives, and build meaningful connections. Let’s start the conversation!
          </p>
          <div className="contact-item">
            <IoMailUnreadOutline size={30}/>
            <a href="mailto:fariyacitrus@gmail.com">fariyacitrus@gmail.com</a>
          </div>
          <div className="contact-item">
            <BsTelephoneInboundFill size={30}/>
            <a href="tel:012345678">012345678</a>
          </div>
        </div>
        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-input" id="name"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-input" id="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="msg">Message</label>
            <textarea className="form-textarea" id="msg" rows={8}></textarea>
          </div>
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
