import React, { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message sent:', message);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
