

import React from 'react';
import './Contact.css'; 

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>Have a question or feedback? Reach out to us!</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
