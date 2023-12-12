import React, { useState } from 'react';
import NavigationBar from './NavigationBarView';


function ContactPageView (){
    return (
      <div className='HomePage'>
        <div><NavigationBar /></div>
        <div className="ContactPage">
          <h1>Contact Us</h1>
          <p>We are glad to see your feedback.</p>
          <p>Do not hesitate to ask your questions about ingredients, diet, IT support, etc.</p>
          <p>Your questions will be answered by our experts as soon as possible.</p>

          <form className="contact-form">

            <div className="form-group">
              <label>Your Name: <input type="text" placeholder="Fariba Mohammadi" required /></label>
            </div>

            <div className="form-group">
              <label>Email: <input type="email" placeholder="Optional" /></label>
            </div>

            <div className="form-group">
              <label>Message: </label>
                  <textarea placeholder="Type your message here..." rows="3" required></textarea>
            </div>
            
            <button type="submit">Send Message</button>

          </form>
        </div>
      </div>
    );
  };
  
  export default ContactPageView;
  
  
  
    
        
  
  
  