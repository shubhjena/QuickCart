import React from 'react';
import Button from 'react-bootstrap/Button';

const About = () => {
  const containerStyle = {
    margin:'10vh 25vw',
    width: '50%',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>About Us</h2>
      <p style={descriptionStyle}>
        Welcome to our eCommerce store! We are passionate about providing you
        with the best shopping experience. Our mission is to offer high-quality
        products at competitive prices. Whether you're looking for the latest
        fashion trends, home essentials, or unique gifts, we've got you covered.
        Happy shopping!
      </p>
      <Button variant="warning" className='m-3 text-center'>Lets Shop!</Button>
    </div>
  );
};

export default About;
