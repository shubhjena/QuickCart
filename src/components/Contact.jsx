import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here (e.g., send data to backend)

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    fontSize: '16px',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    fontSize: '16px',
    resize: 'vertical',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  return (
    <div className='w-50 mx-auto my-5 p-5 bg-metal rounded-lg shadow'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className='text-xl font-medium font-mono'>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            className='border-accent border-2 rounded bg-background'
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            className='border-accent border-2 rounded bg-background'
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={textareaStyle}
            className='border-accent border-2 rounded bg-background'
            required
          ></textarea>
        </div>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
