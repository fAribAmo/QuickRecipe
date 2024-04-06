import React from 'react';
import { Form, Field } from 'react-final-form';
import NavigationBar from './NavigationBarView';

const ContactPageView = () => {
  const onSubmit = async (values) => {
    // Handle form submission, e.g., send data to server
    console.log(values);
  };

  return (
    <div className='HomePage'>
        <div><NavigationBar /></div>
        <div className="ContactPage">
          <h1>Contact Us</h1>
          <p>We are glad to see your feedback.</p>
          <p>Do not hesitate to ask your questions about ingredients, diet, IT support, etc.</p>
          <p>Your questions will be answered by our experts as soon as possible.</p>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit} className='contact-form'>
              <div >
              <label>Your Name: <input type="text" placeholder="name" required /></label>
            </div>
              <div >
                <label>Email:</label>
                <Field
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              
              <div>
            <label>Title:</label>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div>
            <label>Message:</label>
            <Field
              name="message"
              component="textarea"
              placeholder="Your message"
            />
          </div>
          <div>
            <button type='submit' disabled={submitting || pristine}>
              Submit
            </button>
          </div>
        </form>
      )}
    />
    </div>
    </div>
  );
};

export default ContactPageView;