import React, { useState } from 'react';
import NavigationBar from './NavigationBarView';


const ContactPageView = () => {
    return (
      <div className="ContactPage">
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, we're glad to help!</p>
  
        <form className="contact-form">

          <div className="form-group">
            <label>Your Name: <input type="text" placeholder="Fariba Mohammadi" required /></label>
          </div>

          <div className="form-group">
            <label>Email: <input type="email" placeholder="Optional" /></label>
          </div>

          <div className="form-group">
            <label>Message: 
                <textarea placeholder="Type your message here..." rows="3" required></textarea></label>
          </div>
          
          <button type="submit">Send Message</button>

        </form>
      </div>
    );
  };
  
  export default ContactPageView;
  
  
  
    
        
  
  
  