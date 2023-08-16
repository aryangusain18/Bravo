import React from 'react';

const footerStyles = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
};

const iconStyles = {
  color: '#fff',
  fontSize: '24px',
  marginRight: '10px',
  textDecoration: 'none',
};

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href="#" target="_blank" rel="noopener noreferrer" style={iconStyles}>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={iconStyles}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={iconStyles}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
